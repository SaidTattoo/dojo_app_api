const mongoose =  require('mongoose');

const dbConnect = async () => {
    const DB_URL = process.env.DB_URL;
    try {
        await mongoose.connect(DB_URL);
        console.log('Connected to DB');
    } catch (err) {
        console.log(err);
    }
}

module.exports =  dbConnect;