import mongoose from "mongoose";

export const Connection = (username: any, password: any) => {
    // export const Connection = (username: string | undefined, password: string | undefined) => {
    // mongoose.connect('mongodb+srv://aman:12345@flipkart-clone.u4j2x.mongodb.net/FLIPKART-CLONE?retryWrites=true&w=majority', {
        mongoose.connect(`mongodb+srv://${username}:${password}@flipkart-clone.u4j2x.mongodb.net/FLIPKART-CLONE?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
        .then(() => {
            console.log('Connection to database successful')
        })
        .catch((err) => {
            console.log(err)
        })
}

