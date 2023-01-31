const mongoose = require('mongoose')
const connectddb = async() => {
    try {
        await mongoose.connect("mongodb+srv://jaberm:PA4FL9Z4ouUCUHDY@cluster0.t6ydlsu.mongodb.net/?retryWrites=true&w=majority")
        console.log('you are connectd to the db')
    } catch (err) {
        console.log(err)
    }
}
module.exports = connectddb;