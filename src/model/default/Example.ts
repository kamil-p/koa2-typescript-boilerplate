import mongoose from "mongoose";

export type ExampleModel = mongoose.Document & {
    name: string,
};

const exampleSchema = new mongoose.Schema({
    name: String,
}, { timestamps: true });

const Example = mongoose.model("Example", exampleSchema);

export default Example;