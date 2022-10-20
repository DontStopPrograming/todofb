const { response } = require('express')
const express = require('express')
const cors = require('cors')

const app = express()

const logger = require('./loggerMiddleware')
// const app = http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type': 'application/json'})
//     response.end(JSON.stringify(note))
// })

app.use(cors())
app.use(express.json())
app.use(logger)

let notes = [
    {
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    }
]

app.get('/', (request, reponse) => {
    response.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
        
    if(note){
        response.json(note)
    } else{
        response.status(404).end()
    }
})

app.use((request, response) => {
  response.status(404).json({
    error: 'Not Found'
  })
})



const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)