// app.js
document.getElementById('orderBtn').addEventListener('click', function() {
    const selectedItems = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(checkbox => checkbox.value);
  
    if (selectedItems.length === 0) {
      alert("Please select at least one item.");
      return;
    }
  
    document.getElementById('orderDisplay').textContent = 'Preparing your food...';
  
    const orderId = `BK${Math.floor(Math.random() * 10000)}`;
    const preparationTime = Math.floor(Math.random() * 5) + 1; // Random time between 1-5 seconds
  
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(orderId);
      }, preparationTime * 1000);
    })
    .then(id => {
      document.getElementById('orderDisplay').innerHTML = `
        <span id="orderId">Order ID: ${id}</span>
        <img src="food-image.jpg" alt="Food" style="width:200px;"/>
      `;
    });
  });
  