'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
app.use('*', (request, response) => { 
  response.send("Sorry that route doesn't work");
})

app.listen(PORT, () => { 
  console.log(`listening on port ${PORT}`);
});
