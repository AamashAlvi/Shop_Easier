
import {AiTwotoneDelete} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex flex-col  border-b-2 border-black w-[450px]
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 ">

      <div className="flex flex-row gap-7">

        <div className="h-[180px]">
          <img src={item.image} className="h-full  " />
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
          
          <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          
          <div className="flex justify-between gap-12 items-center w-full mt-5">
             
          <p className="text-green-600 font-semibold"> $ <span> {item.price}</span></p>
            
            <div className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
               text-[12px] p-1 px-3 uppercase 
               hover:bg-gray-700
                hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}>
              <AiTwotoneDelete/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
