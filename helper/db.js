var mongoose = require("mongoose")

module.exports = () => {
    mongoose.connect('mongodb+srv://admin_onur:albayrak1@general.isnhm.mongodb.net/KEEP?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true})

    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected')
      })
      mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err)
      })

    mongoose.Promise = global.Promise
}