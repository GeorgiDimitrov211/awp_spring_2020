const mongoose = require('mongoose'); // We need the mongoose library

doStuff();

async function doStuff() {
    // Connection to local database named 'kittens-example'. If it doesn't exists, it will automatically get created.
    try {
        await mongoose.connect('mongodb://localhost/kittens-example', {useNewUrlParser: true, useUnifiedTopology: true});
    } catch (e) {
        console.error(e)
    }
    console.log("Database connected:", mongoose.connection.name);

    // This is the schema for kitten
    const kittySchema = new mongoose.Schema({
        name: String, // A kitten only has a name (String).
    });

    // The 'Kitten' model is used to do CRUD stuff with kittens
    const Kitten = mongoose.model('Kitten', kittySchema);

    // Use the model to create a single kitten (named "Garfield")
    let garfield = new Kitten({ name: 'Garfield' });

    // Let's save it.
    try {
        let savedKitten = await garfield.save();
        console.log("Saved garfield.", savedKitten); // It is now saved!
    } catch(error) { // Error handling in case it doesn't save
        console.error(error);
    }

    // Find first kitten with name 'garfield'
    // You can do try/catch here as well to catch errors.
    let kitten = await Kitten.findOne({name: /garfield/i});
    console.log("Found a kitten:", kitten); // Print it!

    await mongoose.disconnect(); // It's good practice to disconnect before closing the app.
    console.log("Databased disconnected");
}