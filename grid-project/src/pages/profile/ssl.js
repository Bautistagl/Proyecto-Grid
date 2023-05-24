import SideNavbar from "@/commons/SideNavbar";
import InfoShared from "@/components/logged/sharedAccount/infoShared";
import InfoPersonal from "@/components/logged/personal/InfoPersonal"
import dynamic from "next/dynamic";
const DynamicNavbar = dynamic(()=>import("../../commons/Navbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

export default function LoggedSSL() {
    return (
      <div className="logged-hosting-component">
      <SideNavbar/>
      <InfoPersonal/>
      
         </div>
      
    )
  }