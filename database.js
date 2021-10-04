const mongoose = require("mongoose");

const mongodb_url = 'mongodb://localhost/topicosweb'

async function connect() {
  await mongoose.connect(mongodb_url)
}

