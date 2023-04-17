const request = require("supertest")
const baseURL = "http://localhost:5500"


describe("GET /id", () => {
      it("test if posts all post have id", async () => {

        await request(baseURL).post(`/logging`).send({username: 'test', pasword: '123456'}).set('Content-Type', 'application/json').set('Accept', 'application/json');

        await request(baseURL).post(`/add`).send( {content : "test1"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test2"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test3"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test4"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test5"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test6"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test7"}).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const res =  await request(baseURL).get(`/Test3`);
        //console.log(res.body)
        const tasks = res.body;
        //console.log(tasks)
        tasks.forEach(async (post) => {
    
            if(post._id !== null ||post._id !== undefined ||post._id !== ""){
                //console.log(post._id)
                expect(1).toBe(1);

            } 
            else {
                //console.log(post._id)
                expect(1).toBe(2);
            }
            
            
        });


        
        await request(baseURL).get('/clear');
        await request(baseURL).post(`/add`).send( {content : "clear test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');


    });
    });



// unit test of ID
describe("GET /id", () => {
      it("test if posts all post have id", async () => {

        await request(baseURL).post(`/add`).send( {content : "test1"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test2"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test3"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test4"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test5"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test6"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test7"}).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const res =  await request(baseURL).get(`/Test3`);
        //console.log(res.body)
        const tasks = res.body;
        //console.log(tasks)
        tasks.forEach(async (post) => {
    
            if(post._id !== null ||post._id !== undefined ||post._id !== ""){
                //console.log(post._id)
                expect(1).toBe(1);

            } 
            else {
                //console.log(post._id)
                expect(1).toBe(2);
            }
          
            
        });


        
        await request(baseURL).get('/clear');
        await request(baseURL).post(`/add`).send( {content : "clear test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');


    });
    });
describe("GET /id", () => {
      it("test if posts all post have id", async () => {

        await request(baseURL).post(`/add`).send( {content : "test1"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test2"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test3"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test4"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test5"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test6"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test7"}).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const res =  await request(baseURL).get(`/Test3`);
        //console.log(res.body)
        const tasks = res.body;
        //console.log(tasks)
        tasks.forEach(async (post) => {
    
            if(post._id !== null ||post._id !== undefined ||post._id !== ""){
                //console.log(post._id)
                expect(1).toBe(1);

            } 
            else {
                //console.log(post._id)
                expect(1).toBe(2);
            }
            
            
        });


        
        await request(baseURL).get('/clear');
        await request(baseURL).post(`/add`).send( {content : "clear test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');


    });
    });
describe("GET /id", () => {
      it("test if posts all post have id", async () => {

        await request(baseURL).post(`/add`).send( {content : "test1"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test2"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test3"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test4"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test5"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test6"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test7"}).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const res =  await request(baseURL).get(`/Test3`);
        //console.log(res.body)
        const tasks = res.body;
        //console.log(tasks)
        tasks.forEach(async (post) => {
    
            if(post._id !== null ||post._id !== undefined ||post._id !== ""){
                //console.log(post._id)
                expect(1).toBe(1);

            } 
            else {
                //console.log(post._id)
                expect(1).toBe(2);
            }
            
            
        });


        
        await request(baseURL).get('/clear');
        await request(baseURL).post(`/add`).send( {content : "clear test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');


    });
    });
describe("GET /id", () => {
      it("test if posts all post have id", async () => {

        await request(baseURL).post(`/add`).send( {content : "test1"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test2"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test3"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test4"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test5"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test6"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test7"}).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const res =  await request(baseURL).get(`/Test3`);
        //console.log(res.body)
        const tasks = res.body;
        //console.log(tasks)
        tasks.forEach(async (post) => {
    
            if(post._id !== null ||post._id !== undefined ||post._id !== ""){
                //console.log(post._id)
                expect(1).toBe(1);

            } 
            else {
                //console.log(post._id)
                expect(1).toBe(2);
            }
            
            
        });


        
        await request(baseURL).get('/clear');
        await request(baseURL).post(`/add`).send( {content : "clear test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');


    });
    });
describe("GET /id", () => {
      it("test if posts all post have id", async () => {

        await request(baseURL).post(`/add`).send( {content : "test1"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test2"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test3"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test4"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test5"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test6"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send( {content : "test7"}).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const res =  await request(baseURL).get(`/Test3`);
        //console.log(res.body)
        const tasks = res.body;
        //console.log(tasks)
        tasks.forEach(async (post) => {
    
            if(post._id !== null ||post._id !== undefined ||post._id !== ""){
                //console.log(post._id)
                expect(1).toBe(1);

            } 
            else {
                //console.log(post._id)
                expect(1).toBe(2);
            }
            
            
        });


        
        await request(baseURL).get('/clear');
        await request(baseURL).post(`/add`).send( {content : "clear test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');


    });
    });