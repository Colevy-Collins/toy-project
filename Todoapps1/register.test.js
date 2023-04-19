const request = require("supertest")
const baseURL = "http://localhost:5500"


describe("GET /id", () => {
      it("test if posts all post have id", async () => {
        
        await request(baseURL).post(`/createTest`).send({username: 'testuser1', email: 'test1@email', password: '1234561', password2: '1234561'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/createTest`).send({username: 'testuser2', email: 'test2@email', password: '1234562', password2: '1234562'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/createTest`).send({username: 'testuser3', email: 'test3@email', password: '1234563', password2: '1234563'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/createTest`).send({username: 'testuser4', email: 'test4@email', password: '1234564', password2: '1234564'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/createTest`).send({username: 'testuser5', email: 'test5@email', password: '1234565', password2: '1234565'}).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const deleteTest6 =  await request(baseURL).get('/clearUser');
        const res6 =  await request(baseURL).get(`/Test4`);
        expect(res6.body).toStrictEqual([]);
    
    });
    });



// unit test of ID