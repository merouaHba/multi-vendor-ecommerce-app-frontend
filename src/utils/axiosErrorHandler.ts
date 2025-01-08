import { isAxiosError } from "axios";

const axiosErrorHandler = (error: unknown) => {
  if (isAxiosError(error)) {
    console.log(error)
    return (
      error.response?.data?.msg || error.response?.data?.message || error.response?.data || error.message
    );
  } else {
    return "An unexpected error";
  }
};

export default axiosErrorHandler;
