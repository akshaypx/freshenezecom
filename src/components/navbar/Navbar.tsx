import { useContext } from "react";
import MyContext from "../../context/data/myContext";
import Brand from "../../assets/Brand.png";
import { Moon, ShoppingCart, SunMedium, UserRound } from "lucide-react";
import DropdownInput from "./DropdownInput";
import { cn } from "@/lib/utils";
import { SidebarTrigger } from "../ui/sidebar";

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
        "w-full h-[10vh] p-6 px-10 flex items-center justify-between shadow-lg z-99",
        context.mode === "light" ? " bg-white" : " bg-black"
      )}
    >
      <div className="flex items-center justify-center gap-2">
        <SidebarTrigger />
        <img
          className={cn(
            "w-[100px] md:w-[177px]",
            context.mode === "light" ? " " : "  filter invert-100"
          )}
          src={Brand}
          alt=""
        />
      </div>
      <div className="hidden lg:flex">
        <DropdownInput />
      </div>
      <div className="flex items-center justify-between gap-2 md:gap-10">
        <UserRound
          size={18}
          className={cn(
            "",
            context.mode === "light" ? "text-c1a" : "text-gray-400"
          )}
        />
        <ShoppingCart
          size={18}
          className={cn(
            "",
            context.mode === "light" ? "text-c1a" : "text-gray-400"
          )}
        />
        {context.mode === "light" ? (
          <Moon
            size={18}
            onClick={context.toggleMode}
            className="text-c1a bg-white border-none"
          />
        ) : (
          <SunMedium
            size={18}
            onClick={context.toggleMode}
            className="text-gray-400 bg-black  border-none"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
