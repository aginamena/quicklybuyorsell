import Displaycard from "components/Card";
import { useEffect, useState } from "react";

export default function ViewProducts({ email }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {}
    getProducts();
  }, []);

  return (
    <div data-testid="View Products Cmp">
      <Displaycard />
    </div>
  );
}
