const mongoose = require('mongoose');

module.exports = url => {
  mongoose.connect(url, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Mongoose Error:\n' + err));
}