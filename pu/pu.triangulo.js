const request = require("supertest");
const app = require("../src/index");

describe("triangulo", () => {
    it("good data", (done) => {
        request(app)
            .post("/triangulo")
            .send({ ladoa: 10, ladob: 10, ladoc: 10 })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    }).timeout(100000);

    it("bad data one larger", (done) => {
        request(app)
            .post("/triangulo")
            .send({ ladoa: 100, ladob: 10, ladoc: 10 })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    }).timeout(100000);

    it("bad data negative", (done) => {
        request(app)
            .post("/triangulo")
            .send({ ladoa: -10, ladob: 10, ladoc: 10 })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    }).timeout(100000);
});