import { getCookie, setCookie } from "cookies-next";

import Login from "../pages/login";
import { useRouter } from "next/router";

export const Auth = ({ children }) => {
  const user = getCookie("user");
  console.log("user.........", user);

  const router = useRouter();

  async function handleAuth() {
    if (user) {
      await router.push(router.pathname);
    } else {
      await router.push("/login");
    }
  }

  //   useLayoutEffect(() => {
  //     handleAuth();
  //   }, []);

  return <div>{user ? <div>{children}</div> : <Login />}</div>;
};
