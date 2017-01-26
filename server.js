var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

app.use(express.static('static'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.delete('/api/contacts/:id', (req, resp) => {
    console.log('Contact with id=' + req.params.id + ' was deleted');
    resp.send('OK');
});

app.put('/api/contacts/:id', (req, resp) => {
    console.log('Contact with id=' + req.params.id + ' was updated');
    resp.send('OK');
});

app.post('/api/contacts', (req, resp) => {
    console.log('New contact was added', req.body);
    resp.send(req.body);
});

app.listen(3000, () => console.log('[INFO] Server was started on port 3000'));