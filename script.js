
function buy(item, price){
let amount = prompt("How many do you want to buy?");
if(!amount) return;

localStorage.setItem("item", item);
localStorage.setItem("price", price);
localStorage.setItem("amount", amount);

window.location.href = "checkout.html";
}
