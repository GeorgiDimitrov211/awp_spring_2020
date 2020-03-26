const mongoose = require('mongoose'); // We need the mongoose library

(async _ => {
    // Connection to local database named 'kittens-example'. If it doesn't exists, it will automatically get created.
    try {
        const url = 'mongodb://localhost/questions';
        await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
    } catch (e) {
        console.error(e)
    }
    console.log("Database connected:", mongoose.connection.name);

    const questionSchema = new mongoose.Schema({
        text: String,
        answers: [{
            text: String,
            votes: Number
        }]
    });

    const Question = mongoose.model('Question', questionSchema);

    const q1 = new Question({
        text: "Hvordan laver man et spørgsmål?",
        answers: [
            {text: "Det ved jeg ikke", votes: 0},
            {text: "Med Mongoose", votes: 0},
            {text: "Med Compass", votes: 0}]
    });
    const q2 = new Question({
        text: "Hvordan laver man et spørgsmål?",
        answers: [
            {text: "Det ved jeg ikke", votes: 0},
            {text: "Med Mongoose", votes: 0},
            {text: "Med Compass", votes: 0}]
    });

    // Let's save it.
    try {
        //let savedQ1 = await q1.save();
        //let savedQ2 = await q2.save();
        //console.log("Questions saved.", savedQ1, savedQ2);
    } catch(error) { // Error handling in case it doesn't save
        console.error(error);
    }

    let question = await Question.findById("5e7c7141d805a11088a77458");
    console.log("Found a question:", question);

    const index = Math.floor(Math.random() * question.answers.length);
    question.answers[index].votes++;

    try {
        let qSaved = await question.save();
        console.log("Question updated.", qSaved);
    } catch(error) {
        console.error(error);
    }

    await mongoose.disconnect(); // It's good practice to disconnect before closing the app.
    console.log("Databased disconnected");
})();