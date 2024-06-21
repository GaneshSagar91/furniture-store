let products = null;
let productsContainer = document.querySelector('.products');

fetch('products.json')
 .then(res => res.json())
 .then(data => {
  products = data
  insertData(products);
})
 .catch(err => console.log(err))

function insertData(products){
  products.forEach((product, i) => {
    const productWrapper = document.createElement('a');
    productWrapper.classList.add('product');
    productWrapper.href = `./product.html?id=${product.id}`
    productWrapper.innerHTML = ` 
                                <img src='./images/${product.id}.png'>
                                <p class='product-name'>
                                  ${product.name}
                                </p>
                                <p class='price'>
                                  $${product.price}
                                </p>
    `;

    productsContainer.appendChild(productWrapper);
    
  })
  
}