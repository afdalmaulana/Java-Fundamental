const fruit = ["banana", "apple", "durian", "apple"];
const newFruit = new Set (fruit);
newFruit.add("Papaya"); // add hanya bisa menambahkan secara satu-satu beda dengan push yang bisa menambahkan lebih dari satu value
newFruit.delete("durian");
// newFruit.clear() // ini adalah menghapus semua value
console.log(newFruit.has("apple"));
console.log(newFruit.size);
console.log (newFruit);