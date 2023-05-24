
import SideNavbar from "@/commons/SideNavbar";
import ImmersionBuy from "@/components/logged/immersionDashboard/ImmersionBuy";
import dynamic from "next/dynamic";

const DynamicNavbar = dynamic(()=>import("../../commons/SideNavbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

export default function Personal() {
    return (
      <div className="logged-hosting-component">
     
   
      <SideNavbar/>
      <ImmersionBuy/>
      
         </div>
      
    )
  }
  