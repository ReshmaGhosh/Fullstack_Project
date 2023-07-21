import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchColor } from "../components/features/colorit/ColorItSlice"; // adjust the import path as necessary
import { RootState, AppDispatch } from "../redux/store";
import ColorItCard from "../components/kulius/card/ColorItCard";

function ColorIt() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchColor());
  }, [dispatch]);

  const color = useSelector((state: RootState) => state.colorIt.color);
  const status = useSelector((state: RootState) => state.colorIt.status);
  const error = useSelector((state: RootState) => state.colorIt.error);

  let content;
  if (status === "loading") {
    content = "Loading...";
  } else if (status === "succeeded") {
    content = color.map((color) => (
      <ColorItCard
        key={color._id}
        _id={color._id}
        title={color.title}
        description={color.description}
        image={color.image}
      />
    ));
  } else if (status === "failed") {
    content = `Error: ${error}`;
  }

  return <div>{content}</div>;
}

export default ColorIt;
