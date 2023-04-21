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
describe("POST /advSearch", () => {
    const newTodo = {
        content : "test0 a",
        date : "2023-04-17",
    }
    const newTodo1 = {
        content : "test1 aa",
        date : "2023-04-16",
    }
    const newTodo2 = {
        content : "test2 aaa",
        date : "2023-04-15",
      }
    const newTodo3 = {
        content : "test3 b",
        date : "2023-03-17",
      }
    const newTodo4 = {
        content : "test4 bb",
        date : "2023-05-17",
      }
    const newTodo5 = {
        content : "test5 bbb",
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
        it("add and search for diffrent sets of posts based on tag", async () => {

        const res = await request(baseURL).post(`/advSearchTest`).send({content: "a"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test0 = ["test3","test4","test5","test6"]
        expect(isValid(res, test0)).toBe(true)

        const res1 = await request(baseURL).post(`/advSearchTest`).send({content: "aa"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test1 = ["test0", "test1","test4","test5","test6"]
        expect(isValid(res1, test1)).toBe(true)

        const res2 = await request(baseURL).post(`/advSearchTest`).send({content: "aaa"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test2 = ["test0", "test1","test3","test4","test5","test6"]
        expect(isValid(res2, test2)).toBe(true)

        const res3 = await request(baseURL).post(`/advSearchTest`).send({content: "b"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test3 = ["test0", "test1","test2","test6"]
        expect(isValid(res3, test3)).toBe(true)

        const res4 = await request(baseURL).post(`/advSearchTest`).send({content: "ba"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test4 = ["test0", "test1","test2","test3","test4","test5","test6"]
        expect(isValid(res4, test4)).toBe(true)

        const res5 = await request(baseURL).post(`/advSearchTest`).send({content: "bbaa"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test5 = ["test0", "test1","test2","test3","test4","test5","test6"]
        expect(isValid(res5, test5)).toBe(true)

        const res6 = await request(baseURL).post(`/advSearchTest`).send({content: "test"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test6 = []
        expect(isValid(res6, test6)).toBe(true)

        const res7 = await request(baseURL).post(`/advSearchTest`).send({date: "2024-04-17"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test7 = ["test0", "test1","test2","test3","test4","test5","test6"]
        expect(isValid(res7, test7)).toBe(true)

        const res8 = await request(baseURL).post(`/advSearchTest`).send().set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test8 = []
        expect(isValid(res8, test8)).toBe(true)


        await request(baseURL).get('/clear');
        await request(baseURL).get('/clear');

        await request(baseURL).post(`/add`).send( {content : "adv search test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
        });
      });
// unit test of tag search
describe("POST /advSearch", () => {
    const newTodo = {
        content : "test0 a",
        date : "2023-04-17",
    }
    const newTodo1 = {
        content : "test1 aa",
        date : "2023-04-16",
    }
    const newTodo2 = {
        content : "test2 aaa",
        date : "2023-04-15",
      }
    const newTodo3 = {
        content : "test3 b",
        date : "2023-03-17",
      }
    const newTodo4 = {
        content : "test4 bb",
        date : "2023-05-17",
      }
    const newTodo5 = {
        content : "test5 bbb",
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
        it("add and search for diffrent sets of posts based on tag", async () => {

        const res = await request(baseURL).post(`/advSearchTest`).send({content: "a"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        let test0 = ["test3","test4","test5","test6"]
        expect(isValid(res, test0)).toBe(true)

        await request(baseURL).get('/clear');
        await request(baseURL).get('/clear');

        await request(baseURL).post(`/add`).send( {content : "adv search test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        
        });
      });

describe("POST /advSearch", () => {
const newTodo = {
    content : "test0 a",
    date : "2023-04-17",
}
const newTodo1 = {
    content : "test1 aa",
    date : "2023-04-16",
}
const newTodo2 = {
    content : "test2 aaa",
    date : "2023-04-15",
  }
const newTodo3 = {
    content : "test3 b",
    date : "2023-03-17",
  }
const newTodo4 = {
    content : "test4 bb",
    date : "2023-05-17",
  }
const newTodo5 = {
    content : "test5 bbb",
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
      it("add and search for diffrent sets of posts based on tag", async () => {

    const res1 = await request(baseURL).post(`/advSearchTest`).send({content: "aa"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    let test1 = ["test0", "test1","test4","test5","test6"]
    expect(isValid(res1, test1)).toBe(true)

    await request(baseURL).get('/clear');
    await request(baseURL).get('/clear');

    await request(baseURL).post(`/add`).send( {content : "adv search test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    });
    });

describe("POST /advSearch", () => {
const newTodo = {
    content : "test0 a",
    date : "2023-04-17",
}
const newTodo1 = {
    content : "test1 aa",
    date : "2023-04-16",
}
const newTodo2 = {
    content : "test2 aaa",
    date : "2023-04-15",
  }
const newTodo3 = {
    content : "test3 b",
    date : "2023-03-17",
  }
const newTodo4 = {
    content : "test4 bb",
    date : "2023-05-17",
  }
const newTodo5 = {
    content : "test5 bbb",
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
      it("add and search for diffrent sets of posts based on tag", async () => {

    const res2 = await request(baseURL).post(`/advSearchTest`).send({content: "aaa"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    let test2 = ["test0", "test1","test3","test4","test5","test6"]
    expect(isValid(res2, test2)).toBe(true)

    await request(baseURL).get('/clear');
    await request(baseURL).get('/clear');

    await request(baseURL).post(`/add`).send( {content : "adv search test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    });
    });

describe("POST /advSearch", () => {
const newTodo = {
    content : "test0 a",
    date : "2023-04-17",
}
const newTodo1 = {
    content : "test1 aa",
    date : "2023-04-16",
}
const newTodo2 = {
    content : "test2 aaa",
    date : "2023-04-15",
  }
const newTodo3 = {
    content : "test3 b",
    date : "2023-03-17",
  }
const newTodo4 = {
    content : "test4 bb",
    date : "2023-05-17",
  }
const newTodo5 = {
    content : "test5 bbb",
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
      it("add and search for diffrent sets of posts based on tag", async () => {

    const res3 = await request(baseURL).post(`/advSearchTest`).send({content: "b"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    let test3 = ["test0", "test1","test2","test6"]
    expect(isValid(res3, test3)).toBe(true)
    
    await request(baseURL).get('/clear');
    await request(baseURL).get('/clear');

    await request(baseURL).post(`/add`).send( {content : "adv search test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    });
    });

describe("POST /advSearch", () => {
const newTodo = {
    content : "test0 a",
    date : "2023-04-17",
}
const newTodo1 = {
    content : "test1 aa",
    date : "2023-04-16",
}
const newTodo2 = {
    content : "test2 aaa",
    date : "2023-04-15",
  }
const newTodo3 = {
    content : "test3 b",
    date : "2023-03-17",
  }
const newTodo4 = {
    content : "test4 bb",
    date : "2023-05-17",
  }
const newTodo5 = {
    content : "test5 bbb",
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
      it("add and search for diffrent sets of posts based on tag", async () => {
            
    const res4 = await request(baseURL).post(`/advSearchTest`).send({content: "ba"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    let test4 = ["test0", "test1","test2","test3","test4","test5","test6"]
    expect(isValid(res4, test4)).toBe(true)

    await request(baseURL).get('/clear');
    await request(baseURL).get('/clear');

    await request(baseURL).post(`/add`).send( {content : "adv search test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    });
    });

describe("POST /advSearch", () => {
const newTodo = {
    content : "test0 a",
    date : "2023-04-17",
}
const newTodo1 = {
    content : "test1 aa",
    date : "2023-04-16",
}
const newTodo2 = {
    content : "test2 aaa",
    date : "2023-04-15",
  }
const newTodo3 = {
    content : "test3 b",
    date : "2023-03-17",
  }
const newTodo4 = {
    content : "test4 bb",
    date : "2023-05-17",
  }
const newTodo5 = {
    content : "test5 bbb",
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
      it("add and search for diffrent sets of posts based on tag", async () => {

    const res5 = await request(baseURL).post(`/advSearchTest`).send({content: "bbaa"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    let test5 = ["test0", "test1","test2","test3","test4","test5","test6"]
    expect(isValid(res5, test5)).toBe(true)

    await request(baseURL).get('/clear');
    await request(baseURL).get('/clear');

    await request(baseURL).post(`/add`).send( {content : "adv search test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    });
    });

describe("POST /advSearch", () => {
const newTodo = {
    content : "test0 a",
    date : "2023-04-17",
}
const newTodo1 = {
    content : "test1 aa",
    date : "2023-04-16",
}
const newTodo2 = {
    content : "test2 aaa",
    date : "2023-04-15",
  }
const newTodo3 = {
    content : "test3 b",
    date : "2023-03-17",
  }
const newTodo4 = {
    content : "test4 bb",
    date : "2023-05-17",
  }
const newTodo5 = {
    content : "test5 bbb",
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
      it("add and search for diffrent sets of posts based on tag", async () => {

    const res6 = await request(baseURL).post(`/advSearchTest`).send({content: "test"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    let test6 = []
    expect(isValid(res6, test6)).toBe(true)

    await request(baseURL).get('/clear');
    await request(baseURL).get('/clear');

    await request(baseURL).post(`/add`).send( {content : "adv search test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    });
    });

describe("POST /advSearch", () => {
const newTodo = {
    content : "test0 a",
    date : "2023-04-17",
}
const newTodo1 = {
    content : "test1 aa",
    date : "2023-04-16",
}
const newTodo2 = {
    content : "test2 aaa",
    date : "2023-04-15",
  }
const newTodo3 = {
    content : "test3 b",
    date : "2023-03-17",
  }
const newTodo4 = {
    content : "test4 bb",
    date : "2023-05-17",
  }
const newTodo5 = {
    content : "test5 bbb",
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
      it("add and search for diffrent sets of posts based on tag", async () => {

    const res7 = await request(baseURL).post(`/advSearchTest`).send({date: "2024-04-17"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    let test7 = ["test0", "test1","test2","test3","test4","test5","test6"]
    expect(isValid(res7, test7)).toBe(true)

    await request(baseURL).get('/clear');
    await request(baseURL).get('/clear');

    await request(baseURL).post(`/add`).send( {content : "adv search test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    });
    });

describe("POST /advSearch", () => {
const newTodo = {
    content : "test0 a",
    date : "2023-04-17",
}
const newTodo1 = {
    content : "test1 aa",
    date : "2023-04-16",
}
const newTodo2 = {
    content : "test2 aaa",
    date : "2023-04-15",
  }
const newTodo3 = {
    content : "test3 b",
    date : "2023-03-17",
  }
const newTodo4 = {
    content : "test4 bb",
    date : "2023-05-17",
  }
const newTodo5 = {
    content : "test5 bbb",
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
      it("add and search for diffrent sets of posts based on tag", async () => {

    const res8 = await request(baseURL).post(`/advSearchTest`).send().set('Content-Type', 'application/json').set('Accept', 'application/json');
    let test8 = []
    expect(isValid(res8, test8)).toBe(true)


    await request(baseURL).get('/clear');
    await request(baseURL).get('/clear');

    await request(baseURL).post(`/add`).send( {content : "adv search test complete"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    });
    });