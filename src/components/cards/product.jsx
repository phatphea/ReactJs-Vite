export default function ProductCard() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
      <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition-all">
        <img
          src="https://changlee.com.br/wp-content/uploads/2016/09/coca-cola.jpg"
          alt=""
          className="w-full h-70 object-cover"
        />
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-bold">Coca-cola</h3>
          <p className="text-gray-600">$2.00</p>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition-all">
        <img
          src="https://www.alphafoodie.com/wp-content/uploads/2020/11/Orange-Ginger-Juice-1-of-1.jpeg"
          alt="Orange Juice"
          className="w-full h-70 object-cover"
        />
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-bold">Orange Juice</h3>
          <p className="text-gray-600">$5.00</p>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition-all">
        <img
          src="https://im.pluckk.in/unsafe/1920x0/uploads/30300-2.png"
          alt="Strawberry"
          className="w-full h-70 object-cover"
        />
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-bold">Strawberry</h3>
          <p className="text-gray-600">$10.00</p>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition-all">
        <img
          src="https://5aday.co.nz/assets/site/fruit-and-vegetables/_articleHero/Pineapple.jpg"
          alt="Pineapple"
          className="w-full h-70 object-cover"
        />
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-bold">Pineapple</h3>
          <p className="text-gray-600">$2.00</p>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition-all">
        <img
          src="https://www.sakraworldhospital.com/assets/spl_splimgs/benefits-kiwi-of-fruit.webp"
          alt="Kiwi"
          className="w-full h-70 object-cover"
        />
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-bold">Kiwi</h3>
          <p className="text-gray-600">$2.00</p>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition-all">
        <img
          src="https://www.dreamfoodscaribe.com/wp-content/uploads/2024/07/papaya-fruit.webp"
          alt="Papaya"
          className="w-full h-70 object-cover"
        />
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-bold">Papaya</h3>
          <p className="text-gray-600">$3.00</p>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
