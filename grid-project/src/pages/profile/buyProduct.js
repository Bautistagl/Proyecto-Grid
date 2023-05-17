
import BuyProd from "@/components/BuyProd";
import Index from "@/components/Checkout/AsicHosting/Index";
import dynamic from "next/dynamic";
const DynamicNavbar = dynamic(()=>import("../../commons/SideNavbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

export default function BuyProduct() {
    return (
      <div className="logged-asicHosting-component">
      <DynamicNavbar/>
      <BuyProd/>
      
      


      </div>
    )
  }