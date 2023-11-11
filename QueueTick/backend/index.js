const express = require('express');
const mongoose = require('mongoose');
const List = require('./models/List');

const app = express();
const PORT = 5000;
const MONGO_URI = 'mongodb://127.0.0.1:27017/queuetick';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB: ', error));

// TODO: Add a POST and PUT call for adding and updating listitems.
// TODO: Remake endpoint logic into functions and pass them in as parameter e.g: app.get('/lists', getAllLists);
// TODO: Move endpoints into a routes folder

app.post('/lists', (request, response) => {
  const newList = new List({
    items: [
      { text: 'Sample list item 1', comment: "Tis'a comment", completed: true },
      {
        text: 'Sample list item 2',
        comment: "Tis'a comment 2",
        completed: false,
      },
    ],
  });

  newList
    .save()
    .then((list) => response.json(list))
    .catch((err) =>
      response.status(500).json({ error: `Failed to create list: ${err}` }),
    );
});

app.get('/lists', (request, response) => {
  List.find({})
    .then((lists) => {
      response.json(lists);
    })
    .catch((err) => {
      response
        .status(500)
        .json({ error: `An error occurred while fetching lists: ${err}` });
    });
});

app.get('/lists/:id', (request, response) => {
  List.findById(request.params.id)
    .then((list) => {
      if (list) response.json(list);
      else response.status(404).json({ error: 'List not found' });
    })
    .catch((err) =>
      response.status(500).json({
        error: `Failed to fetch list with id: ${request.params.id}: ${err}`,
      }),
    );
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
