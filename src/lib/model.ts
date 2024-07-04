import mongoose, {Document, Model, Schema} from "mongoose";

export interface ICode extends Document {
    name: string;
    description: string;
    show: string;
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

const code: Model<ICode> = new mongoose.model('codes', SchemaCode);

export default code;