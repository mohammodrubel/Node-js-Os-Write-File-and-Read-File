const fs = require('fs')

const fileName = './information.json'
fs.readFile(fileName,(err,data)=>{
    if(err){
        console.log(err)
    }else{
        let info = JSON.parse(data)
        console.log(info)
    }
})