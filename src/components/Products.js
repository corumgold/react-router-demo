import React from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  //📣 Similar to useDispatch
  const params = useParams();

  const list = ["Luke", "Brendan", "Ben"];

  return (
    <div>
      <h1>{list[params.id - 1]}</h1>
    </div>
  );
};

export default Products;
