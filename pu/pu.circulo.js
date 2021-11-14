const request = require("supertest");
const app = require("../src/index");


describe("circulo", () => {
    it("ideal", (done) => {
        request(app)
            .post("/circulo")
            .send({ radio: 10 })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    }).timeout(100000);

    it("numero negativo", (done) => {
        request(app)
            .post("/circulo")
            .send({ radio: -10 })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    }).timeout(100000);

    it("nulos", (done) => {
        request(app)
            .post("/circulo")
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