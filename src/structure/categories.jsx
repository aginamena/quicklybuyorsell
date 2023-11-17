const categories = [
  {
    Name: "Footwares",
    Type: ["Male", "Female"],
  },
  {
    Name: "Jackets",
    Type: ["Male", "Female"],
  },
  {
    Name: "Shirts",
    Type: ["Male", "Female"],
  },
  {
    Name: "Shorts",
    Type: ["Male", "Female"],
  },
  {
    Name: "Trousers",
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
