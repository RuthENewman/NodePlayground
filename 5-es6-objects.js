const name = "Ruth";
const userAge = 30;

const user = {
  name,
  age: userAge,
  location: 'London'
}

console.log(user)

const product = {
  label: 'Scarf',
  price: 10,
  stock: 108,
  salePrice: undefined
}

// const {label: productLabel, stock, rating = 5} = product
//
// console.log("Name: " + productLabel, "Quantity: " + stock, "Rating: " + rating)

const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock)
}

transaction('order', product)
transaction('order')
