import Login from "./login";
import { getCookie } from "cookies-next";

function MyApp({ Component, pageProps }) {
  const user = getCookie("user");
  return <div>{user ? <Component {...pageProps} /> : <Login />}</div>;
}

export default MyApp;
