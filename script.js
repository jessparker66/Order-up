const tags = ["savory", "sweet", "spicy", "vegan option", "made fresh"];
const prices = [6.5, 5.5, 7.5, 6.5, 5.5];

console.log(tags);
console.log(prices);

const tagText = document.querySelector("#tags");
tagText.textContent = "";

for (let i = 0; i < tags.length; i++) {
    tagText.textContent = tagText.textContent + tags[i] + " . ";
}