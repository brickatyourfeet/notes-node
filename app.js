console.log('sanity check: starting app.js')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

//yargs makes it easier to deal with arguments
//parsing with process.argv is terrible, so we use yargs
const argv = yargs.argv
console.log('Process', process.argv)
console.log('Yargs', argv)
//this process.argv takes the third process argument, which allows you to
//add commands from command line after typing node and the filename
//var command = process.argv[2]
var command = argv._[0] //has same functionality as line above 
//to visualize:
console.log(command + 'what the fuck')
console.log('Command: ', command)



if (command === 'add') {
  notes.addNote(argv.title, argv.body)
} else if (command === 'list') {
  notes.getAll()
} else if (command === 'read') {
  notes.getNote(argv.title)
} else if (command === 'remove') {
  notes.removeNote(argv.title)
} else {
  console.log('Command not recognized')
}
