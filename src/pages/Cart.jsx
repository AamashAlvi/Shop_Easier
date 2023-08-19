import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div >
  {
    cart.length > 0  ? 
    (<div className="flex flex-row justify-evenly relative ">


      <div className="flex-flex-col w-[350px] p-2  space-y-10 space-x-5 min-h-[80vh] ">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col justify-between mt-[50px] gap-20 ">

        <div className="gap-10">
          <div className="uppercase text-green-700  text-3xl ">Your Cart</div>
          <div className="uppercase text-green-700 font-bold text-7xl ">Summary</div>
          <p className=" text-md font-semibold">Total Items: 
            <span className="text-red-900">   {cart.length}</span>
          </p>
        

        <div className="flex flex-col gap-20 mb-[200px]">
          <p className="">Total Amount: <span className="font-semibold">${totalAmount}</span></p>
         
          <button className=" gap-20 mr-[50px] p-[15px] text-black border-2 border-green-500  font-semibold bg-green-200 rounded-sm
          text-[12px]  px-3 uppercase 
          hover:bg-green-900
          hover:text-white transition duration-300 ease-in">
            CheckOut Now
          </button>
        </div>

        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col justify-center items-center mt-[200px] gap-20">
      <h1 className="text-black font-bold capitalize text-lg text-left truncate w-40 mt-1">Cart Empty</h1>
      <Link to={"/"}>

        <div>
        <button className=" mr-[50px] p-[15px] text-black border-2 border-green-500  font-semibold bg-green-200 rounded-sm
          text-[12px]  px-3  uppercase 
          hover:bg-green-900
          hover:text-white transition duration-300 ease-in">
          Shop Now
        </button>
        </div>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
