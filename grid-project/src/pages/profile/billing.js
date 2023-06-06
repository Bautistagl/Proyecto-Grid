


import BillingInfo from "@/components/billing/Billing";
import CardBusinessWeb from "@/components/cardHostingWeb/CardBusinessWeb";
import dynamic from "next/dynamic";
const DynamicNavbar = dynamic(()=>import("../../commons/SideNavbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

export default function Billing() {
    return (
      <div className="logged-hosting-component">
      <DynamicNavbar/>
      <BillingInfo/>
      
      
      
      


      </div>
    )
  }