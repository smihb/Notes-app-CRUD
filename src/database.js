const mongoose = require('mongoose');

const URI = process.env.URI;

mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(x=>(console.log('DB Connected')))
    .catch((err) => console.log(err));
    