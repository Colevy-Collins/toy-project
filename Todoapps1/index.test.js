const request = require("supertest")
const baseURL = "http://localhost:5500"

describe("POST /update", () => {
      const newTodo = {
        title : "test1",
        date : "now",
      }
        
    beforeAll(async () => {
        await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
    })
      it("update the post added to the post database", async () => {
        const query =  await request(baseURL).get('/Test').send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
        console.log(query.body);
        const response = await request(baseURL).post("/update").send({_id : query.body._id, title : "test complete", date : "done"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(response.text).toBe('<h1 style="text-align:center">Stored to MongoDB</h1><br/><a style="text-decoration:none; color:black;  text-align:center" href="/list"><div style="border:1px solid black;"><h2 style="">Return to list</h2></div></a>');
         console.log(query.body);
        const query2 =   await request(baseURL).get('/Test').send({title : "test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        console.log(query2.body);
        console.log(query.body);
        expect(query2.body).toStrictEqual({_id : query.body._id, title : "test complete", date : "done"});
        
        
        await request(baseURL).delete(`/delete`).send(query).set('Content-Type', 'application/json').set('Accept', 'application/json');

        
        await request(baseURL).post(`/add`).send( {title : "update test finshed successful", date : Date.now()}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    });
    });


    // describe("DELETE /delete", () => {
    // const newTodo = {
    //     title : "test0",
    //     date : "now",
    // }
    // const newTodo1 = {
    //     title : "test1",
    //     date : "now",
    // }
    // const newTodo2 = {
    //     title : "test2",
    //     date : "now",
    //   }
    // const newTodo3 = {
    //     title : "test3",
    //     date : "now",
    //   }
    // const newTodo4 = {
    //     title : "test4",
    //     date : "now",
    //   }
    // const newTodo5 = {
    //     title : "test5",
    //     date : "now",
    //   }
    // const newTodo6 = {
    //     title : "test6",
    //     date : "now",
    //   }
          
    //   beforeAll(async () => {
    //     await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
    //     await request(baseURL).post(`/add`).send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
    //   })
    //     it("should update an item to todos array", async () => {
        
    //     const query =  await request(baseURL).get('/Test').send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
    //     await request(baseURL).delete(`/delete`).send(query).set('Content-Type', 'application/json').set('Accept', 'application/json');
    //     
    //     await request(baseURL).post(`/add`).send(newTodo2).set('Content-Type', 'application/json').set('Accept', 'application/json');

    //     const query2 =  await request(baseURL).get('/Test').send(newTodo2).set('Content-Type', 'application/json').set('Accept', 'application/json');
    //     await request(baseURL).delete(`/delete`).send(query2).set('Content-Type', 'application/json').set('Accept', 'application/json');

    //     await request(baseURL).post(`/add`).send(newTodo3).set('Content-Type', 'application/json').set('Accept', 'application/json');
    //     await request(baseURL).post(`/add`).send(newTodo4).set('Content-Type', 'application/json').set('Accept', 'application/json');

    //     const query3 =  await request(baseURL).get('/Test').send(newTodo4).set('Content-Type', 'application/json').set('Accept', 'application/json');
    //     await request(baseURL).delete(`/delete`).send(query3).set('Content-Type', 'application/json').set('Accept', 'application/json');
    //     const query4 =  await request(baseURL).get('/Test').send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
    //     await request(baseURL).delete(`/delete`).send(query4).set('Content-Type', 'application/json').set('Accept', 'application/json');

    //     await request(baseURL).post(`/add`).send(newTodo5).set('Content-Type', 'application/json').set('Accept', 'application/json');
    //     await request(baseURL).post(`/add`).send(newTodo6).set('Content-Type', 'application/json').set('Accept', 'application/json');

    //     const query5 =  await request(baseURL).get('/Test').send(newTodo3).set('Content-Type', 'application/json').set('Accept', 'application/json');
    //     await request(baseURL).delete(`/delete`).send(query5).set('Content-Type', 'application/json').set('Accept', 'application/json');
    //     const query6 =  await request(baseURL).get('/Test').send(newTodo5).set('Content-Type', 'application/json').set('Accept', 'application/json');
    //     await request(baseURL).delete(`/delete`).send(query6).set('Content-Type', 'application/json').set('Accept', 'application/json');

    //     const query7 =  await request(baseURL).get('/Test').send(newTodo6).set('Content-Type', 'application/json').set('Accept', 'application/json');
    //     await request(baseURL).delete(`/delete`).send(query7).set('Content-Type', 'application/json').set('Accept', 'application/json');

    //     await request(baseURL).post(`/add`).send( {title : "delete test complete", date : Date.now()}).set('Content-Type', 'application/json').set('Accept', 'application/json');
 
    //     });
    //   });