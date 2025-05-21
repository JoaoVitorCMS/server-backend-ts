import { Router, Request, Response } from "express";
import userControllers from "./controllers/user";
import user from "./controllers/user";
const routes = Router();

//rota de teste

routes.get("/",(req: Request, res: Response): any => {
    return res.send('rota de teste')
})

//rota que retorna um json
routes.get("/funcionarios", (req: Request, res: Response): any =>{
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
routes.get("/imagem", (req: Request, res: Response): any =>{
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

routes.post("/users", (req: Request, res: Response): any => userControllers.create(req, res))
routes.get("/users", (req: Request, res: Response): any => userControllers.read(req, res))
routes.put("/users/:id", (req: Request, res: Response): any => userControllers.updade(req, res))
routes.delete("/users/:id", (req: Request, res: Response): any => userControllers.delete(req, res))
routes.post("/login", (req: Request, res: Response): any => userControllers.login(req, res))
export default routes;