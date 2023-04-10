
import Home from "@/components/logged/homeLogged/Home";
import dynamic from "next/dynamic";
const DynamicNavbar = dynamic(()=>import("../../components/logged/homeLogged/Navbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

export default function LoggedLogin() {
    return (
      <div className="logged-home-component">
      <DynamicNavbar/>
      <Home/>
      


      </div>
    )
  }