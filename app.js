const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

let spravochnik = [];

app.use(bodyParser.json());
app.use(cors());

app.post('/guide', function(req, res) {
  spravochnik.push(req.body);
  const id = spravochnik.length-1
  res.send(id.toString());
});

app.get('/guide', function(req, res) {
  res.send(spravochnik);
});

app.get('/guide/:id', function(req, res) {
  if (req.params.id < spravochnik.length) {
     const id = spravochnik[req.params.id]
    if (id != null) {
      res.send(id); 
    } else {
      res.sendStatus(404);
    }
  } else {
    res.sendStatus(404 );
  }
});

app.put('/guide/:id', function(req, res) {
  if (req.params.id < spravochnik.length) {
    spravochnik[req.params.id] = req.body;
    res.send();
  } else {
    res.sendStatus(404);
  }
});
app.delete('/guide/:id', function(req, res) {
  if (req.params.id < spravochnik.length) {
    spravochnik[req.params.id] = null;
    res.send();
  } else {
    res.sendStatus(404);
  }
});

app.listen(8000);
