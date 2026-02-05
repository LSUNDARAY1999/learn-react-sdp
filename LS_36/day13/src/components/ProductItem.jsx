import React from "react";

const ProductItem = React.memo(({ product }) => {
  return (
    <div className="p-2 border rounded bg-white shadow-sm">
      <p className="font-semibold">{product.name}</p>
      <p className="text-sm text-gray-600">₹{product.price}</p>
    </div>
  );
});

export default ProductItem;
