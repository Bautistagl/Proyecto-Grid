
import MenuNavbar from "@/commons/MenuNavbar";
import HostingWeb from "@/components/cards/HostingWeb";
import dynamic from "next/dynamic";
const DynamicNavbar = dynamic(()=>import("../../commons/SideNavbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

export default function LoggedHosting() {
    return (
      <div className="logged-hosting-component">
      <DynamicNavbar/>
      <HostingWeb/>
      
      


      </div>
    )
  }