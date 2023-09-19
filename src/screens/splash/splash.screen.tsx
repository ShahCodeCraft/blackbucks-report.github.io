import Loader from "../../components/Loader/loader";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { login } from "../../apis/api";

const SplashScreen = () => {
  const navigate = useNavigate();
  console.log("splash");
  const silentLogin = async () => {
    let params = new URLSearchParams(window.location.search);
    const refId = params.get("refId");
    console.log("refId", refId);
    if (refId && refId !== null) {
      // Make Login api call here
      const user = localStorage.getItem(refId);
      if (user && user.length) {
        console.log("new");
        navigate(`/dashboard?refId=${refId}`);
        console.log("User found in local storage", typeof user, user);
        // setUserProfile(JSON.parse(user));
      } else {
        console.log("else");
        const payload: LoginReq = {
          id: refId,
        };
        try {
          const res = await login(payload);
          console.log("response", res);
          if (res?.status === 201) {
            localStorage.clear();
            localStorage.setItem(refId, JSON.stringify(res?.data));
            localStorage.setItem("token", res.data?.token);
            navigate(`/dashboard?refId=${refId}`);
          } else {
            window.open(process.env.REACT_APP_REDIRECT_URL,"_self");
            localStorage.clear();
          }
        } catch (error) {
          console.log("error", error);
        }
      }
    } else {
      window.open(process.env.REACT_APP_REDIRECT_URL, "_self");
      localStorage.clear();
    }
  };

  useEffect(() => {
    silentLogin();
  }, []);

  return <Loader />;
};

export default SplashScreen;
