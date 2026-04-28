import { useParams, Link } from "react-router-dom";
import { getProductById } from "../products";

function ProductDetailsView() {
  const { id } = useParams();
  const product = getProductById(Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>

      <div style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>
        <div
          style={{
            background: "#ddd",
            width: "400px",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Image placeholder
        </div>

        <div>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> €{product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
          <p><strong>Rating:</strong> {product.rating}</p>
          <Link to="/">← Back to Products</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsView;
