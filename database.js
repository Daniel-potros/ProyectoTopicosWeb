const mongoose = require("mongoose");

const mongodb_url = 'mongodb://localhost:27017/topicosweb';

mongoose.connect(mongodb_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
})

.catch(err => console.log(err));

mongoose.connection.on('open', _ => {
  console.log('Database is connected to',mongodb_url);
})

mongoose.connection.on('error', err => {
  console.log(err);
});





