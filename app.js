console.log('sanity check: starting app.js')

const fs = require('fs')
const os = require('os')
const _ = require('lodash')
const notes = require('./notes.js')

console.log(_.isString(true))
console.log(_.isString('string and things'))

//.uniq in lodash removes duplicates of an array
var filteredArray = _.uniq(['Name', 'Name', 3, 3, 4, 5, 6])
console.log(filteredArray)



//console.log('Result: ', notes.add(4, 4))

//var user = os.userInfo()
//console.log(user)

//fs.appendFileSync('greetings.txt', 'using node file system test')
//fs.appendFileSync('greetings.txt', 'Hello ' + user.username + '!')
//same thing but with template strings
//fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`)
