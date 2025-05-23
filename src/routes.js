import { Router } from "express";

const routes = Router();

//rota de teste

routes.get("/",(req, res) => {
    return res.send('rota de teste')
})

//rota que retorna um json
routes.get("/funcionarios", (req, res) =>{
    return res.json({
        item: [
            {
             id: "1",
             nome: "Joao",
             cargo: "aluno",
             idade: 20,
             cursoPorHora: 120.00,
             temLicenca: false
            },
            {
                id: "2",
                nome: "Daniel",
                cargo: "aluno",
                idade: 17,
                cursoPorHora: 200.00,
                temLicenca: true
               },
               {
                id: "3",
                nome: "Arthur",
                cargo: "aluno",
                idade: 17,
                cursoPorHora: 80.00,
                temLicenca: false
               },
        ]
    })
})

//rota que retorna um json com imagem
routes.get("/imagem", (req, res) =>{
    return res.json({
        item: [
            {
             id: "1",
             nome: "Joao",
            imagem: "https://ichef.bbci.co.uk/ace/ws/640/amz/worldservice/live/assets/images/2015/09/26/150926165742__85730600_monkey2.jpg.webp",
            },
            {
            id: "2",
            nome: "Daniel",
            imagem: "https://ichef.bbci.co.uk/ace/ws/640/amz/worldservice/live/assets/images/2015/09/26/150926165742__85730600_monkey2.jpg.webp",
               },
               {
                id: "3",
                nome: "Arthur",
                imagem: "https://ichef.bbci.co.uk/ace/ws/640/amz/worldservice/live/assets/images/2015/09/26/150926165742__85730600_monkey2.jpg.webp",
               },
        ]
    })
})

export default routes;