const products = [
    { id: 1, name: 'Producto 1', price: 100,image:'/img1.png',category:'cube' },
    { id: 2, name: 'Producto 2', price: 200,image:'/img2.png',category:'cube' },
    { id: 3, name: 'Producto 3', price: 300,image:'/img3.png',category:'cube' },
    { id: 4, name: 'Producto 4', price: 400,image:'/img4.png',category:'cube' },
    { id: 5, name: 'Producto 5', price: 500,image:'/img5.png',category:'cube' },
    { id: 6, name: 'Producto 6', price: 600,image:'/img6.png',category:'cube' },
    { id: 7, name: 'Producto 7', price: 700,image:'/img7.png',category:'cube' },
    { id: 8, name: 'Producto 8', price: 800,image:'/img8.png',category:'cube' },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
}