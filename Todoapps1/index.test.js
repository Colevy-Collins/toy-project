const request = require("supertest")
const baseURL = "http://localhost:5500"


//regression, integration and acceptance test
describe("POST /update", () => {
    const newTodo = {
        content : "test0",
        date : "",
    }
    beforeAll(async () => {
        await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');

    })
    afterAll(async () => {
        const res = await request(baseURL).get(`/Test`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res.body.content).toBe("this has been updated");
        await request(baseURL).get(`/delete/` + res.body._id);
        const res2 =  await request(baseURL).get(`/Test2`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res2.body).toStrictEqual({});

        await request(baseURL).post(`/add`).send( {content : "update test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    })
    it("update the post added to the post database", async () => {
        const res = await request(baseURL).get(`/Test`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res.body.content).toBe(newTodo.content);
        await request(baseURL).post(`/update`).send({_id : res.body._id, content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const res2 =  await request(baseURL).get(`/Test`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res2.body.content).toBe("this has been updated");
    });
});

describe("DELETE /delete", () => {
    const newTodo = {
        content : "test0",
        date : "",
    }
    const newTodo1 = {
        content : "test1",
        date : "",
    }
    const newTodo2 = {
        content : "test2",
        date : "",
      }
    const newTodo3 = {
        content : "test3",
        date : "",
      }
    const newTodo4 = {
        content : "test4",
        date : "",
      }
    const newTodo5 = {
        content : "test5",
        date : "",
      }
    const newTodo6 = {
        content : "test6",
        date : "",
      }
          
      beforeAll(async () => {
        await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
      })
        it("add and delete several post in diffrent orders", async () => {
        
        const query =  await request(baseURL).get('/Test').send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest =  await request(baseURL).get(`/delete/` + query.body._id);
        const res =  await request(baseURL).get(`/Test2`).send(query.body.content).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res.body).toStrictEqual({});

        await request(baseURL).post(`/add`).send(newTodo2).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const query2 =  await request(baseURL).get('/Test').send(newTodo2).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest1 =  await request(baseURL).get(`/delete/` + query2.body._id);
        const res1 =  await request(baseURL).get(`/Test2`).send(query2.body.content).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res1.body).toStrictEqual({});

        await request(baseURL).post(`/add`).send(newTodo3).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo4).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const query3 =  await request(baseURL).get('/Test').send(newTodo4).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest2 =  await request(baseURL).get(`/delete/` + query3.body._id);;
        const res2 =  await request(baseURL).get(`/Test2`).send(query3.body.content).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res2.body).toStrictEqual({});

        const query4 =  await request(baseURL).get('/Test').send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest3 =  await request(baseURL).get(`/delete/` + query4.body._id);
        const res3 =  await request(baseURL).get(`/Test2`).send(query4.body.content).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res3.body).toStrictEqual({});

        await request(baseURL).post(`/add`).send(newTodo5).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo6).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const query5 =  await request(baseURL).get('/Test').send(newTodo3).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest4 =  await request(baseURL).get(`/delete/` + query5.body._id);
        const res4 =  await request(baseURL).get(`/Test2`).send(query5.body.content).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res4.body).toStrictEqual({});

        const query6 =  await request(baseURL).get('/Test').send(newTodo5).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest5 =  await request(baseURL).get(`/delete/` + query6.body._id);
        const res5 =  await request(baseURL).get(`/Test2`).send(query6.body.content).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res5.body).toStrictEqual({});

        const query7 =  await request(baseURL).get('/Test').send(newTodo6).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest6 =  await request(baseURL).get(`/delete/` + query7.body._id);
        const res6 =  await request(baseURL).get(`/Test2`).send(query7.body.content).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res6.body).toStrictEqual({});

        await request(baseURL).post(`/add`).send( {content : "delete test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
        });
      });

describe("GET /render", () => {
  it("test if all api that render do so", async () => {

        const response =    await request(baseURL).get('/')
        //console.log(response.body.error)
        expect(response.status).toBe(200);
        expect(response.body.error).toBe(undefined)

        const response1 =    await request(baseURL).get('/list')
        expect(response1.status).toBe(200);
        expect(response1.body.error).toBe(undefined)
        //console.log(response.body.error)

        const response2 =    await request(baseURL).get('/edit/:id')
        expect(response1.status).toBe(200);
        expect(response1.body.error).toBe(undefined)
        //console.log(response.body.error)

        const response3 =    await request(baseURL).get('/instruction')
        expect(response2.status).toBe(500);
        expect(response2.body.error).toBe(undefined)
        //console.log(response.body.error)

        const response4 =    await request(baseURL).get('/error')
        expect(response2.status).toBe(500);
        expect(response2.body.error).toBe(undefined)
        //console.log(response.body.error)

        await request(baseURL).post(`/add`).send( {content : "render test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');

    });
});

describe("POST /error", () => {
      it("test the error with adding empty post is caught", async () => {

        const response =await request(baseURL).post(`/add`).send().set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(response.status).toBe(500);

        });
    });

describe("DELETE /clear", () => {
      it("test the error with adding empty post is caught", async () => {

        const deleteTest6 =  await request(baseURL).get('/clear');
        const res6 =  await request(baseURL).get(`/Test3`);
        expect(res6.body).toStrictEqual({});

        await request(baseURL).post(`/add`).send( {content : "clear test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        });
    });


// unit test of update

    // describe("POST /update", () => {
    //     const newTodo = {
    //         content : "test0",
    //         date : "now",
    //     }
    //     beforeAll(async () => {
    //         await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    //     })
    //     afterAll(async () => {
    //         const res = await request(baseURL).get(`/Test`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    //         expect(res.body.content).toBe("this has been updated");
    //         await request(baseURL).get(`/delete/` + res.body._id);
    //         const res2 =  await request(baseURL).get(`/Test2`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    //         expect(res2.body).toStrictEqual({});
    
    //         await request(baseURL).post(`/add`).send( {content : "update test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    //     })
    //     it("update the post added to the post database", async () => {
    //         const res = await request(baseURL).get(`/Test`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
    //         expect(res.body.content).toBe(newTodo.content);
    //         await request(baseURL).post(`/update`).send({_id : res.body._id, content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    //         const res2 =  await request(baseURL).get(`/Test`).send({content : "this has been updated"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    //         expect(res2.body.content).toBe("this has been updated");
    //     });
    // });


        
  