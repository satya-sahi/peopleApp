const express = require('express');
const app = express();
const port = 3000;

let personData = [
    {
        "id":1,
        "FullName":"John Doe",
        "role":"Manager",
        "age":15,
        "Division":"Finance"
    },
    {
        "id":2,
        "FullName":"Dan Doe",
        "role":"Software ENgineer",
        "age":18,
        "Division":"IT"
    },
    {
        "id":3,
        "FullName":"David Doe",
        "role":"Lead",
        "age":15,
        "Division":"Communications"
    }
];
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Create a Book
app.post('/addPerson', (req, res) => {
    let data = req.data;
    console.log(req.data)
    let { id, firstName, lastName, role } = data;
    personData.push({
        "id": id,
        "FullName":firstName+lastName,
        "role":role
    })
    res.json({
        "message":"Person record has been saved"
    })
});

// Get All Books
app.get('/persons', (req, res) => {
    res.json(personData);
});


// Update a Book
app.put('/updatePerson/:id', (req, res) => {
    data=req.data;
    person = personData.find((x)=>x.id===req.params('id'));
    
});

// Delete a Book
app.delete('/deletePerson/:id', (req, res) => {
   personData = personData.filter((x)=>x.id!==req.params('id')) ;
   res.json({
    "message":"Record Deleted!!!"
   })
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});