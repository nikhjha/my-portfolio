import Navbar from "@/components/navbar/navbar";
import { Outlet } from "react-router";

export default function BaseLayout() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}
