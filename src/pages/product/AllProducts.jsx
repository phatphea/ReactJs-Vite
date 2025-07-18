import React from "react";
import { useEffect, useState } from "react";
import CardProductFromApi from "../../components/cards/product-fromapi";
import { getData } from "../../api/api";

export default function AllProducts() {
  const [products, setProduct] = useState([]);

  let getProducts = async () => {
    let result = await getData("/products");

    setProduct(result.products);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <section className="max-w-screen-xl mx-auto mt-16 px-5">
      <p className="text-center text-3xl mb-10">All Products</p>
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
