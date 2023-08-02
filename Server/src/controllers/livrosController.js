import Livro from "../models/Livro.js";

class LivroController {

    static listarLivros = async (req, res)=>{
        try{
            const livros =  await Livro.find().populate('autor').exec()
            res.status(200).json(livros)
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static listarLivrosPorIp = async (req, res)=>{
        const {id} = req.params;
        try {
            const livro = await Livro.findById(id).populate('autor', 'nome').exec();
            res.status(200).json(livro);
        } catch (err) {
            res.status(400).send({message: `${err.message} - Id do livro não localizado`})
        }
    }

    static listarLivroPorEditora  = async (req, res)=>{
        try{
            const editora = req.query.editora;
            const ed = await Livro.find({'editora': editora})
            res.status(200).json(ed);
        } catch (err) {
            res.status(400).send({message: `${err.message} - Id do livro não localizado`})
        }
    }

    static cadastraLivro = async (req, res)=>{
        const livros = new Livro(req.body);
        try {
            const result = await livros.save()
            res.status(201).send(result.toJSON())
        } catch (err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar livro`})
        }
    }

    static atualizarLivro = async (req, res)=>{
        const id = req.params.id;
        try {
            await Livro.findByIdAndUpdate(id, {$set: req.body}, {new: true})
            res.status(200).send({message: 'Livro atualizado com sucesso'}) 
        } catch (err) {
            res.status(500).send({message: err.message})
        }       
    }

    static excluir = async (req, res) =>{
        const {id, titulo} = req.params;
        try {
            await Livro.findByIdAndDelete(id);
            res.status(200).send(`Livro ${req.body.titulo} deletado com sucesso`);
        } catch (err) {
            res.status(400).send({message: `${err.message} - Id do livro não localizado`})
        }
    }
}

export default LivroController;