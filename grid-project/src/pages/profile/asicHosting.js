import Index from "@/components/logged/asicHosting/Index";
import dynamic from "next/dynamic";
const DynamicNavbar = dynamic(()=>import("../../commons/SideNavbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

export default function AsicHosting() {
    return (
      <div className="logged-asicHosting-component">
      <DynamicNavbar/>
      <Index/>
      </div>
    )
  }