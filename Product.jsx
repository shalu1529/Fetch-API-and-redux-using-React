import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const url = "https://fakestoreapi.com/products";

function Product(props) {
  const dispatcher = useDispatch();
  const [product, setproduct] = useState([]);
  useEffect(() => {
    const fetchproduct = async () => {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setproduct(result);
    };
    fetchproduct();
  }, []);
  const addToCart = () => {
    dispatcher({
      type: "Add_to_cart",
      payload: { name: props.title, price: props.price },
    });
  };
  return (
    <div className="container">
      <h1 className='space-y-8'>Our Products</h1>
      <div className="row space-y-8 space-x-8 ">
        <div className="p-3 grid grid-cols-3 gap-3">
          {product &&
            product.map((item) => (
              <div className="w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-#d6d3d1 light:border-#d6d3d1 gap-0   transition-all duration-500 hover: hover:scale-125 overflow-hidden mt-custom">
                <img
                  className="w-full h-32 object-contain "
                  src={item.image}
                  alt={item.title}
                />
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black truncate pt-4 pb-4">
                  {item.title}
                </h5>
                <div className="inline flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-black">
                    ₹{item.price}
                  </span>

                  <button
                    onClick={addToCart}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Add to cart
                  </button>
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-left">
                  {item.category}
                </h5>

                <p className="font-normal text-gray-700 dark:text-gray-400 truncate gap-0">
                  {item.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Product;