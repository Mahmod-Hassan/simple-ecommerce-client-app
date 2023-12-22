import { FaArrowRight } from "react-icons/fa6";

const Product = ({ product }) => {
  const {
    image,
    title,
    variation: { colors, sizes },
  } = product;
  return (
    <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <div className="h-48">
        <img className="w-full h-full" src={image} alt="Product Image" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <div className="flex gap-3 items-center">
          <label className="text-sm font-medium text-gray-600">Color:</label>
          <div className="flex space-x-2">
            {colors.map((color) => (
              <div
                key={color}
                className={`w-6 h-6 rounded-full border border-gray-300`}
                style={{ backgroundColor: `${color}` }}
              ></div>
            ))}
          </div>
        </div>
        <div className="mt-2 flex gap-3 items-center">
          <label className="text-sm font-medium text-gray-600">Sizes:</label>
          <div className="flex space-x-2">
            {sizes.map((size) => (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {size}&quot;
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 text-center">
          <a
            href="#"
            className="text-blue-500 transition-all flex justify-center items-center gap-1 hover:font-bold hover:gap-5 p-1 bg-gray-100"
          >
            Details <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
