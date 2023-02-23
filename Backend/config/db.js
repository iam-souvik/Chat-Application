const mongoose = require("mongoose")
mongoose.set('strictQuery', false);

const ConnectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
           
        })
        console.log(`MongoDB Conneted : ${conn.connection.host}`)

    } catch (error) {

        console.log(`Error : ${error.message}`);
        process.exit()

    }

}

module.exports = ConnectDB