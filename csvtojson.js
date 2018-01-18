const csvFilePath = 'customer-data.csv'
const fs = require('fs')
const csv = require('csvtojson')
let result = []
csv()
  .fromFile(csvFilePath)
  .on('json',(jsonObj)=>{
    result.push(jsonObj)
  })
  .on('done',(error)=>{
    if (error) return process.exit(1)
    console.log(result)
    fs.writeFile('customer-data.json', JSON.stringify(result, null, 2), (error)=>{
      if (error) return process.exit(1)
      console.log('done')
      process.exit(0)
    })
  }
)