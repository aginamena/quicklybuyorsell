import { FaTshirt } from "react-icons/fa";
import { GiConverseShoe, GiTrousers, GiUnderwearShorts } from "react-icons/gi";
import { TbJacket } from "react-icons/tb";

export const categories = [
  {
    Name: "Footwares",
    Type: ["Male", "Female"],
    Icon: <GiConverseShoe />,
  },
  {
    Name: "Jackets",
    Type: ["Male", "Female"],
    Icon: <TbJacket />,
  },
  {
    Name: "Shirts",
    Type: ["Male", "Female"],
    Icon: <FaTshirt />,
  },
  {
    Name: "Shorts",
    Type: ["Male", "Female"],
    Icon: <GiUnderwearShorts />,
  },
  {
    Name: "Trousers",
    Type: ["Male", "Female"],
    Icon: <GiTrousers />,
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
