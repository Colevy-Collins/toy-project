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
    afterAll(async () => {
        const query2 =   await request(baseURL).get('/Test').send({title : "test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        //console.log(query2.body);
        const deleteTest = await request(baseURL).delete(`/delete`).send({ _id: query2.body._id}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(deleteTest.text).toBe('Delete complete');
        await request(baseURL).post(`/add`).send( {title : "update test finshed successful", date : Date()}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    })
      it("update the post added to the post database", async () => {
        const query =  await request(baseURL).get('/Test').send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
        //console.log(query.body);
        const response = await request(baseURL).post("/update").send({_id : query.body._id, title : "test complete", date : "done"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(response.text).toBe('<h1 style="text-align:center">Stored to MongoDB</h1><br/><a style="text-decoration:none; color:black;  text-align:center" href="/list"><div style="border:1px solid black;"><h2 style="">Return to list</h2></div></a>');
        //console.log(query.body);
        const query2 =   await request(baseURL).get('/Test').send({title : "test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        //console.log(query2.body);
        //console.log(query.body);
        expect(query2.body).toStrictEqual({_id : query.body._id, title : "test complete", date : "done"});
      });
    });


    describe("DELETE /delete", () => {
    const newTodo = {
        title : "test0",
        date : "now",
    }
    const newTodo1 = {
        title : "test1",
        date : "now",
    }
    const newTodo2 = {
        title : "test2",
        date : "now",
      }
    const newTodo3 = {
        title : "test3",
        date : "now",
      }
    const newTodo4 = {
        title : "test4",
        date : "now",
      }
    const newTodo5 = {
        title : "test5",
        date : "now",
      }
    const newTodo6 = {
        title : "test6",
        date : "now",
      }
          
      beforeAll(async () => {
        await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
      })
        it("add and delete several post in diffrent orders", async () => {
        
        const query =  await request(baseURL).get('/Test').send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest =  await request(baseURL).delete(`/delete`).send({ _id: query.body._id}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(deleteTest.text).toBe('Delete complete');

        await request(baseURL).post(`/add`).send(newTodo2).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const query2 =  await request(baseURL).get('/Test').send(newTodo2).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest1 =  await request(baseURL).delete(`/delete`).send({ _id: query2.body._id}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(deleteTest1.text).toBe('Delete complete');

        await request(baseURL).post(`/add`).send(newTodo3).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo4).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const query3 =  await request(baseURL).get('/Test').send(newTodo4).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest2 =  await request(baseURL).delete(`/delete`).send({ _id: query3.body._id}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(deleteTest2.text).toBe('Delete complete');
        const query4 =  await request(baseURL).get('/Test').send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest3 =  await request(baseURL).delete(`/delete`).send({ _id: query4.body._id}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(deleteTest3.text).toBe('Delete complete');

        await request(baseURL).post(`/add`).send(newTodo5).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo6).set('Content-Type', 'application/json').set('Accept', 'application/json');

        const query5 =  await request(baseURL).get('/Test').send(newTodo3).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest4 =  await request(baseURL).delete(`/delete`).send({ _id: query5.body._id}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(deleteTest4.text).toBe('Delete complete');
        const query6 =  await request(baseURL).get('/Test').send(newTodo5).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest5 =  await request(baseURL).delete(`/delete`).send({ _id: query6.body._id}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(deleteTest5.text).toBe('Delete complete');

        const query7 =  await request(baseURL).get('/Test').send(newTodo6).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const deleteTest6 =  await request(baseURL).delete(`/delete`).send({ _id: query7.body._id}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(deleteTest6.text).toBe('Delete complete');

        await request(baseURL).post(`/add`).send( {title : "delete test complete", date : Date()}).set('Content-Type', 'application/json').set('Accept', 'application/json');
 
        });
      });

      describe("Get /render", () => {
        it("test if all api that render do so", async () => {

            const response =    await request(baseURL).get('/')
            //console.log(response.body.error)
            expect(response.status).toBe(200);
            expect(response.body.error).toBe(undefined)

            const response1 =    await request(baseURL).get('/')
            expect(response1.status).toBe(200);
            expect(response1.body.error).toBe(undefined)
            //console.log(response.body.error)

            const response2 =    await request(baseURL).get('/instruction')
            expect(response2.status).toBe(200);
            expect(response2.body.error).toBe(undefined)
            //console.log(response.body.error)

            await request(baseURL).post(`/add`).send( {title : "render test complete", date : Date()}).set('Content-Type', 'application/json').set('Accept', 'application/json');

        });
      });

      describe("Get /ID", () => {
          it("test if all post have IDs", async () => {
  
              const response =    await request(baseURL).get('/Test2')
              for (let i = 0; i < response.body.posts.length; i++){
                console.log(response.body.posts[i]);
                //const deleteTest6 =  await request(baseURL).delete(`/delete`).send({ _id: response.body.posts[i]._id}).set('Content-Type', 'application/json').set('Accept', 'application/json');

                if(response.body.posts[i]._id !== null){
                    expect(1).toBe(1);

                } 
                else {
                    expect(1).toBe(2);
                }
              }
                
              await request(baseURL).post(`/add`).send( {title : "Post ID test complete", date : Date()}).set('Content-Type', 'application/json').set('Accept', 'application/json');

          });
        });