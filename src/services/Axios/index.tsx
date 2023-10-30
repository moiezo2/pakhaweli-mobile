import Axios from 'axios';
import Config from "react-native-config";

const {BASE_URL} = Config;


const axiosApiInstance = Axios.create();

const excludedApis = [
    "register",
    "login",
    // "/send_otp/",
    // "/verify_otp/",
    // "/reset_password/",
    // "/token",
  ];


axiosApiInstance.interceptors.request.use(
    async (config : any) => {
      console.log("Config--->",Config)
    //   const { access, refresh } = reduxStore.getState().preserveReducer.Usertoken;
    //   const conectivity = reduxStore.getState().commonReducer.conectivity;
      if (!true) {
        // showMessage({
        //   message: "No Internet Connection",
        //   style: { backgroundColor: "#ff726f" },
        //   titleStyle: [interRegular,{color: "#E9F0FF", fontWeight: "600"}] ,
        // });
        return;
      }
      if (!excludedApis.some((api) => config.url.includes(api))) {
        // config.headers = {
        //   Authorization: `Bearer ${access}`,
        // };
      } else {
        config.headers = {
          "Content-Type": "application/json",
        };
      }
      config.baseURL = BASE_URL;
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

export default axiosApiInstance;
