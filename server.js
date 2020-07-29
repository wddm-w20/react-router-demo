const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Static assets
app.use(express.static(path.join(__dirname, '/dist')))

// Mock api request
app.get('/api', (req, res) => {
  res.send({
		fake: 'data',
		testing: 123,
		sent: true
	})
})

// All other requests go to index.html
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/dist', 'index.html'))
})

// Go!
app.listen(port, () => {
	console.log('Test this out: http://localhost:' + port);
})
