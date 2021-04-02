const express = require("express");
const router = express.Router();
const { list, detail, create, deleter, patch } = require("../services/index.js");

router.get("",(req, res)=>{
    list((code, status, data)=>{
        res.status(code).json({status: status, data: data})
    })
})
.post("",(req, res)=>{
    create((code, status)=>{
        res.status(code).json({status: status})
    }, req.body)
})
.get("/:id",(req, res)=>{
    detail((code, status, data)=>{
        res.status(code).send({
            status: status,
            data: data
        })
    }, req.params.id)
})
.patch("/:id",(req,res)=>{
    patch((code, status, data)=>{
        res.status(code).send({
            status: status,
            data: data
        })
    }, [req.body, req.params.id])
})
.delete("/:id",(req,res)=>{
    deleter((code, status)=>{
        res.status(code).json({status: status})
    }, [req.body, req.params.id])

})

module.exports = router;