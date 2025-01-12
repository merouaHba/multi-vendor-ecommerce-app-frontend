import { Footer, Header } from "@/components/layout"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 md:pt-36 ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout