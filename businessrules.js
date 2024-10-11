import fs from 'fs';

let data = [];
let lastId = 0;

function loadData() {
    try {
        const dataBuffer = fs.readFileSync('data.json');
        const jsonData = dataBuffer.toString();
        data = JSON.parse(jsonData);
        lastId = data.length ? data[data.length - 1].id : 0;
    } catch (error) {
        data = [];
        lastId = 0;
    }
}

function saveData() {
    fs.writeFileSync('data.json', JSON.stringify(data));
}

function createProduct(item) {
    lastId += 1;
    item.id = lastId;
    data.push(item);
    saveData();
    return item;
}

function readProducts() {
    return data;
}

function readProductById(id) {
    return data.find((product) => product.id === parseInt(id));
}

function updateProduct(id, updatedProduct) {
    const index = data.findIndex((product) => product.id === parseInt(id));
    if (index !== -1) {
        data[index] = { ...data[index], ...updatedProduct, id: data[index].id };
        saveData();
        return data[index];
    }
    return null;
}

function deleteProduct(id) {
    const index = data.findIndex((product) => product.id === parseInt(id));
    if (index !== -1) {
        const deletedProduct = data.splice(index, 1);
        saveData();
        return deletedProduct[0];
    }
    return null;
}

export { loadData, createProduct, readProducts, readProductById, updateProduct, deleteProduct };
