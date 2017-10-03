//console.log('sanity check: starting app.js')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

//yargs makes it easier to deal with arguments
//parsing with process.argv is terrible, so we use yargs
const argv = yargs.argv
//console.log('Process', process.argv) //this is where you can see all of them
console.log('Yargs', argv)
//this process.argv takes the third process argument, which allows you to
//add commands from command line after typing node and the filename
//var command = process.argv[2]
var command = argv._[0] //has same functionality as line above
//to visualize: ^ v
console.log('Command: ', command)



if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log('Note created')
    console.log('********')
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
  } else {
    console.log('Not name already exists, try a new title')
  }
} else if (command === 'list') {
  notes.getAll()
} else if (command === 'read') {
  notes.getNote(argv.title)
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title)
  var message = noteRemoved ? 'Note removed' : 'Note not found'
  console.log(message)
} else {
  console.log('Command not recognized')
}
