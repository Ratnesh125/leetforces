const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
app.use(cors())
app.use(express.json());
const PORT = process.env.PORT
const SECRET = process.env.SECRET;
const DB_URL = process.env.DB_URL;
const baseURL = process.env.baseURL;

const problemSchema = new mongoose.Schema({
    id: Number,
    question: String,
    difficulty: String,
});

const Problem = mongoose.model('problem', problemSchema);

mongoose.connect(`${DB_URL}/problems`, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "leetforces" });

app.post(`/add`, (req, res) => {
    const query = req.body;
    const newProblem = new Problem(query)
    newProblem.save()
    res.json({ message: "problem added successfully" })
})
app.get(`/get`, async (req, res) => {
        const data = await Problem.find({});
    res.json({ data });
})

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
    console.log(baseURL)
})