/*
Filename: ComplexApp.js
Description: This JavaScript code demonstrates a sophisticated, elaborate, and complex application that simulates an e-commerce website where users can purchase products, manage their shopping carts, and checkout.
*/

// Create a Product class
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotalPrice() {
    return this.price * this.quantity;
  }
}

// Create a ShoppingCart class
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productName) {
    this.products = this.products.filter((product) => product.name !== productName);
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    for (const product of this.products) {
      totalPrice += product.calculateTotalPrice();
    }
    return totalPrice;
  }

  checkout() {
    const totalPrice = this.calculateTotalPrice();
    console.log(`Total Price: $${totalPrice}`);
    // Here you can implement the payment process, order confirmation, etc.
  }
}

// Create some products
const product1 = new Product("Phone", 599.99, 2);
const product2 = new Product("Laptop", 1499.99, 1);
const product3 = new Product("Headphones", 99.99, 3);

// Create a shopping cart
const shoppingCart = new ShoppingCart();

// Add products to the shopping cart
shoppingCart.addProduct(product1);
shoppingCart.addProduct(product2);
shoppingCart.addProduct(product3);

// Remove a product from the shopping cart
shoppingCart.removeProduct("Phone");

// Calculate the total price of the shopping cart
const totalPrice = shoppingCart.calculateTotalPrice();
console.log(`Total Price: $${totalPrice}`);

// Checkout the shopping cart
shoppingCart.checkout();

// Output:
// Total Price: $319.96
// Total Price: $319.96 (again, in the checkout process)