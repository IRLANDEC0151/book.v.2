import mongoose from 'mongoose';

let connect = {}

const dbConnect = async () => {
    if (connect.isConnected) {
        console.log('MongoDB уже подключена')
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB подключена')
        connect.isConnected = db.connections[0].readyState;
    } catch (e) {
        console.log(e)
    }
}
export default dbConnect
