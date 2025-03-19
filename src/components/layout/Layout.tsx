import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <SidebarProvider>
      <div className="flex flex-col w-full h-screen">
        <Navbar />
        <div className="flex">
          <AppSidebar />
          {children}
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Layout;
