const products = [
  { name: "Laptop", price: 900 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 45 },
  { name: "Headphones", price: 60 },
  { name: "USB Cable", price: 10 }
];

function processProducts(products) {

  
  const productNames = products.map(product => product.name);

  
  console.log("Product Names:", productNames);

 
  products.forEach(product => {
    if (product.price > 50) {
      console.log(`${product.name}: Price is ABOVE $50`);
    } else {
      console.log(`${product.name}: Price is BELOW $50`);
    }
  });
}

processProducts(products);
