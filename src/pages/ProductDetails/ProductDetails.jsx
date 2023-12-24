import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import ColorSelect from "../../components/ColorSelect";
import Loader from "../../components/Loader";
import { AuthContext } from "../../context/AuthProvider";
import { getProductById } from "../../hooks/useHttpRequest";
import generateRatings from "../../utils/generateRatings";
const ProductDetails = () => {
  const { user, updateCart, setUpdateCart } = useContext(AuthContext);
  // useParams is a react-router-dom hooks
  const { id } = useParams();

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  // getProductById is a function inside a custom hook
  // it fetch all products from database
  const { product, loading } = getProductById(id);
  const {
    title,
    image,
    price,
    rating,
    variation: { sizes, colors } = {},
  } = product;

  // set the first element of colors and sizes array
  // on selectedColor and selectedSize state
  useEffect(() => {
    setSelectedColor(colors?.[0] || "");
    setSelectedSize(sizes?.[0] || "");
  }, [colors, sizes]);

  // handle loading state
  if (loading) {
    return <Loader />;
  }

  // generateRatings is a function that receive rating number
  //and show rating-icon based on rating number
  const ratings = generateRatings(rating);

  const addToCart = async (productId) => {
    try {
      const res = await fetch("http://localhost:4000/add-to-cart", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: user?.email,
          productId,
          color: selectedColor,
          size: selectedSize,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        setUpdateCart(!updateCart);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-10 content-center h-auto md:h-screen md:-mt-20">
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
          {sizes?.map((size) => (
            <button
              className={`border rounded border-gray-800 mx-2 px-2 hover:bg-blue-500 hover:text-white ${
                selectedSize === size ? "bg-blue-500 text-white" : ""
              } ? `}
              onClick={() => setSelectedSize(size)}
              type="button"
              key={size}
            >
              {size}
            </button>
          ))}
        </div>
        {/* ColorSelect is a component where color selecting functionality are implemented */}
        <ColorSelect
          colors={colors}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <button
          onClick={() => addToCart(id)}
          className="bg-blue-500 px-4 py-1 text-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
