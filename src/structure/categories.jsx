const categories = [
  {
    name: "Sneakers",
  },
  {
    name: "Flat shoes",
  },
  {
    name: "Sandals",
  },
  {
    name: "Slides",
  },
];
export function getAllCategoryNames() {
  return categories.map((category) => category.name);
}
