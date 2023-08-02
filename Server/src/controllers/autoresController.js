import Autores from "../models/Autor.js";

class AutoresController {

    static listarAutores = async (req, res)=>{
       const autores =  await Autores.find()
        res.status(200).json(autores)
    }

    static listarAutorPorIp = async (req, res)=>{
        const {id} = req.params;
        try {
            const autores = await Autores.findById(id);
            res.status(200).json(autores);
          //res.status(200).send(autores);
        } catch (err) {
            res.status(400).send({message: `${err.message} - Id do autor não localizado`})
        }
    }

    static cadastrarAutor = async (req, res)=>{
        const autores = new Autores(req.body);
        try {
            const result = await autores.save()
            res.status(201).send(result.toJSON())
        } catch (err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar autor`})
        }
    }

    static atualizarAutor = async (req, res)=>{
        const id = req.params.id;
        try {
            await Autores.findByIdAndUpdate(id, {$set: req.body}, {new: true})
            res.status(200).send({message: 'Autor atualizado com sucesso'}) 
        } catch (err) {
            res.status(500).send({message: err.message})
        }       
    }

    static excluirAutor = async (req, res) =>{
        const {id} = req.params;
        try {
            await Autores.findByIdAndDelete(id);
            res.status(200).send(`Autor ${req.body.nome} deletado com sucesso`);
        } catch (err) {
            res.status(500).send({message: `${err.message} - Id do autor não localizado`})
        }
    }
}

export default AutoresController;
    