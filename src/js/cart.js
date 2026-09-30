const cart = [
  {id: 1, name: "Item 1", price:"10"},
  {id: 2, name: "Item 2", price:"15"},
  {id: 3, name: "Item 3", price:"12"}
]

const cartContainer = document.getElementById("cart")

if (cartContainer) {
    cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <h2>${item.name}</h2>
                <p>$${item.price}</p>
            </div>
        `).join('')
}