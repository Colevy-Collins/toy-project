const request = require("supertest")
const baseURL = "http://localhost:5500"

function isValid (res, arr){
    for(let i =0; i < res.body.length; i++){
        for(let y = 0; y < arr.length; y++){
            if(res.body[i].content == arr[y]){
                return false;
            }
        }
    }
    return true;
}


//regression, integration and acceptance test
describe("POST /search", () => {
    const newTodo = {
        content : "test0",
        date : "2023-04-17",
    }
    const newTodo1 = {
        content : "test1",
        date : "2023-04-16",
    }
    const newTodo2 = {
        content : "test2",
        date : "2023-04-15",
      }
    const newTodo3 = {
        content : "test3",
        date : "2023-03-17",
      }
    const newTodo4 = {
        content : "test4",
        date : "2023-05-17",
      }
    const newTodo5 = {
        content : "test5",
        date : "2022-04-17",
      }
    const newTodo6 = {
        content : "test6",
        date : "2024-04-17",
      }
          
      beforeAll(async () => {
        await request(baseURL).post(`/logging`).send({username: 'test', password: '123456'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
        await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo2).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo3).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo4).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo5).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo6).set('Content-Type', 'application/json').set('Accept', 'application/json');

      })
        it("add and search for diffrent sets of posts", async () => {

        const res = await request(baseURL).post(`/searchTest`).send({date1: "2023-04-01", date2: "2023-04-31"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test0 = ["test3","test4","test5","test6"]
        expect(isValid(res, test0)).toBe(true)

        const res1 = await request(baseURL).post(`/searchTest`).send({date1: "2023-01-01", date2: "2023-12-31"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test1 = ["test5","test6"]
        expect(isValid(res1, test1)).toBe(true)

        const res2 = await request(baseURL).post(`/searchTest`).send({date1: "2022-01-01", date2: "2022-12-31"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test2 = ["test0", "test1","test2","test3","test4","test6",]
        expect(isValid(res2, test2)).toBe(true)

        const res3 = await request(baseURL).post(`/searchTest`).send({date1: "2024-01-01", date2: "2024-12-31"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test3 = ["test0", "test1","test2","test3","test4","test5",]
        expect(isValid(res3, test3)).toBe(true)

        const res4 = await request(baseURL).post(`/searchTest`).send({date1: "2022-01-01", date2: "2024-12-31"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test4 = []
        expect(isValid(res4, test4)).toBe(true)

        const res5 = await request(baseURL).post(`/searchTest`).send({date1: "2023-04-017", date2: "2024-05-17"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test5 = ["test0","test1","test2","test3","test5"]
        expect(isValid(res5, test5)).toBe(true)


        await request(baseURL).get('/clear');
        await request(baseURL).get('/clear');

        await request(baseURL).post(`/add`).send( {content : "delete test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
        });
      });
// unit test of search
describe("POST /search", () => {
    const newTodo = {
        content : "test0",
        date : "2023-04-17",
    }
    const newTodo1 = {
        content : "test1",
        date : "2023-04-16",
    }
    const newTodo2 = {
        content : "test2",
        date : "2023-04-15",
      }
    const newTodo3 = {
        content : "test3",
        date : "2023-03-17",
      }
    const newTodo4 = {
        content : "test4",
        date : "2023-05-17",
      }
    const newTodo5 = {
        content : "test5",
        date : "2022-04-17",
      }
    const newTodo6 = {
        content : "test6",
        date : "2024-04-17",
      }
          
      beforeAll(async () => {
        await request(baseURL).post(`/logging`).send({username: 'test', password: '123456'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
        await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo2).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo3).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo4).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo5).set('Content-Type', 'application/json').set('Accept', 'application/json');
        await request(baseURL).post(`/add`).send(newTodo6).set('Content-Type', 'application/json').set('Accept', 'application/json');

      })
        it("add and search for diffrent sets of posts", async () => {

        const res = await request(baseURL).post(`/searchTest`).send({date1: "2023-04-01", date2: "2023-04-31"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test0 = ["test3","test4","test5","test6"]
        expect(isValid(res, test0)).toBe(true)

        await request(baseURL).get('/clear');
        await request(baseURL).get('/clear');

        await request(baseURL).post(`/add`).send( {content : "delete test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
        });
      });

describe("POST /search", () => {
const newTodo = {
    content : "test0",
    date : "2023-04-17",
}
const newTodo1 = {
    content : "test1",
    date : "2023-04-16",
}
const newTodo2 = {
    content : "test2",
    date : "2023-04-15",
  }
const newTodo3 = {
    content : "test3",
    date : "2023-03-17",
  }
const newTodo4 = {
    content : "test4",
    date : "2023-05-17",
  }
const newTodo5 = {
    content : "test5",
    date : "2022-04-17",
  }
const newTodo6 = {
    content : "test6",
    date : "2024-04-17",
  }
        
    beforeAll(async () => {
    await request(baseURL).post(`/logging`).send({username: 'test', password: '123456'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo2).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo3).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo4).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo5).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo6).set('Content-Type', 'application/json').set('Accept', 'application/json');

    })
      it("add and search for diffrent sets of posts", async () => {
    
    const res2 = await request(baseURL).post(`/searchTest`).send({date1: "2022-01-01", date2: "2022-12-31"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    let test2 = ["test0", "test1","test2","test3","test4","test6",]
    expect(isValid(res2, test2)).toBe(true)        

    await request(baseURL).get('/clear');
    await request(baseURL).get('/clear');

    await request(baseURL).post(`/add`).send( {content : "delete test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    });
    });
    
describe("POST /search", () => {
const newTodo = {
    content : "test0",
    date : "2023-04-17",
}
const newTodo1 = {
    content : "test1",
    date : "2023-04-16",
}
const newTodo2 = {
    content : "test2",
    date : "2023-04-15",
  }
const newTodo3 = {
    content : "test3",
    date : "2023-03-17",
  }
const newTodo4 = {
    content : "test4",
    date : "2023-05-17",
  }
const newTodo5 = {
    content : "test5",
    date : "2022-04-17",
  }
const newTodo6 = {
    content : "test6",
    date : "2024-04-17",
  }
        
    beforeAll(async () => {
    await request(baseURL).post(`/logging`).send({username: 'test', password: '123456'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo2).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo3).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo4).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo5).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo6).set('Content-Type', 'application/json').set('Accept', 'application/json');

    })
      it("add and search for diffrent sets of posts", async () => {
        
    const res3 = await request(baseURL).post(`/searchTest`).send({date1: "2024-01-01", date2: "2024-12-31"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    let test3 = ["test0", "test1","test2","test3","test4","test5",]
    expect(isValid(res3, test3)).toBe(true)
                    
    await request(baseURL).get('/clear');
    await request(baseURL).get('/clear');

    await request(baseURL).post(`/add`).send( {content : "delete test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    });
    });

describe("POST /search", () => {
const newTodo = {
    content : "test0",
    date : "2023-04-17",
}
const newTodo1 = {
    content : "test1",
    date : "2023-04-16",
}
const newTodo2 = {
    content : "test2",
    date : "2023-04-15",
  }
const newTodo3 = {
    content : "test3",
    date : "2023-03-17",
  }
const newTodo4 = {
    content : "test4",
    date : "2023-05-17",
  }
const newTodo5 = {
    content : "test5",
    date : "2022-04-17",
  }
const newTodo6 = {
    content : "test6",
    date : "2024-04-17",
  }
        
    beforeAll(async () => {
    await request(baseURL).post(`/logging`).send({username: 'test', password: '123456'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo2).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo3).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo4).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo5).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo6).set('Content-Type', 'application/json').set('Accept', 'application/json');

    })
      it("add and search for diffrent sets of posts", async () => {

    const res4 = await request(baseURL).post(`/searchTest`).send({date1: "2022-01-01", date2: "2024-12-31"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    let test4 = []
    expect(isValid(res4, test4)).toBe(true)                

    await request(baseURL).get('/clear');
    await request(baseURL).get('/clear');

    await request(baseURL).post(`/add`).send( {content : "delete test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    });
    });

describe("POST /search", () => {
const newTodo = {
    content : "test0",
    date : "2023-04-17",
}
const newTodo1 = {
    content : "test1",
    date : "2023-04-16",
}
const newTodo2 = {
    content : "test2",
    date : "2023-04-15",
  }
const newTodo3 = {
    content : "test3",
    date : "2023-03-17",
  }
const newTodo4 = {
    content : "test4",
    date : "2023-05-17",
  }
const newTodo5 = {
    content : "test5",
    date : "2022-04-17",
  }
const newTodo6 = {
    content : "test6",
    date : "2024-04-17",
  }
        
    beforeAll(async () => {
    await request(baseURL).post(`/logging`).send({username: 'test', password: '123456'}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    await request(baseURL).post(`/add`).send(newTodo).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo1).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo2).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo3).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo4).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo5).set('Content-Type', 'application/json').set('Accept', 'application/json');
    await request(baseURL).post(`/add`).send(newTodo6).set('Content-Type', 'application/json').set('Accept', 'application/json');

    })
      it("add and search for diffrent sets of posts", async () => {

    const res5 = await request(baseURL).post(`/searchTest`).send({date1: "2023-04-017", date2: "2024-05-17"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    let test5 = ["test0","test1","test2","test3","test5"]
    expect(isValid(res5, test5)).toBe(true)


    await request(baseURL).get('/clear');
    await request(baseURL).get('/clear');

    await request(baseURL).post(`/add`).send( {content : "delete test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    });
    });