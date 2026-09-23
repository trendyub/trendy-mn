const products=[
{name:'Oversized Graphic Tee',price:89000,img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80'},
{name:'Urban Cargo Pants',price:149000,img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80'},
{name:'Essential Hoodie',price:159000,img:'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=80'},
{name:'Street Overshirt',price:179000,img:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80'}];
let cart=[];
const fmt=n=>'₮'+n.toLocaleString('en-US');
document.getElementById('productGrid').innerHTML=products.map((p,i)=>`<article><div class="product-image" style="background-image:url('${p.img}')"></div><div class="product-info"><span>${p.name}</span><span class="price">${fmt(p.price)}</span></div><button style="width:100%;padding:12px;border:1px solid #111;background:transparent;cursor:pointer" onclick="add(${i})">ADD TO CART</button></article>`).join('');
function add(i){cart.push(products[i]);renderCart();document.getElementById('overlay').classList.add('open')}
function renderCart(){document.getElementById('count').textContent=cart.length;document.getElementById('cartItems').innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-item"><span>${p.name}</span><strong>${fmt(p.price)}</strong></div>`).join(''):'<div class="empty">Your cart is empty.</div>';document.getElementById('total').textContent=fmt(cart.reduce((s,p)=>s+p.price,0))}
function openCart(){document.getElementById('overlay').classList.add('open');renderCart()}function closeCart(e){if(!e||e.target.id==='overlay')document.getElementById('overlay').classList.remove('open')}
function checkout(){alert('Захиалгын form-ийг дараагийн хувилбарт холбож өгнө. Одоогоор demo хувилбар.')}
function subscribe(e){e.preventDefault();alert('Бүртгүүлсэнд баярлалаа!')}
renderCart();
