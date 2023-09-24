const os = require('os')

// console.log(os.arch()) 
// console.log(os.cpus()) // সিপিইউ ইনফর্মেশন 
// console.log(os.freemem()) // ফ্রি মেমরি দেখা যাবে 
// console.log(os.networkInterfaces()) // নেটওয়ার্ক ইনফর্মেশন 

// ওপারেটীং সিস্টেম সম্পর্কে যদি জানতে চাই তাহলে 
console.log(os.hostname()) // আমার পিসির হোস্টনেম সমপর্কে জানতে পারবো 
console.log(os.homedir()) // আমার হোম ডিরেক্টরি সমপর্কে জানতে পারবো 
console.log(os.type()) // পিসির টাইপ সমপর্কে জানতে পারবো 
console.log(os.userInfo()) //ইউজার ইনফর্মেশন  



// Node js Os  Write File and Read File