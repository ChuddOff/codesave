import mongoose, {Document, Model, Schema} from "mongoose";

export interface ICode extends Document {
    name: string;
    description: string;
    show: boolean;
    author: string;
    html: string;
    css: string;
    js: string;
}

const SchemaCode: Schema = new mongoose.Schema({
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
    show: {
        type: Boolean,
        required: true,
        unique: false
    },
    author: {
        type: String,
        required: true,
        unique: false
    },
    html: {
        type: String,
        required: true,
        unique: false
    },
    css: {
        type: String,
        required: true,
        unique: false
    },
    js: {
        type: String,
        required: true,
        unique: false
    },
});

let code: Model<ICode>;
if (mongoose.models.codes) {
    code = new mongoose.model('codes'); // Получаем существующую модель
} else {
    code = new mongoose.model('codes', SchemaCode); // Создаем новую модель, если ее нет
}

export default code;