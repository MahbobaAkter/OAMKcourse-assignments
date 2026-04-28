import { getAllProducts } from "../products";
import Product from "./Product";

function ProductsView() {
  const products = getAllProducts();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shop Products</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {products.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default ProductsView;
