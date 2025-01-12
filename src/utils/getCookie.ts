import Cookies from "js-cookie";

const getCookie = (name: string) => {
  const cookie = Cookies.get(name);

  if (cookie) {
    const notSignedCookie = cookie
      .replace(/^s:/, "")
      .split(".")
      .filter((item) => item !== cookie.replace(/^s:/, "").split(".").pop());

    return decodeURIComponent(notSignedCookie.join("."));
  }
};
export default getCookie;