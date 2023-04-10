import '@/styles/globals.css'
import "../styles/index/Index.css"
import "../styles/login/Login.css"
import "../styles/register/Register.css"
import "../styles/logged-home/LoggedHome.css"
import "../styles/logged-personal/LoggedPersonal.css"
import "../styles/logged-security/LoggedSecurity.css"
import "../styles/logged-shared/LoggedShared.css"

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
