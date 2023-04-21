const request = require("supertest")
const baseURL = "http://localhost:5500"
const fs = require('fs');

const fileIn = fs.createReadStream(__dirname + '/testFile.md');
const fileOut = fs.readFileSync(__dirname + '/testFile.md', 'utf-8');

//regression, integration and acceptance test
describe("DELETE /delete", () => {


          
      beforeAll(async () => {
        
        await request(baseURL).post('/add').set('Content-Type', 'multipart/form-data').field('content', 'test1').field('date', '').attach('fileIn', fileIn);
        
      });
        it("add and delete several post in diffrent orders", async () => {
        
        const query =  await request(baseURL).get('/Test').send({content : "test1"}).set('Content-Type', 'application/json').set('Accept', 'application/json');
        const res = await request(baseURL).get('/download/' + query.body._id);
        //console.log(res.text)
        //console.log(fileOut)
        expect(res.text).toBe(fileOut);
        
        const deleteTest6 =  await request(baseURL).get('/clear');
        const res6 =  await request(baseURL).get(`/Test3`);
        expect(res6.body).toStrictEqual([]);
        });
      });
// unit test of delete
