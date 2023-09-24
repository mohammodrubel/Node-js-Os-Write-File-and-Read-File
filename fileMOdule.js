// কিভাবে একটা ফাইল রাইট করতে হয় কিভাবে একটা ফাইল রিড করতে হয় 
const fs = require('fs')

const testObject = {
    name: 'Md Rubel',
    email: 'md.rubel007@hotmail.com',
    address: {
        city: 'Dhaka, Bangladesh',
        country: 'Bangladesh'
    }
};

// প্রথমে আমাদের স্ট্রিং ফাই করে নিতে হবে 
const data = JSON.stringify(testObject)


// যেহেতু আমাদের ফাইল রাইট করতে হবে সেহেতু কাজ টা এসিংক্রোনাসলি করতে হবে 
const filename = './information.json'
fs.writeFile(filename,data,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("filewrite successfull")
    }
})