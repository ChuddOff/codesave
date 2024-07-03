import mongoose from "mongoose";


const SchemaHeroes = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: true,
        unique: false
    },
    element: {
        type: String,
        required: true,
        unique: false
    },
    uri: {
        type: String,
        required: true,
        unique: false
    }
});

const heroes = new mongoose.model('heroes', SchemaHeroes);