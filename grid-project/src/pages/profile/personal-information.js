import Navbar from "@/components/logged/homeLogged/Navbar";
import InfoPersonal from "@/components/logged/personal/InfoPersonal";
import SideNavbar from "@/commons/SideNavbar";

export default function Personal() {
    return (
      <div className="container-personal" >
      <Navbar/>
      <div className="container-sideNavbar-infoPersonal">
      <SideNavbar/>
      <InfoPersonal/>
      
         </div>
      </div>
    )
  }
  