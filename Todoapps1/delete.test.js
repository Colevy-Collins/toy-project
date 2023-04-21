const request = require("supertest")
const baseURL = "http://localhost:5500"


//regression, integration and acceptance test
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
        await request(baseURL).post(`/logging`).send({username: 'test', password: '123456'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
        await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
      })
        it("add and delete several post in diffrent orders", async () => {
        
        const query =  await request(baseURL).get('/Test').send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest =  await request(baseURL).get(`/delete/` + query.body._id);
        const res =  await request(baseURL).get(`/Test2`).send(query.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res.body).toStrictEqual({});

        await request(baseURL).post(`/add`).send(newTodo2).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const query2 =  await request(baseURL).get('/Test').send(newTodo2).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest1 =  await request(baseURL).get(`/delete/` + query2.body._id);
        const res1 =  await request(baseURL).get(`/Test2`).send(query2.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res1.body).toStrictEqual({});

        await request(baseURL).post(`/add`).send(newTodo3).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo4).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const query3 =  await request(baseURL).get('/Test').send(newTodo4).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest2 =  await request(baseURL).get(`/delete/` + query3.body._id);;
        const res2 =  await request(baseURL).get(`/Test2`).send(query3.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res2.body).toStrictEqual({});

        const query4 =  await request(baseURL).get('/Test').send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest3 =  await request(baseURL).get(`/delete/` + query4.body._id);
        const res3 =  await request(baseURL).get(`/Test2`).send(query4.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res3.body).toStrictEqual({});

        await request(baseURL).post(`/add`).send(newTodo5).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo6).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const query5 =  await request(baseURL).get('/Test').send(newTodo3).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest4 =  await request(baseURL).get(`/delete/` + query5.body._id);
        const res4 =  await request(baseURL).get(`/Test2`).send(query5.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res4.body).toStrictEqual({});

        const query6 =  await request(baseURL).get('/Test').send(newTodo5).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest5 =  await request(baseURL).get(`/delete/` + query6.body._id);
        const res5 =  await request(baseURL).get(`/Test2`).send(query6.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res5.body).toStrictEqual({});

        const query7 =  await request(baseURL).get('/Test').send(newTodo6).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest6 =  await request(baseURL).get(`/delete/` + query7.body._id);
        const res6 =  await request(baseURL).get(`/Test2`).send(query7.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res6.body).toStrictEqual({});

        await request(baseURL).post(`/add`).send( {content : "delete test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
        });
      });
