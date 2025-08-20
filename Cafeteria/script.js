let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
}

function sendOrder() {
  if (cart.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }

  let message = 'Olá! Gostaria de fazer o seguinte pedido:\n';
  cart.forEach(item => {
    message += `• ${item.name} - R$ ${item.price.toFixed(2)}\n`;
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  message += `\nTotal: R$ ${total.toFixed(2)}`;

  // Simula envio via WhatsApp
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/5517999999999?text=${encodedMessage}`;
  window.open(whatsappLink, '_blank');
}
