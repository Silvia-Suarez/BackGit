const request = require("supertest");
const app = require("../src/index");

describe("rectangulo", () => {
    it("good data", (done) => {
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
    }).timeout(100000);

    it("bad data negative", (done) => {
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
    }).timeout(100000);

    it("no data", (done) => {
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
    }).timeout(100000);
});