import Navbar from "@/components/logged/homeLogged/Navbar";
import SideNavbar from "@/commons/SideNavbar";
import InfoShared from "@/components/logged/sharedAccount/infoShared";

export default function SharedAccount() {
    return (
      <div className="container-Shared" >
      <Navbar/>
      <div className="container-sideNavbar-infoShared">
      <SideNavbar/>
      <InfoShared/>
      
         </div>
      </div>
    )
  }
  