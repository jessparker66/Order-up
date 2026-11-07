const tags = ["savory", "sweet", "spicy", "vegan option", "made fresh"];
const prices = [6.5, 5.5, 7.5, 6.5, 5.5];

console.log(tags);
console.log(prices);

const tagText = document.querySelector("#tags");
tagText.textContent = "";

for (let i = 0; i < tags.length; i++) {
    tagText.textContent = tagText.textContent + tags[i] + " . ";
}

let total = 0;
for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}

document.querySelector("#total").textContent = "$" + total;
document.querySelector("#total").textContent = "$" + total.toFixed(2);

const tax = total * 0.08;
document.querySelector("#total").textContent = "Tax: $" + tax.toFixed(2) + " . Total with tax: $" + (total + tax).toFixed(2);
