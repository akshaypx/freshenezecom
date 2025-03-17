import { useContext } from "react";
import MyContext from "../../context/data/myContext";
import Brand from "../../assets/Brand.png";
import { Moon, ShoppingCart, SunMedium, UserRound } from "lucide-react";
import DropdownInput from "./DropdownInput";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("Not within a context");
  }

  if (context.mode) {
    console.log(context.mode);
  }
  return (
    <div
      className={cn(
        "w-full h-full p-6 px-10 flex items-center justify-between shadow-lg",
        context.mode === "light" ? " bg-white" : " bg-black"
      )}
    >
      <div>
        <img
          className={cn(
            "h-[50px] w-[177px]",
            context.mode === "light" ? " " : "  filter invert-100"
          )}
          src={Brand}
          alt=""
        />
      </div>
      <div>
        <DropdownInput />
      </div>
      <div className="flex items-center justify-between gap-10">
        <UserRound
          className={cn(
            "",
            context.mode === "light" ? "text-c1a" : "text-gray-400"
          )}
        />
        <ShoppingCart
          className={cn(
            "",
            context.mode === "light" ? "text-c1a" : "text-gray-400"
          )}
        />
        {context.mode === "light" ? (
          <Moon
            onClick={context.toggleMode}
            className="text-c1a bg-white border-none"
          />
        ) : (
          <SunMedium
            onClick={context.toggleMode}
            className="text-gray-400 bg-black  border-none"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
