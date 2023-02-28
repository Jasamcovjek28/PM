document.getElementById('product-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  var name = document.getElementById('product-name').value;
  var price = document.getElementById('product-price').value;
  var description = document.getElementById('product-description').value;
  var image = document.getElementById('product-image').value;

  // Create product HTML
  var productHtml = `
    <p class="flex flex-wrap flex-center flex-gap-xxs">
      <div class="product-card">
        <img src="${image}" alt="Product Image" class="product-image">
        <div class="product-info">
          <h3 class="product-name">${name}</h3>
          <p class="product-price">${price}</p>
          <a href="#0" class="cd-add-to-cart js-cd-add-to-cart" data-price="${price}">Dodaj u korpu</a>
        </div>
      </div>
    </p>
  `;

  // Append product HTML to the page
  document.body.insertAdjacentHTML('beforeend', productHtml);

  // Reset form
  document.getElementById('product-form').reset();
});
