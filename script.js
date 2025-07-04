fetch('image_list.txt')
  .then(response => response.text())
  .then(data => {
    const container = document.getElementById('product-list');
    container.innerHTML = ''; // Clear loading message

    const lines = data.trim().split('\n');
    lines.forEach(line => {
      const [name, price] = line.split(':').map(x => x.trim());

      // Reconstruct the original filename based on name + price
      const filename = `${name} ${price}`;

      // Try different extensions if needed (e.g., .jpg, .png)
      const imgSrc = `pic/${filename}.png`; // You can adjust extension

      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${imgSrc}" alt="${name}">
        <div class="title">${name.toUpperCase()}</div>
        <div class="price">Rs. ${price}</div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    document.getElementById('product-list').innerText = 'Failed to load products.';
    console.error(err);
  });
