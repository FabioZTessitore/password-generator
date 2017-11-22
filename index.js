const express = require('express');
const app = express();
const helmet = require('helmet');

const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use('/js', express.static(__dirname + '/app'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(PORT, () => {
  console.log('server listening on port ' + PORT);
});
