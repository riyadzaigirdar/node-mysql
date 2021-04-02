var sql = require('../db.js');

const listAllTask = (result)=>{
    sql.query("select * from tasks", function (err, res) {
    if(err) return result(500,"failed", null)
    return result(200, "success", res)
    });
}

const getTaskById = (result, id)=>{
    sql.query(`select * from tasks where id =${id}`, (err, data)=>{
        if (err) return result(500,"failed", null);
        if (data.length === 0) return result(404, "Not found", null)
        return result(200,"success", data[0])
    })
}

const createNewTask = (result, body) => {
    sql.query("insert into tasks set ?", body,(err, data)=>{
        if (err) return result(500, "failed")
        return result(201, "success")
    })
}

const deleteATask = (result, id)=>{
    sql.query("delete from tasks where id = ?", id, (err, data)=>{
        if(err) return result(500, "failed")
        if(data.affectedRows === 0) return result(404, "Not found")
        return result(204, "success")
    })
}

const patchATask = (result, arr)=>{
    sql.query("update tasks set ? where id = ?", arr, (err, data)=>{
        if(err) return result(500, "failed")
        if(data.affectedRows === 0) return result(404, "Not found")
        return result(200, "success")
    })
}

module.exports = {
    list : listAllTask,
    detail :getTaskById,
    create : createNewTask,
    deleter : deleteATask,
    patch : patchATask
}