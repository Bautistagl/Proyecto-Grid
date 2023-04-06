import '@/styles/globals.css'
import "../styles/index/Index.css"
import "../styles/login/Login.css"
import "../styles/register/Register.css"
import "../styles/logged-home/LoggedHome.css"

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
