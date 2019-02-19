const express = require('express');

const app = express();

app.get('/api/notes', (req, res) => {
  const customers = [
    {id: 1, title: 'First note', note: 'Doe'},
    {id: 2, title: 'Second note', note: 'Traversy'},
    {id: 3, title: 'Third note', note: 'Swanson'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);