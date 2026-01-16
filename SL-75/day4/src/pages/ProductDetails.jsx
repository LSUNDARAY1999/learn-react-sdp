import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h2>📦 Product Details</h2>
      <p>Product ID: {id}</p>

      <button onClick={() => navigate("/products")}>
        Back to Products
      </button>
    </>
  );
};

export default ProductDetails;
