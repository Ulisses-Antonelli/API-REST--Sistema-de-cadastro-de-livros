import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", ()=>{
    console.log("Conexão com o banco feita com sucesso")
})
 
const app = express();
app.use(express.json());
routes(app);

export default app;

// const livros = [
//     {id:1, "titulo":"Senhor dos Aneis"},
//     {id:2, "titulo": "O Hobbit"}
// ]

// {
//     "_id": "64932a7b41930ced6647be10",
//     "titulo": "Back-end Javascript",
//     "autor": "Eduardo Felipe",
//     "editora": "Casa do Código",
//     "numeroPaginas": 100,
//     "__v": 0
// }


// esta rota RECEBE UMA REQUISIÇÃO GET E RESPONDE COM RES.SEND //
// app.get('/', (req, res)=>{
//     res.status(200).send('Curso de Node')
// })

// app.get('/livros', async (req, res)=>{
//     const myLivros = await livros.find()
//         res.status(200).json(myLivros)  
// })

// busca o livro por id
// app.get('/livros/:id', (req, res)=>{
//     let index = buscaLivro(req.params.id);
//     res.send(livros[index])
// })

// inseri um novo cadastro dentro do array livros
// app.post('/livros', (req, res)=>{
//     livros.push(req.body);
//     res.status(200).send('Livro cadastrado com sucesso')
// })

//altera um livro cadastrado por id
// app.put('/livros/:id', (req, res)=>{
//     let index = buscaLivro(req.params.id); // req.params.id recebe o que foi enviado pela uri
//     livros[index].titulo = req.body.titulo // req.body.titulo recebe o que foi enviado pelo corpo da requisição
//     res.json(livros); // retorna o a array de json com o novo dado inserido
// })

// app.delete('/livros/:id', (req, res)=>{
//     let {id} = req.params;
//     let index = buscaLivro(id);
//     livros.splice(index, 1);
//     res.send(` Livro ${id} removido com sucesso`);
// })

// function buscaLivro(id){ 
//     return livros.findIndex(livro => livro.id == id)
// }


