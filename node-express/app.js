const express = require('express')
const app = express()
const fs = require('fs')
const request = require('request')
const process = require('child_process')
const port = 3001
app.get('/get', (req, res) => {

    let { query } = req;

    process.exec(`git clone ${query.path}`, function (error, stdout, stderr) {

        if (error != null) {
            res.json({ code: 0, msg: '项目已存在' })
        } else {
            res.json({ code: 1, msg: '成功拉起项目到本地' })
        }
    })
})
app.get('/branches', (req, res) => {
    process.exec(`cd /Users/jiqingpeng/Documents/auto/automation && git branch -r`, function (error, stdout, stderr) {
        console.log(error, stdout, stderr)
        if (error != null) {
            res.json({ code: 0, msg: '项目已存在' })
        } else {
            res.json({ code: 1, msg: '成功拉起项目到本地' })
        }
    })

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
