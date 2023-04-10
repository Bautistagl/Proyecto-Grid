import Navbar from "@/commons/Navbar";
import SideNavbar from "@/commons/SideNavbar";
import InfoShared from "@/components/logged/sharedAccount/infoShared";

export default function SharedAccount() {
    return (
      <div className="container-Shared" >
      <div className="container-sideNavbar-infoShared">
      <SideNavbar/>
      <InfoShared/>
      
         </div>
      </div>
    )
  }
  