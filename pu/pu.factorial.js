const request = require("supertest");
const app = require("../src/index");

describe("factorial", () => {
    it("ideal", (done) => {
        request(app)
            .post("/factorial")
            .send({ numero: 5 })
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
            .post("/factorial")
            .send({ numero: -10 })
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
            .post("/factorial")
            .send({})
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
            .post("/factorial")
            .send({ numero: 171})
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    }).timeout(10000);
});
