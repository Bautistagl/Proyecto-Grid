
import MenuNavbar from "@/commons/MenuNavbar";
import dynamic from "next/dynamic";
const DynamicNavbar = dynamic(()=>import("../../commons/Navbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

export default function LoggedHosting() {
    return (
      <div className="logged-home-component">
      <DynamicNavbar/>
      
      
      


      </div>
    )
  }