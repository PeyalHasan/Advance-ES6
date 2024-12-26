
const products = {
    count: 5000,
    data: [
        { id: 1, name: 'Acer Predator', price: 5000 },
        { id: 2, name: 'Asus Zenbook', price: 4000 },
        { id: 3, name: 'HP Envy', price: 3000 }
    ]
}
const second = products.data[1].price;
console.log(second);
//what is chain in javascript?
//it is a way to access the object property in a nested object
//example
const first = products?.data?.[0]?.price;