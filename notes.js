console.log('starting notes.js')

var addNote = (title, body) => {
  console.log('adding note', title, body)
}

var getAll = () => {
  console.log('Getting all notes')
}

var getNote = (title) => {
  console.log('grabbed note: ' + title + '- now you can read it')
}

var removeNote = (title) => {
  console.log('removing: ' + title + '- that note is gone. ')
}

module.exports = {
  addNote: addNote,
  //or just addNote
  getAll,
  getNote,
  removeNote
}


//this sets the addNote to export named
//addNote, the colon and second name could be left off
