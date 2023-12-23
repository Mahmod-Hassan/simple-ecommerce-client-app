import { useState } from "react";
import { useParams } from "react-router-dom";
import ColorSelect from "../../components/ColorSelect";
import Loader from "../../components/Loader";
import { getProductById } from "../../hooks/useFetchProduct";
import generateRatings from "../../utils/generateRatings";
const ProductDetails = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const { product, loading } = getProductById(id);
  // handle loading state
  if (loading) {
    return <Loader />;
  }

  const { title, image, price, rating, variation } = product;

  const ratings = generateRatings(rating);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-10 content-center h-auto md:h-screen">
      <div className="border max-h-[400px]">
        <img className="h-full w-full" src={image} alt="" />
      </div>
      <div className="col-span-2 space-y-2">
        <h1 className="text-3xl font-bold text-gray-700">{title}</h1>
        <p className="text-lg font-semibold">
          Price : <span className="text-blue-600">${price}</span>
        </p>
        <div className="flex">{ratings}</div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quia
          nesciunt veniam cum temporibus, totam rem id dolore facere repellat ea
          labore quos omnis nisi commodi quam molestias nihil vitae!
        </p>
        <div className="flex items-center">
          <p>Size :</p>
          {variation?.sizes.map((size) => (
            <button
              className="border rounded border-gray-800 mx-2 px-2 hover:bg-blue-500 hover:text-white"
              type="button"
              key={size}
            >
              {size}
            </button>
          ))}
        </div>
        {/* ColorSelect is a component where color selecting functionality are implemented */}
        <ColorSelect
          variation={variation}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <button className="bg-blue-500 px-4 py-1 text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
