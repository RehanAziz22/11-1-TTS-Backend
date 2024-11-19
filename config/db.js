const { default: mongoose } = require("mongoose")

const ConnectDB = async () => {

    await mongoose.connect("mongodb://localhost:27017/Ecommerce")
        .then(() => { console.log("Mongo Db Connected....") })
        .catch(() => { console.log("Mongo Db Connection failed") })

}

module.exports = ConnectDB