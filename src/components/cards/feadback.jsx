export default function Feadback() {
  return (
    <section id="feedback" className="bg-white p-6 rounded-lg shadow-lg mt-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Leave Your Feedback
        </h3>
        <form className="space-y-4">
          <div>
            <label
              for="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              for="rating"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Rating:
            </label>
            <select
              id="rating"
              name="rating"
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            >
              <option value="5">★★★★★ Excellent</option>
              <option value="4">★★★★☆ Very Good</option>
              <option value="3">★★★☆☆ Good</option>
              <option value="2">★★☆☆☆ Fair</option>
              <option value="1">★☆☆☆☆ Poor</option>
            </select>
          </div>
          <div>
            <label
              for="comment"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your Comment:
            </label>
            <textarea
              id="comment"
              name="comment"
              rows="4"
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              placeholder="Share your thoughts..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out cursor-pointer"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </section>
  );
}
