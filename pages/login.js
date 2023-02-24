import React, { useEffect } from "react";
import { setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";

const Login = () => {
  const user = getCookie("user");
  const router = useRouter();

  useEffect(() => {
    if (user && router.pathname === "/login") {
      router.push("/");
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setCookie("user", { data: "Data" });
          router.push("/");
        }}
      >
        Login Here
      </button>
    </div>
  );
};

export default Login;
