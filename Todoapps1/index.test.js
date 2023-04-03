const request = require("supertest")
const baseURL = "http://localhost:5500"

describe("POST /update", () => {
      const newTodo = {
        title : "test1",
        date : "now",
      }
      const newTodo2 = {
            _id : 1,
            title : "test1",
            date : "later",
          }
      beforeAll(async () => {
        await request(baseURL).post(`/add/${newTodo.id}`)
      })
    afterAll(async () => {
            await request(baseURL).delete(`/delete/${newTodo.id}`)
    })
      it("should add an item to todos array", async () => {
        const response = await request(baseURL).post("/update").send(newTodo2);
        expect(response.text).toBe('<h1 style="text-align:center">Stored to MongoDB</h1><br/><a style="text-decoration:none; color:black;  text-align:center" href="/list"><div style="border:1px solid black;"><h2 style="">Return to list</h2></div></a>');
      });
    });