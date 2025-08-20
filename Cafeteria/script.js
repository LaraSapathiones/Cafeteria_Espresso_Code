// script.js

// Carrinho de compras
const cart = [];

// Função para adicionar itens ao carrinho
function addToCart(nome, preco) {
  // Verifica se o produto já está no carrinho
  const itemExistente = cart.find(item => item.nome === nome);
  if (itemExistente) {
    itemExistente.qtd += 1;
  } else {
    cart.push({ nome, preco, qtd: 1 });
  }
  renderCart();
}

// Função para renderizar o carrinho
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.preco * item.qtd;
    const li = document.createElement('li');
    li.innerHTML = `${item.nome} x${item.qtd} - R$ ${(item.preco * item.qtd).toFixed(2)}
      <button onclick="removeFromCart('${item.nome}')">Remover</button>`;
    cartItems.appendChild(li);
  });
  document.getElementById('cart-total').innerText = total.toFixed(2);
}

// Função para remover itens do carrinho
function removeFromCart(nome) {
  const idx = cart.findIndex(item => item.nome === nome);
  if (idx > -1) {
    if (cart[idx].qtd > 1) {
      cart[idx].qtd -= 1;
    } else {
      cart.splice(idx, 1);
    }
    renderCart();
  }
}

// Função para enviar pedido via WhatsApp
function sendOrder() {
  if (cart.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }
  let mensagem = 'Olá! Gostaria de fazer o seguinte pedido:\n\n';
  cart.forEach(item => {
    mensagem += `- ${item.nome} x${item.qtd}: R$ ${(item.preco * item.qtd).toFixed(2)}\n`;
  });
  mensagem += `\nTotal: R$ ${document.getElementById('cart-total').innerText}`;
  const telefone = '17999999999';
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}
  // Simula envio via WhatsApp
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/5517999999999?text=${encodedMessage}`;
  window.open(whatsappLink, '_blank');
}
