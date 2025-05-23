fetch('https://your-backend.onrender.com/api/boys')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('products');
    data.forEach(product => {
      container.innerHTML += `
        <div class="card">
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>Type: ${product.type}</p>
          <p>Price: ₹${product.price}</p>
        </div>
      `;
    });
  });
