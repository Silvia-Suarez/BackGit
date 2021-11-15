const request = require("supertest");
const app = require("../src/index");

describe("triangulo", () => {
    it("ideal", (done) => {
        request(app)
            .post("/triangulo")
            .send({ ladoa: 4, ladob: 4, ladoc: 3 })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    }).timeout(10000);

    it("numero negativo", (done) => {
        request(app)
            .post("/triangulo")
            .send({ ladoa: -3, ladob: 5 ladoc: 10 })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    }).timeout(10000);

    it("nulo", (done) => {
        request(app)
            .post("/triangulo")
            .send({})
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    }).timeout(10000);
});
