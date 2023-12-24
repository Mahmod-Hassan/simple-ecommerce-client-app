import { useState } from "react";

const useGetRequest = (url) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const sendRequest = async (email) => {
    try {
      // setLoading(true);
      const res = await fetch(`http://localhost:4000/get-cart-items/${email}`);
      const data = await res.json();
      if (data.success) {
        setCartItems(data.data);
        setLoading(false);
      } else {
        setLoading(false);
        return;
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return { cartItems, loading, sendRequest };
};

export default useGetRequest;
