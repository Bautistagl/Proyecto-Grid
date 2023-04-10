import dynamic from "next/dynamic";
const DynamicNavbar = dynamic(()=>import("../../commons/Navbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

export default function LoggedDomain() {
    return (
      <div className="logged-home-component">
      <DynamicNavbar/>
      
      


      </div>
    )
  }