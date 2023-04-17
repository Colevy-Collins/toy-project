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
describe("POST /tag", () => {
    const newTodo = {
        content : "test0",
        tag : "Standard Task",
    }
    const newTodo1 = {
        content : "test1",
        tag : "Standard Task",
    }
    const newTodo2 = {
        content : "test2",
        tag : "Urgent",
      }
    const newTodo3 = {
        content : "test3",
        tag : "Urgent",
      }
    const newTodo4 = {
        content : "test4",
        tag : "Low Priority",
      }
    const newTodo5 = {
        content : "test5",
        tag : "Low Priority",
      }
    const newTodo6 = {
        content : "test6",
        tag : "Routine",
      }
    const newTodo7 = {
        content : "test7",
        tag : "Routine",
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
        it("add and search for diffrent sets of posts based on tag", async () => {

        const res = await request(baseURL).post(`/tagTest`).send({tag: "Standard Task"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test0 = ["test2","test3","test4","test5","test6","test7"]
        expect(isValid(res, test0)).toBe(true)

        const res1 = await request(baseURL).post(`/tagTest`).send({tag: "Urgent"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test1 = ["test0", "test1","test4","test5","test6","test7"]
        expect(isValid(res1, test1)).toBe(true)

        const res2 = await request(baseURL).post(`/tagTest`).send({tag: "Low Priority"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test2 = ["test0", "test1","test2","test3","test6","test7"]
        expect(isValid(res2, test2)).toBe(true)

        const res3 = await request(baseURL).post(`/tagTest`).send({tag: "Routine"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test3 = ["test0", "test1","test2","test3","test5","test4"]
        expect(isValid(res3, test3)).toBe(true)

        const res4 = await request(baseURL).post(`/tagTest`).send().set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test4 = []
        expect(isValid(res4, test4)).toBe(true)


        await request(baseURL).get('/clear');
        await request(baseURL).get('/clear');

        await request(baseURL).post(`/add`).send( {content : "tag search test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
        });
      });
// unit test of tag search
describe("POST /tag", () => {
    const newTodo = {
        content : "test0",
        tag : "Standard Task",
    }
    const newTodo1 = {
        content : "test1",
        tag : "Standard Task",
    }
    const newTodo2 = {
        content : "test2",
        tag : "Urgent",
      }
    const newTodo3 = {
        content : "test3",
        tag : "Urgent",
      }
    const newTodo4 = {
        content : "test4",
        tag : "Low Priority",
      }
    const newTodo5 = {
        content : "test5",
        tag : "Low Priority",
      }
    const newTodo6 = {
        content : "test6",
        tag : "Routine",
      }
    const newTodo7 = {
        content : "test7",
        tag : "Routine",
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
        it("add and search for diffrent sets of posts based on tag", async () => {

        const res = await request(baseURL).post(`/tagTest`).send({tag: "Standard Task"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test0 = ["test2","test3","test4","test5","test6","test7"]
        expect(isValid(res, test0)).toBe(true)

        await request(baseURL).get('/clear');
        await request(baseURL).get('/clear');

        await request(baseURL).post(`/add`).send( {content : "tag search test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
        });
      });
describe("POST /tag", () => {
const newTodo = {
    content : "test0",
    tag : "Standard Task",
}
const newTodo1 = {
    content : "test1",
    tag : "Standard Task",
}
const newTodo2 = {
    content : "test2",
    tag : "Urgent",
  }
const newTodo3 = {
    content : "test3",
    tag : "Urgent",
  }
const newTodo4 = {
    content : "test4",
    tag : "Low Priority",
  }
const newTodo5 = {
    content : "test5",
    tag : "Low Priority",
  }
const newTodo6 = {
    content : "test6",
    tag : "Routine",
  }
const newTodo7 = {
    content : "test7",
    tag : "Routine",
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
      it("add and search for diffrent sets of posts based on tag", async () => {

    const res1 = await request(baseURL).post(`/tagTest`).send({tag: "Urgent"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    let test1 = ["test0", "test1","test4","test5","test6","test7"]
    expect(isValid(res1, test1)).toBe(true)  

    await request(baseURL).get('/clear');
    await request(baseURL).get('/clear');

    await request(baseURL).post(`/add`).send( {content : "tag search test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    });
    });
describe("POST /tag", () => {
const newTodo = {
    content : "test0",
    tag : "Standard Task",
}
const newTodo1 = {
    content : "test1",
    tag : "Standard Task",
}
const newTodo2 = {
    content : "test2",
    tag : "Urgent",
  }
const newTodo3 = {
    content : "test3",
    tag : "Urgent",
  }
const newTodo4 = {
    content : "test4",
    tag : "Low Priority",
  }
const newTodo5 = {
    content : "test5",
    tag : "Low Priority",
  }
const newTodo6 = {
    content : "test6",
    tag : "Routine",
  }
const newTodo7 = {
    content : "test7",
    tag : "Routine",
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
      it("add and search for diffrent sets of posts based on tag", async () => {

    const res2 = await request(baseURL).post(`/tagTest`).send({tag: "Low Priority"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    let test2 = ["test0", "test1","test2","test3","test6","test7"]
    expect(isValid(res2, test2)).toBe(true)       

    await request(baseURL).get('/clear');
    await request(baseURL).get('/clear');

    await request(baseURL).post(`/add`).send( {content : "tag search test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    });
    });
describe("POST /tag", () => {
const newTodo = {
    content : "test0",
    tag : "Standard Task",
}
const newTodo1 = {
    content : "test1",
    tag : "Standard Task",
}
const newTodo2 = {
    content : "test2",
    tag : "Urgent",
  }
const newTodo3 = {
    content : "test3",
    tag : "Urgent",
  }
const newTodo4 = {
    content : "test4",
    tag : "Low Priority",
  }
const newTodo5 = {
    content : "test5",
    tag : "Low Priority",
  }
const newTodo6 = {
    content : "test6",
    tag : "Routine",
  }
const newTodo7 = {
    content : "test7",
    tag : "Routine",
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
      it("add and search for diffrent sets of posts based on tag", async () => {

    const res3 = await request(baseURL).post(`/tagTest`).send({tag: "Routine"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    let test3 = ["test0", "test1","test2","test3","test5","test4"]
    expect(isValid(res3, test3)).toBe(true)            

    await request(baseURL).get('/clear');
    await request(baseURL).get('/clear');

    await request(baseURL).post(`/add`).send( {content : "tag search test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    });
    });
describe("POST /tag", () => {
const newTodo = {
    content : "test0",
    tag : "Standard Task",
}
const newTodo1 = {
    content : "test1",
    tag : "Standard Task",
}
const newTodo2 = {
    content : "test2",
    tag : "Urgent",
  }
const newTodo3 = {
    content : "test3",
    tag : "Urgent",
  }
const newTodo4 = {
    content : "test4",
    tag : "Low Priority",
  }
const newTodo5 = {
    content : "test5",
    tag : "Low Priority",
  }
const newTodo6 = {
    content : "test6",
    tag : "Routine",
  }
const newTodo7 = {
    content : "test7",
    tag : "Routine",
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
      it("add and search for diffrent sets of posts based on tag", async () => {
    const res4 = await request(baseURL).post(`/tagTest`).send().set('Content-Type', 'application/json').set('Accept', 'application/json');
    let test4 = []
    expect(isValid(res4, test4)).toBe(true)        

    await request(baseURL).get('/clear');
    await request(baseURL).get('/clear');

    await request(baseURL).post(`/add`).send( {content : "tag search test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    });
    });