import React from "react";
import { useEffect, useState } from "react";
import CardProductFromApi from "../../components/cards/product-fromapi";
import { getData } from "../../api/api";
import { useLocation } from "react-router";

export default function Product() {
  const [products, setProduct] = useState([]);
  const { state } = useLocation();

  let getProducts = async () => {
    let result = await getData(`/products/category/${state}`);
    setProduct(result.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <section className="max-w-screen-xl mx-auto mt-20 px-5">
      <p className="text-left text-xl mb-5">Filterd by {state}</p>
      {/* product section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {products.map((product) => (
          <CardProductFromApi
            title={product.title}
            description={product.description}
            thumbnail={product.thumbnail}
            price={product.price}
            category={product.category}
            rating={product.rating}
            stock={product.stock}
            id={product.id}
          />
        ))}
      </section>
    </section>

  );
}
