const axios = require('axios');
const db = require('./db');

//Numbers
const sum = (a, b) => a + b;

//Strings
const greeting = (name) => `Hello ${name}`;

//Boolean
// const isEven = (number) => {
//     if(number % 2 === 0){
//         return true;
//     }
//     return false;
// }
//refactored version
const isEven = (number) => number % 2 === 0;

//Array
const animals = ["cat", "dog", "cow", "sheep", "goat"];

//Objects
const getOrderById = (id) => {
    if (!id){
        throw new Error('id is not defined')
    }
  const orders = [
    {
      id: 1,
      item: "apple",
      quantity: 3,
      price: 1.5,
    },
    { id: 2, item: "banana", quantity: 2, price: 0.5 },
    { id: 3, item: "orange", quantity: 5, price: 1.0 },
  ];
  if(!id) {
    throw new Error('id is not defined')
  }
  const order = orders.find((order) => order.id === id);
  if(!order) {
    throw new Error('Order not found')
  }
  return order;
};

//Async Code
const getOrders = async () => {
  return [
    {id: 1, price: 10},
    {id: 2, price: 20},
    {id: 3, price: 30},
  ]
}

const applyDiscount = (orderId) => {
  const order = db.getOrder(orderId);

  if(order.price > 10){
    order.price = order.price * 0.9;
    db.updateOrder(order);
  }

  return order;
}


const fetchData = async () => {
  const data = axios.get('https://url.com')
  // operations
  return data;
}


module.exports = {
  sum,
  greeting,
  isEven,
  animals,
  getOrderById,
  getOrders,
  applyDiscount,
  fetchData,
};
