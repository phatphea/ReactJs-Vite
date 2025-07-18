import { useEffect, useState } from "react";
import CardProductFromApi from "./components/cards/product-fromapi";
import { getData } from "./api/api";
import { useNavigate, useParams } from "react-router"; // Import useNavigate and useParams

function App() {
  const [products, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate(); // Hook for programmatic navigation
  const { categorySlug } = useParams(); // Get the category slug from the URL

  // Function to fetch all product categories
  const getCategories = async () => {
    try {
      let result = await getData("/products/categories");
      setCategories(result);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Function to fetch products based on a given category slug
  const getProducts = async (slugToFetch) => {
    if (!slugToFetch) {
      setProduct([]); // Clear products if no slug is provided
      return;
    }
    try {
      let result = await getData(`/products/category/${slugToFetch}`);
      setProduct(result.products);
    } catch (error) {
      console.error(`Error fetching products for ${slugToFetch}:`, error);
      setProduct([]); // Clear products on error
    }
  };

  // Effect to load categories once when the component mounts
  useEffect(() => {
    getCategories();
  }, []); // Empty dependency array means this runs only once

  // Effect to fetch products whenever the URL's categorySlug changes, or categories load
  useEffect(() => {
    // If a category slug is present in the URL, fetch products for that slug
    if (categorySlug) {
      getProducts(categorySlug);
    } else if (categories.length > 0) {
      // If no category slug is in the URL (e.g., user is at '/'),
      // and categories have loaded, navigate to the first category's URL.
      // This will update the URL and trigger this useEffect again with categorySlug defined.
      navigate(`/products/category/${categories[0].slug}`);
    }
  }, [categorySlug, categories, navigate]); // Dependencies: re-run when these values change

  // Handler for category button clicks
  const handleCategoryClick = (slug) => {
    // Navigate to the new URL with the selected category slug
    navigate(`/products/category/${slug}`);
  };

  return (
    <>
      <main className="max-w-screen-xl mx-auto mt-16 px-5">
        {/* Categories Section */}
        <section className="mt-20 w-full">
          <div className="flex overflow-x-auto gap-3 pb-2 hide-scrollbar w-[95%] mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.slug} // Unique key for list items
                onClick={() => handleCategoryClick(cat.slug)}
                className={`flex-shrink-0 px-4 py-2 rounded text-sm transition-all cursor-pointer ${
                  categorySlug === cat.slug // Highlight active category based on URL slug
                    ? "bg-blue-700 text-white shadow-md"
                    : "bg-[#036672] text-white hover:bg-blue-700 shadow-sm"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* Product Display Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 mt-16">
          {products.length > 0 ? (
            products.map((product) => (
              <CardProductFromApi
                key={product.id} // Essential for list rendering in React
                title={product.title}
                description={product.description}
                thumbnail={product.thumbnail}
                price={product.price}
                category={product.category}
                rating={product.rating}
                stock={product.stock}
                id={product.id}
              />
            ))
          ) : (
            // Message displayed if no products are found for the selected category
            <p className="col-span-full text-center text-gray-600 dark:text-gray-400 py-8">
              No products found for this category.
            </p>
          )}
        </section>
      </main>
    </>
  );
}

export default App;