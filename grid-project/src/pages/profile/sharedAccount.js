import Navbar from "@/commons/Navbar";
import SideNavbar from "@/commons/SideNavbar";
import SharedInfo from "@/components/logged/sharedAccount/SharedInfo";
import InfoShared from "@/components/logged/sharedAccount/infoShared";


export default function SharedAccount() {
    return (
      <div className="container-Shared" >
      <div className="container-sideNavbar-infoShared">
      <SideNavbar/>
      
      <SharedInfo/>
      
         </div>
      </div>
    )
  }
  