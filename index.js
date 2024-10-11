import Express from "express";
import { createProduct, readProducts, readProductById, updateProduct, deleteProduct, loadData } from "./businessrules.js";
import { body, validationResult } from "express-validator";

loadData();
const server = Express();
const port = 1234;

server.use(Express.json());

const validateProduct = [
    body('titulo').notEmpty().withMessage('Titulo é obrigatório'),
    body('descrição').notEmpty().withMessage('Descrição é obrigatória'),
    body('preço').isFloat({ gt: 0 }).withMessage('Preço deve ser um número positivo'),
    body('quantidade').isInt({ gt: 0 }).withMessage('Quantidade deve ser um inteiro maior que 0')
];

server.post("/products", validateProduct, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const product = req.body;
    const newProduct = createProduct(product);
    res.status(201).json(newProduct);
});

server.get("/products", (req, res) => {
    const products = readProducts();
    res.json(products);
});

server.get("/products/:id", (req, res) => {
    const id = req.params.id;
    const product = readProductById(id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Produto não encontrado!" });
    }
});

server.put("/products/:id", validateProduct, (req, res) => {
    const id = req.params.id;
    const updatedProduct = req.body;
    const product = updateProduct(id, updatedProduct);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Produto não encontrado!" });
    }
});

server.delete("/products/:id", (req, res) => {
    const id = req.params.id;
    const product = deleteProduct(id);
    if (product) {
        res.json({ message: "Produto excluído com sucesso!" });
    } else {
        res.status(404).json({ message: "Produto não encontrado!" });
    }
});

server.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});
