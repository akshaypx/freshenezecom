import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import MyContext from "@/context/data/myContext";
import { cn } from "@/lib/utils";
import { ChevronDown, Search } from "lucide-react";
import { useContext } from "react";

const DropdownInput = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("Not within a context");
  }

  return (
    <div
      className={cn(
        "flex px-4 py-1 border-ring  ring-[1px] rounded-xl items-center justify-start gap-2  w-[450px]",
        context.mode === "light"
          ? "bg-c1h ring-c1d"
          : "bg-gray-800 ring-gray-700"
      )}
    >
      <DropdownMenu>
        <DropdownMenuTrigger className="w-[250px] flex items-center justify-center gap-1">
          <p
            className={cn(
              context.mode === "light"
                ? "font-bold"
                : "text-gray-300 font-semibold"
            )}
          >
            All categories
          </p>
          <ChevronDown
            size={16}
            className="text-c2a font-bold"
            strokeWidth={3}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={cn(
            context.mode === "light" ? "" : "text-white bg-gray-800 border-none"
          )}
        >
          <DropdownMenuItem
            className={cn(context.mode === "light" ? "" : "hover:bg-gray-600")}
          >
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <p
        className={cn(
          "w-[2px] h-[20px]",
          context.mode === "light" ? "bg-c1d" : "bg-gray-700"
        )}
      ></p>
      <Input
        className={cn(
          "border-none shadow-none",
          context.mode === "light" ? "" : "text-white"
        )}
        placeholder="Search Products, categories..."
      />
      <Search
        size={32}
        className={cn(
          "",
          context.mode === "light" ? "text-c1a" : "text-gray-600"
        )}
      />
    </div>
  );
};

export default DropdownInput;
