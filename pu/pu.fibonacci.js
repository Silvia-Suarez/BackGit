const request = require("supertest");
const app = require("../src/index");

describe("fibonacci", () => {
    it("ideal", (done) => {
        request(app)
            .post("/fibonacci")
            .send({ numero: 7 })
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
            .post("/fibonacci")
            .send({ numero: -10 })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    }).timeout(10000);

    it("numero muy grande", (done) => {
        request(app)
            .post("/fibonacci")
            .send({ numero: 100000})
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    }).timeout(10000);

    it("no numero", (done) => {
        request(app)
            .post("/fibonacci")
            .send({ numero:"a"})
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
            .post("/fibonacci")
            .send()
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    }).timeout(10000);
});