const categories = [
  {
    Name: "Clothes",
    Type: ["Male", "Female"],
  },
  {
    Name: "Footwares",
    Type: ["Shoes", "Sandals", "Slippers"],
  },
  {
    Name: "Bags",
    Type: ["Shoulder bags", "Handbags"],
  },
  {
    Name: "Fashion accessories",
    Type: [],
  },
  {
    Name: "Computers",
    Type: ["Desktop computers", "Laptop computers"],
  },
  {
    Name: "Phones",
    Type: [],
  },
  {
    Name: "Electrical gadgets/applicances",
    Type: [],
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
