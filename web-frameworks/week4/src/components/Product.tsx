import { Link } from "react-router-dom";

type ProductType = {
  id: string | number;
  name: string;
  price: number;
};

interface Props {
  product: ProductType;
}

function Product({ product }: Props): JSX.Element {
  return (
    <div className="product-card" data-testid={`product-${product.id}`}>
      <div>200 x 200</div>
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
  );
}

export default Product;
