const fakeExpress = require("express")
const fakeApp = fakeExpress()
const fakeRequest = require("supertest")
var fakeSql = require('../db.js');

fakeApp.use(fakeExpress.json())
fakeApp.use(fakeExpress.urlencoded({extended:false}))

fakeApp.use("/faketask", require("../routes/index.js"))

describe("demo test", ()=>{
    test("demo test should have",()=>{
        expect(1+1).toEqual(2);
    })
})

describe("tasks get post patch delete", ()=>{
    test("get list of task from api",async (done)=>{
        fakeRequest(fakeApp).get("/faketask").then((data)=>{
            expect(data.statusCode).toEqual(200)
            expect(data.body.status).toEqual("success")
            expect(typeof(data.body.data)).toEqual(typeof([]))        
        })
        return done()
    })

    test("get single task from api", async(done)=>{
        fakeRequest(fakeApp).get("/faketask/1").then((data)=>{
            expect(data.statusCode).toEqual(200)
            expect(data.body.status).toEqual("success")
        })
        return done()
    })
    
    test("create task through api", async(done)=>{
        fakeRequest(fakeApp)
        .post('/faketask')
        .send({task: 'test task'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end(function(err, res) {
            if (err) return done(err);
            return done();
        });
    })  

    test("delete a task", async(done)=>{
        fakeRequest(fakeApp)
        .delete("/faketask/16")
        .set('Accept', 'application/json')
        .expect(204)
        .end(function(err, res) {
            if (err) return done(err);
            return done();
        });
    })

    test("patch a task", async(done)=>{
        fakeRequest(fakeApp)
        .patch("/faketask/6")
        .send({task: 'test task'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
            if (err) return done(err);
            return done();
        });
    })
})
