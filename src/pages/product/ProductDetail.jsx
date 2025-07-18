import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getData } from "../../api/api";

export default function ProductDetail() {
  const { id } = useParams();

  let [product, setProduct] = useState({});

  const getProductById = async () => {
    let result = await getData(`/product/${id}`);
    setProduct(result);
  };

  useEffect(() => {
    getProductById();
  }, [id]);

  // Helper function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`star-full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    if (hasHalfStar) {
      stars.push(
        <svg key="star-half" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292zM10 15.347V5.5l2.76 8.497-2.76-6.797z"></path>
        </svg>
      );
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`star-empty-${i}`} className="w-5 h-5 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    return <div className="flex items-center">{stars}</div>;
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-12 mt-10">
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800 transition-all duration-300 ease-in-out hover:shadow-xl">
        {/* Product Image Section */}
        <div className="md:w-1/2 p-6 flex justify-center items-center bg-gray-50 dark:bg-gray-700">
          <img
            className="object-contain w-full h-auto max-h-[450px] rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>

        {/* Product Details Section */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              {product.title}
            </h1>
            <p className="text-xl font-medium text-gray-600 dark:text-gray-400 mb-4">
              {product.brand && <span className="mr-2">{product.brand}</span>}
              {product.category && <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-900">{product.category}</span>}
            </p>

            <div className="flex items-center mb-4">
              {renderStars(product.rating)}
              {product.rating && (
                <span className="ml-2 text-gray-600 dark:text-gray-400 text-sm">
                  ({product.rating.toFixed(2)} out of 5)
                </span>
              )}
            </div>

            <p className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              ${product.price ? product.price.toFixed(2) : 'N/A'}
              {product.discountPercentage > 0 && (
                <span className="ml-3 text-lg font-semibold text-red-500 dark:text-red-400 line-through">
                  ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                </span>
              )}
              {product.discountPercentage > 0 && (
                <span className="ml-2 text-sm text-green-600 dark:text-green-400 font-medium">
                  ({product.discountPercentage}% off)
                </span>
              )}
            </p>

            <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              {product.description}
            </p>

            {/* Product Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-6 text-sm text-gray-700 dark:text-gray-400">
              <p>
                <strong className="font-semibold text-gray-800 dark:text-gray-200">Availability:</strong>{" "}
                <span
                  className={`${
                    product.availabilityStatus === "In Stock"
                      ? "text-green-600 font-medium"
                      : "text-red-600 font-medium"
                  }`}
                >
                  {product.availabilityStatus} ({product.stock} in stock)
                </span>
              </p>
              <p>
                <strong className="font-semibold text-gray-800 dark:text-gray-200">SKU:</strong> {product.sku}
              </p>
              {product.dimensions && (
                <p>
                  <strong className="font-semibold text-gray-800 dark:text-gray-200">Dimensions:</strong> {product.dimensions.width}w x{" "}
                  {product.dimensions.height}h x {product.dimensions.depth}d
                </p>
              )}
              <p>
                <strong className="font-semibold text-gray-800 dark:text-gray-200">Weight:</strong> {product.weight} kg
              </p>
              <p>
                <strong className="font-semibold text-gray-800 dark:text-gray-200">Warranty:</strong> {product.warrantyInformation}
              </p>
              <p>
                <strong className="font-semibold text-gray-800 dark:text-gray-200">Shipping:</strong> {product.shippingInformation}
              </p>
              <p className="col-span-1 sm:col-span-2">
                <strong className="font-semibold text-gray-800 dark:text-gray-200">Return Policy:</strong> {product.returnPolicy}
              </p>
            </div>
          </div>

          {/* Action Buttons (Example) */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200">
              Add to Cart
            </button>
            <button className="w-full sm:w-auto px-6 py-3 border border-indigo-600 text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-indigo-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      {product.reviews && product.reviews.length > 0 && (
        <div className="mt-10 bg-white rounded-xl shadow-lg p-6 md:p-8 dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-4 border-gray-200 dark:border-gray-700">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-96 overflow-y-auto pr-4">
            {product.reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  {renderStars(review.rating)}
                  <span className="ml-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {review.rating}/5
                  </span>
                </div>
                <p className="text-gray-800 dark:text-gray-300 font-medium mb-1">
                  "{review.comment}"
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-500">
                  — {review.reviewerName} on {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}