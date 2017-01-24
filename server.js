var express = require('express');
var app = express();

app.use(express.static('static'));

app.delete('/api/contacts/:id', (req, resp) => {
	console.log('Contact with id =' + req.params.id + ' was deleted');
	resp.send('OK');	
});

app.listen(3000, () => console.log('[INFO] Server was started on port 3000'));