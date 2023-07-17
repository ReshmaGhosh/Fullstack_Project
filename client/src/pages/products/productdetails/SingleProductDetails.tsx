import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchProductById } from "../../../components/features/product/ProductSlice";
import { RootState, AppDispatch } from "../../../redux/store";
import NavBar from "../../../components/header/Navbar";

function SingleProductDetails() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<Record<string, string | undefined>>();
  const product = useSelector((state: RootState) => state.products.product);
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [id, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  } else if (status === "succeeded" && product) {
    return (
      <div>
     
        <NavBar />
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <img src={product.image} alt={product.title} />
        {/* <img src={product.image2} alt={`${product.title}_2`} />
        <img src={product.image3} alt={`${product.title}_3`} />
        <img src={product.image4} alt={`${product.title}_4`} /> */}
        <p>{product.description}</p>
      </div>
    );
  } else if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return null;
}

export default SingleProductDetails;
