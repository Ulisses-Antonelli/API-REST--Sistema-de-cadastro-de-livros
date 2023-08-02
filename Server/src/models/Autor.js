import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id:{type: String},
        nome:{type: String, required: true},
        nacionalidade:{type: String}
    },
    {
        versionKey: false
    } 
)

const Autores = mongoose.model("autores", autorSchema);

export default Autores;