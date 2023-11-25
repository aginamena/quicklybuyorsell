const categories = [
  {
    Name: "Footwears",
    Type: ["Male", "Female"],
  },
  {
    Name: "Bags",
    Type: ["Male", "Female"],
  },
  {
    Name: "Shirts",
    Type: ["Male", "Female"],
  },
  {
    Name: "Skirts-and-Trousers",
    Type: ["Male", "Female"],
  },
];
export function getAllCategoryNames() {
  return categories.map((category) => category.Name);
}
export function getTypeOfCategoryName(categoryName) {
  for (var i = 0; i < categories.length; i++) {
    if (categoryName == categories[i].Name) return categories[i].Type;
  }
}
