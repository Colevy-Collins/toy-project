const request = require("supertest")
const baseURL = "http://localhost:5500"


describe("GET /id", () => {
      it("test if posts all post have id", async () => {

        const deleteTest7 =  await request(baseURL).get('/clearUser');
        const res7 =  await request(baseURL).get(`/Test4`);
        expect(res7.body).toStrictEqual([]);
        
        await request(baseURL).post(`/createTest`).send({username: 'testuser1', email: 'test1@email', password: '1234561', password2: '1234561'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/createTest`).send({username: 'testuser2', email: 'test2@email', password: '1234562', password2: '1234562'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/createTest`).send({username: 'testuser3', email: 'test3@email', password: '1234563', password2: '1234563'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/createTest`).send({username: 'testuser4', email: 'test4@email', password: '1234564', password2: '1234564'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/createTest`).send({username: 'testuser5', email: 'test5@email', password: '1234565', password2: '1234565'}).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const res = await request(baseURL).post(`/loggingTest`).send({username: 'testuser1', password: '1234561'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res.text).toBe("25")

        const res1 = await request(baseURL).post(`/loggingTest`).send({username: 'testuser2', password: '1234562'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res1.text).toBe("25")

        const res2 = await request(baseURL).post(`/loggingTest`).send({username: 'testuser3', password: '1234563'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res2.text).toBe("25")

        const res3 = await request(baseURL).post(`/loggingTest`).send({username: 'testuser4', password: '1234564'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res3.text).toBe("25")

        const res4 = await request(baseURL).post(`/loggingTest`).send({username: 'testuser5', password: '1234565'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res4.text).toBe("25")

        const deleteTest6 =  await request(baseURL).get('/clearUser');
        const res6 =  await request(baseURL).get(`/Test4`);
        expect(res6.body).toStrictEqual([]);

        await request(baseURL).post(`/createTest`).send({username: 'test', email: 'test1@email', password: '123456', password2: '123456'}).set('Content-Type', 'application/json').set('Accept', 'application/json');

    
    });
    });



// unit test of ID