
import Home from "@/components/logged-login/Home";
import dynamic from "next/dynamic";
const DynamicNavbar = dynamic(()=>import("../../components/logged-login/Navbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

export default function LoggedLogin() {
    return (
      <>
      <DynamicNavbar/>
      <Home/>
      


      </>
    )
  }