const request = require("supertest");
const app = require("../src/index");

describe("rectangulo", () => {
    it("ideal", (done) => {
        request(app)
            .post("/rectangulo")
            .send({ base: 10, altura: 10 })
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
            .post("/rectangulo")
            .send({ base: 100, altura: -10 })
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
            .post("/rectangulo")
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
