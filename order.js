function formatOrder(order) {
    const menuItems = {
      "burger": "Burger",
      "fries": "Fries",
      "chicken": "Chicken",
      "pizza": "Pizza",
      "sandwich": "Sandwich",
      "milkshake": "Milkshake",
      "coke": "Coke"
    };
  
    let formattedOrder = "";
    let currentItem = "";
  
    for (let i = 0; i < order.length; i++) {
      currentItem += order[i];
    //   console.log (currentItem);
  
      if (menuItems[currentItem]) {
        formattedOrder += menuItems[currentItem] + " ";
        currentItem = "";
        // console.log (currentItem)
      }
    }
  
    return formattedOrder.trim();
  }
  
  // Example usage
  const order = "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza";
  console.log(formatOrder(order)); // Output: "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
  