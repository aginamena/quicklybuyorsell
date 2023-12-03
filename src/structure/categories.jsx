const categories = [
  {
    Name: "Shoes",
    Type: ["Male", "Female"],
  },
  {
    Name: "Sandals",
    Type: ["Male", "Female"],
  },
  {
    Name: "Slides",
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
