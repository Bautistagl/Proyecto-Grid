import { useEffect } from 'react';

import '@/styles/globals.css'
import "../styles/index/Index.css"
import "../styles/login/Login.css"
import "../styles/register/Register.css"
import "../styles/logged-home/LoggedHome.css"
import "../styles/logged-personal/LoggedPersonal.css"
import "../styles/logged-security/LoggedSecurity.css"
import "../styles/logged-shared/LoggedShared.css"
import "../styles/logged-hosting/LoggedHosting.css"
import "../styles/menuNavbarLogged.css"
import "../styles/landing-AsicHosting/landingAsic.css"
import "../styles/commons/CardFaqs.css"
import "../styles/commons/CardFaqs2.css"
import "../styles/buyProduct.css"
import "../styles/Billing/Billing.css"
import "../styles/aboutUs/aboutUs.css"
import "../styles/newApplication/newApplication.css"
import "../styles/deployBoxes/whatApp.css"
import "../styles/deployBoxes/nameBox.css"
import "../styles/deployBoxes/deployMethod.css"
import "../styles/deployBoxes/envVaribales.css"
import "../styles/deployBoxes/newServices.css"
import "../styles/projectsx/ProjectData.css"


export default function App({ Component, pageProps }) {
  useEffect(() => {
    var APP_ID = "dozzxftf";
    (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + APP_ID;var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
    window.Intercom('boot', {
      app_id: APP_ID,
     //Website visitor so may not have any user related info
   });
  }, []);

  return <Component {...pageProps} />
}
