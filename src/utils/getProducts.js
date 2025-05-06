const products = [
    { id: 1, name: 'Producto 1', price: 100,image:'/img1.png',category:'1',description:'description 1' },
    { id: 2, name: 'Producto 2', price: 200,image:'/img2.png',category:'1',description:'description 2' },
    { id: 3, name: 'Producto 3', price: 300,image:'/img3.png',category:'1',description:'description 3' },
    { id: 4, name: 'Producto 4', price: 400,image:'/img4.png',category:'1',description:'description 4' },
    { id: 5, name: 'Producto 5', price: 500,image:'/img5.png',category:'1',description:'description 5' },
    { id: 6, name: 'Producto 6', price: 600,image:'/img6.png',category:'1',description:'description 6' },
    { id: 7, name: 'Producto 7', price: 700,image:'/img7.png',category:'1',description:'description 7' },
    { id: 8, name: 'Producto 8', price: 800,image:'/img8.png',category:'1',description:'description 8' },
    { id: 9, name: 'Producto 7', price: 900,image:'/img9.png',category:'1',description:'description 9' },
    { id: 10, name: 'Producto 10', price: 1000,image:'/img10.webp',category:'2',description:'description 10' },
    { id: 11, name: 'Producto 11', price: 1100,image:'/img11.webp',category:'2',description:'description 11' },
    { id: 12, name: 'Producto 12', price: 1200,image:'/img12.webp',category:'2',description:'description 12' },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 400);
    });
}


export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find((prod) => prod.id === id);
            resolve(product);
        }, 400);
    });
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filtered = categoryId === 'todos'
                ? products
                : products.filter(p => p.category === categoryId);
            resolve(filtered);
        }, 300);
    });
};
