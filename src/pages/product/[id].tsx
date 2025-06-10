import React from "react";
import { useRouter } from "next/router";

const Product = () => {
  const { query } = useRouter();
  return <div>{JSON.stringify(query)}</div>;
};

export default Product;
