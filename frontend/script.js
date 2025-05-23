fetch('https://ecommerce-2-x700.onrender.com/api/boys')  // Replace with your actual backend URL
  .then(res => {
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  })
  .then(data => {
    const container = document.getElementById('products');
    container.innerHTML = ''; // Clear previous content if any
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
  })
  .catch(error => {
    console.error('Error fetching products:', error);
    document.getElementById('products').innerHTML = '<p>Failed to load products.</p>';
  });
