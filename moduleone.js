const csvjson = require('csvjson')
const fs = require('fs')
var file_data = fs.readFileSync('./customer-data.csv', { encoding : 'utf8'})
var result = []
result = csvjson.toObject(file_data)
console.log(result); 
    fs.writeFileSync('customer-data.json', JSON.stringify(result, null, 2), (error)=>{
      if (error) return process.exit(1)
      console.log('done')
      process.exit(0)
    })
  