// unit test of delete

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
          
      beforeAll(async () => {
        await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
      })
        it("add and delete several post in diffrent orders", async () => {
        
        const query =  await request(baseURL).get('/Test').send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest =  await request(baseURL).get(`/delete/` + query.body._id);
        const res =  await request(baseURL).get(`/Test2`).send(query.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res.body).toStrictEqual({});

        await request(baseURL).post(`/add`).send(newTodo2).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const query2 =  await request(baseURL).get('/Test').send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest1 =  await request(baseURL).get(`/delete/` + query2.body._id);
        const res1 =  await request(baseURL).get(`/Test2`).send(query2.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res1.body).toStrictEqual({});

        await request(baseURL).post(`/add`).send( {content : "delete test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
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
        content : "test2",
        date : "",
      }

            
        beforeAll(async () => {
        await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo2).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo3).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
        })
          it("add and delete several post in diffrent orders", async () => {
        
        const query =  await request(baseURL).get('/Test').send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest =  await request(baseURL).get(`/delete/` + query.body._id);
        const res =  await request(baseURL).get(`/Test2`).send(query.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res.body).toStrictEqual({});

        const query1 =  await request(baseURL).get('/Test').send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest1 =  await request(baseURL).get(`/delete/` + query1.body._id);
        const res1 =  await request(baseURL).get(`/Test2`).send(query1.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res1.body).toStrictEqual({});

        const query2 =  await request(baseURL).get('/Test').send(newTodo2).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest2 =  await request(baseURL).get(`/delete/` + query2.body._id);
        const res2 =  await request(baseURL).get(`/Test2`).send(query2.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res2.body).toStrictEqual({});

        const query3 =  await request(baseURL).get('/Test').send(newTodo3).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest3 =  await request(baseURL).get(`/delete/` + query3.body._id);
        const res3 =  await request(baseURL).get(`/Test2`).send(query3.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res3.body).toStrictEqual({});
        

        await request(baseURL).post(`/add`).send( {content : "delete test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
        });
        });

describe("DELETE /delete", () => {
    const newTodo = {
        content : "test0",
        date : "",
    }
    const newTodo1 = {
        content : "test0",
        date : "",
    }
            
        beforeAll(async () => {
        await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
        })
          it("add and delete several post in diffrent orders", async () => {
            
            const query =  await request(baseURL).get('/Test').send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
            const deleteTest =  await request(baseURL).get(`/delete/` + query.body._id);
            const res =  await request(baseURL).get(`/Test2`).send(query.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
            expect(res.body).toStrictEqual({});

            const query1 =  await request(baseURL).get('/Test').send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
            const deleteTest1 =  await request(baseURL).get(`/delete/` + query1.body._id);
            const res1 =  await request(baseURL).get(`/Test2`).send(query1.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
            expect(res1.body).toStrictEqual({});

            await request(baseURL).post(`/add`).send( {content : "delete test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');

        });
        });
      
describe("DELETE /delete", () => {
    const newTodo = {
        content : "test0",
        date : "",
    }
            
        beforeAll(async () => {
        await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
        })
          it("add and delete several post in diffrent orders", async () => {
            
            const query =  await request(baseURL).get('/Test').send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
            const deleteTest =  await request(baseURL).get(`/delete/` + query.body._id);
            const res =  await request(baseURL).get(`/Test2`).send(query.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
            expect(res.body).toStrictEqual({});

            await request(baseURL).post(`/add`).send( {content : "delete test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');

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
        const res =  await request(baseURL).get(`/Test2`).send(query.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res.body).toStrictEqual({});

        await request(baseURL).post(`/add`).send(newTodo2).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const query2 =  await request(baseURL).get('/Test').send(newTodo2).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest1 =  await request(baseURL).get(`/delete/` + query2.body._id);
        const res1 =  await request(baseURL).get(`/Test2`).send(query2.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res1.body).toStrictEqual({});

        await request(baseURL).post(`/add`).send(newTodo3).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo4).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const query3 =  await request(baseURL).get('/Test').send(newTodo4).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest2 =  await request(baseURL).get(`/delete/` + query3.body._id);;
        const res2 =  await request(baseURL).get(`/Test2`).send(query3.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res2.body).toStrictEqual({});

        const query4 =  await request(baseURL).get('/Test').send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest3 =  await request(baseURL).get(`/delete/` + query4.body._id);
        const res3 =  await request(baseURL).get(`/Test2`).send(query4.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res3.body).toStrictEqual({});

        await request(baseURL).post(`/add`).send(newTodo5).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo6).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const query5 =  await request(baseURL).get('/Test').send(newTodo3).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest4 =  await request(baseURL).get(`/delete/` + query5.body._id);
        const res4 =  await request(baseURL).get(`/Test2`).send(query5.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res4.body).toStrictEqual({});

        const query6 =  await request(baseURL).get('/Test').send(newTodo5).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest5 =  await request(baseURL).get(`/delete/` + query6.body._id);
        const res5 =  await request(baseURL).get(`/Test2`).send(query6.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res5.body).toStrictEqual({});

        const query7 =  await request(baseURL).get('/Test').send(newTodo6).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest6 =  await request(baseURL).get(`/delete/` + query7.body._id);
        const res6 =  await request(baseURL).get(`/Test2`).send(query7.body._id).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(res6.body).toStrictEqual({});

        await request(baseURL).post(`/add`).send( {content : "delete test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
        });
        });

