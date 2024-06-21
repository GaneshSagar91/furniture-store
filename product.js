let products = null;

fetch('products.json')
  .then(res => res.json())
  .then(data => {
    products = data;
    displayData(products);
  })
  .catch(err => console.log(err));


const productId = new URLSearchParams(window.location.search).get('id');
function displayData(products){
  const thisProduct = (products.filter(p => p.id == parseInt(productId)))[0];
  console.log(thisProduct);

  document.querySelector('.image').src = `./images/${thisProduct.id}.png`;
  document.querySelector('.product-name').innerHTML = thisProduct.name;

  document.querySelector('.price').innerHTML = '$' + thisProduct.price;

  document.querySelector('.description').innerHTML = thisProduct.description;

  loadSimilarProducts(products);
}

const productsContainer = document.querySelector('.products');
function loadSimilarProducts(products){
  (products.filter(p => p.id != productId)).forEach(p => {
    const a = document.createElement('a');
    a.classList.add('product');
    a.href = `./product.html?id=${p.id}`;

    a.innerHTML =  `
                    <img src='./images/${p.id}.png'>
                    <p class='product-name'>${p.name}</p>
                    <p class='price'>$${p.price}</p>
    
    `
    productsContainer.appendChild(a);
  })
}