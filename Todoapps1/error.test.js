const request = require("supertest")
const baseURL = "http://localhost:5500"


//regression, integration and acceptance test
describe("POST /error", () => {
      it("test the error with adding empty post is caught", async () => {
        
        await request(baseURL).post(`/logging`).send({username: 'test', pasword: '123456'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
        const response =await request(baseURL).post(`/add`).send().set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(response.status).toBe(302);

        });
    });

// unit test of error
describe("POST /error", () => {
      it("test the error with adding empty post is caught", async () => {

        const response =await request(baseURL).post(`/add`).send().set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(response.status).toBe(302);

        });
    });
describe("POST /error", () => {
      it("test the error with adding empty post is caught", async () => {

        const response =await request(baseURL).post(`/add`).send().set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(response.status).toBe(302);

        });
    });
describe("POST /error", () => {
      it("test the error with adding empty post is caught", async () => {

        const response =await request(baseURL).post(`/add`).send().set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(response.status).toBe(302);

        });
    });
describe("POST /error", () => {
      it("test the error with adding empty post is caught", async () => {

        const response =await request(baseURL).post(`/add`).send().set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(response.status).toBe(302);

        });
    });
describe("POST /error", () => {
      it("test the error with adding empty post is caught", async () => {

        const response =await request(baseURL).post(`/add`).send().set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(response.status).toBe(302);

        });
    });