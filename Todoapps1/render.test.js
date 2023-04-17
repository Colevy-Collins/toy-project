const request = require("supertest")
const baseURL = "http://localhost:5500"


//regression, integration and acceptance test
describe("GET /render", () => {
      it("test if all api that render do so", async () => {

        await request(baseURL).post(`/logging`).send({username: 'test', password: '123456'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
            const response =    await request(baseURL).get('/')
            //console.log(response.body.error)
            expect(response.status).toBe(302);
            expect(response.body.error).toBe(undefined)
    
            const response1 =    await request(baseURL).get('/list')
            expect(response1.status).toBe(302);
            expect(response1.body.error).toBe(undefined)
            //console.log(response.body.error)
    
            const response2 =    await request(baseURL).get('/edit/:id')
            expect(response1.status).toBe(302);
            expect(response1.body.error).toBe(undefined)
            //console.log(response.body.error)
    
            const response3 =    await request(baseURL).get('/instruction')
            expect(response2.status).toBe(302);
            expect(response2.body.error).toBe(undefined)
            //console.log(response.body.error)
    
            const response4 =    await request(baseURL).get('/error')
            expect(response2.status).toBe(302);
            expect(response2.body.error).toBe(undefined)
            //console.log(response.body.error)
    
            await request(baseURL).post(`/add`).send( {content : "render test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
        });
    });
//unit test of renders
describe("GET /render", () => {
      it("test if all api that render do so", async () => {
    
            const response =    await request(baseURL).get('/')
            //console.log(response.body.error)
            expect(response.status).toBe(302);
            expect(response.body.error).toBe(undefined)
    
            const response1 =    await request(baseURL).get('/list')
            expect(response1.status).toBe(302);
            expect(response1.body.error).toBe(undefined)
            //console.log(response.body.error)
    
            const response2 =    await request(baseURL).get('/edit/:id')
            expect(response1.status).toBe(302);
            expect(response1.body.error).toBe(undefined)
            //console.log(response.body.error)
    
            const response3 =    await request(baseURL).get('/instruction')
            expect(response2.status).toBe(302);
            expect(response2.body.error).toBe(undefined)
            //console.log(response.body.error)
    
            const response4 =    await request(baseURL).get('/error')
            expect(response2.status).toBe(302);
            expect(response2.body.error).toBe(undefined)
            //console.log(response.body.error)
    
            await request(baseURL).post(`/add`).send( {content : "render test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
        });
    });

    describe("GET /render", () => {
  it("test if all api that render do so", async () => {

        const response =    await request(baseURL).get('/')
        //console.log(response.body.error)
        expect(response.status).toBe(302);
        expect(response.body.error).toBe(undefined)

        const response1 =    await request(baseURL).get('/list')
        expect(response1.status).toBe(302);
        expect(response1.body.error).toBe(undefined)
        //console.log(response.body.error)

        const response2 =    await request(baseURL).get('/edit/:id')
        expect(response1.status).toBe(302);
        expect(response1.body.error).toBe(undefined)
        //console.log(response.body.error)

        const response3 =    await request(baseURL).get('/instruction')
        expect(response2.status).toBe(302);
        expect(response2.body.error).toBe(undefined)
        //console.log(response.body.error)

        const response4 =    await request(baseURL).get('/error')
        expect(response2.status).toBe(302);
        expect(response2.body.error).toBe(undefined)
        //console.log(response.body.error)

        await request(baseURL).post(`/add`).send( {content : "render test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');

    });
});
describe("GET /render", () => {
  it("test if all api that render do so", async () => {

        const response =    await request(baseURL).get('/')
        //console.log(response.body.error)
        expect(response.status).toBe(302);
        expect(response.body.error).toBe(undefined)

        const response1 =    await request(baseURL).get('/list')
        expect(response1.status).toBe(302);
        expect(response1.body.error).toBe(undefined)
        //console.log(response.body.error)

        const response2 =    await request(baseURL).get('/edit/:id')
        expect(response1.status).toBe(302);
        expect(response1.body.error).toBe(undefined)
        //console.log(response.body.error)

        const response3 =    await request(baseURL).get('/instruction')
        expect(response2.status).toBe(302);
        expect(response2.body.error).toBe(undefined)
        //console.log(response.body.error)

        const response4 =    await request(baseURL).get('/error')
        expect(response2.status).toBe(302);
        expect(response2.body.error).toBe(undefined)
        //console.log(response.body.error)

        await request(baseURL).post(`/add`).send( {content : "render test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');

    });
});
describe("GET /render", () => {
  it("test if all api that render do so", async () => {

        const response =    await request(baseURL).get('/')
        //console.log(response.body.error)
        expect(response.status).toBe(302);
        expect(response.body.error).toBe(undefined)

        const response1 =    await request(baseURL).get('/list')
        expect(response1.status).toBe(302);
        expect(response1.body.error).toBe(undefined)
        //console.log(response.body.error)

        const response2 =    await request(baseURL).get('/edit/:id')
        expect(response1.status).toBe(302);
        expect(response1.body.error).toBe(undefined)
        //console.log(response.body.error)

        const response3 =    await request(baseURL).get('/instruction')
        expect(response2.status).toBe(302);
        expect(response2.body.error).toBe(undefined)
        //console.log(response.body.error)

        const response4 =    await request(baseURL).get('/error')
        expect(response2.status).toBe(302);
        expect(response2.body.error).toBe(undefined)
        //console.log(response.body.error)

        await request(baseURL).post(`/add`).send( {content : "render test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');

    });
});
describe("GET /render", () => {
      it("test if all api that render do so", async () => {
    
            const response =    await request(baseURL).get('/')
            //console.log(response.body.error)
            expect(response.status).toBe(302);
            expect(response.body.error).toBe(undefined)
    
            const response1 =    await request(baseURL).get('/list')
            expect(response1.status).toBe(302);
            expect(response1.body.error).toBe(undefined)
            //console.log(response.body.error)
    
            const response2 =    await request(baseURL).get('/edit/:id')
            expect(response1.status).toBe(302);
            expect(response1.body.error).toBe(undefined)
            //console.log(response.body.error)
    
            const response3 =    await request(baseURL).get('/instruction')
            expect(response2.status).toBe(302);
            expect(response2.body.error).toBe(undefined)
            //console.log(response.body.error)
    
            const response4 =    await request(baseURL).get('/error')
            expect(response2.status).toBe(302);
            expect(response2.body.error).toBe(undefined)
            //console.log(response.body.error)
    
            await request(baseURL).post(`/add`).send( {content : "render test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
        });
    });
describe("GET /render", () => {
      it("test if all api that render do so", async () => {
    
            const response =    await request(baseURL).get('/')
            //console.log(response.body.error)
            expect(response.status).toBe(302);
            expect(response.body.error).toBe(undefined)
    
            const response1 =    await request(baseURL).get('/list')
            expect(response1.status).toBe(302);
            expect(response1.body.error).toBe(undefined)
            //console.log(response.body.error)
    
            const response2 =    await request(baseURL).get('/edit/:id')
            expect(response1.status).toBe(302);
            expect(response1.body.error).toBe(undefined)
            //console.log(response.body.error)
    
            const response3 =    await request(baseURL).get('/instruction')
            expect(response2.status).toBe(302);
            expect(response2.body.error).toBe(undefined)
            //console.log(response.body.error)
    
            const response4 =    await request(baseURL).get('/error')
            expect(response2.status).toBe(302);
            expect(response2.body.error).toBe(undefined)
            //console.log(response.body.error)
    
            await request(baseURL).post(`/add`).send( {content : "render test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
        });
    });
