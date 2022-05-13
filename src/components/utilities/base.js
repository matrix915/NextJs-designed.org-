import { toast } from "react-toastify";
import ToastComponent from "/src/components/toast";

export const isLoginVerify = (redirectIfLogin, redirectIfNotLogin) => {
    let isLogin = null;
    // for check component in server or client
    if (typeof window !== "undefined") {
         // for check token is available
        if (localStorage.getItem("token")) {
            // redirect to required path if user login
            if (redirectIfLogin) {
                location.pathname = redirectIfLogin
            }
            isLogin = "Yes"
        }
        else {
            // redirect to required path if Not user login
            if (redirectIfNotLogin) {
                location.pathname = redirectIfNotLogin
            }
            isLogin = "No"
        }
    }
    // Return "Yes" or "No" Login 
    return isLogin
}

export const MessageToast = (type, message) => { 
    if(type === "success"){
      toast.success(
          <ToastComponent
            title={message}
            color="success"
          />,
          {
            autoClose: 3000,
            hideProgressBar: true,
            closeButton: false,
            position: "bottom-center",
          }
        );
    }
    else if(type === "error"){
      toast.error(
          <ToastComponent
            title={message}
            color="error"
          />,
          {
            autoClose: 3000,
            hideProgressBar: true,
            closeButton: false,
            position: "bottom-center",
          }
        );
    }
  }