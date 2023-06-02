import apiUrl from "./apiUrl";
import axios, {AxiosRequestConfig } from "axios";
import qs from 'qs'
import { log } from '../../utils/app.debug';

export const appAxiosInstance = axios.create({
  baseURL: `${apiUrl.BASE_URL}/api`,
});

/**
 * Any request to server with proper error handeling and request interceptor to add token to every request
 * @param {AxiosRequestConfig} config
 * @returns {Promise<any>}
 */
export async function AppWebRequest(config: AxiosRequestConfig<any>) {
  config.paramsSerializer = {
    serialize: (params) => qs.stringify(params)
  }
  // var responseError = {};
  return appAxiosInstance(config)
      .then((response) => {
        return Promise.resolve(response.data);
      })
      .catch(error=>{
        var responseError = {};
        if (error.response) {
          // if (error.response.status === 401) {
          //   // case for refresh token
          //   toast.error("Your session is invalid. Please log in again");
          //   dispatch(logOutFromSystem);
          // }
          log("error response", error.response);
          responseError = {
            ...error.response?.data,
            ...getProperErrorMessageFromError(error.response?.data?.error),
            status: error.response.status,
            // headers: error.response.headers,
          };
        } else if (error.request) {
          responseError = {
            ...error,
            message: "Can not made connection to the server",
          };
        } else {
          responseError = {
            ...error,
            message: "Unexpected error occured!",
          };
        }
        log("exactual error", error);
        log("responseError", responseError);
        return Promise.reject(responseError);
      })
}


function getProperErrorMessageFromError(error: {
  message: string;
  details: object & { errors: any[] };
  name: string;
}) {
  const errorObj: {
    message: string;
    originalErrorDetails: object;
    errorData: any[];
  } = {
    message: "",
    originalErrorDetails: error.details,
    errorData: Array.isArray(error?.details?.errors)
      ? error?.details?.errors
      : [],
  };
  try {
    if (typeof error == "string") {
      errorObj.message = error;
    } else if (errorObj.errorData.length <= 1) {
      errorObj.message = error.message;
    } else if (errorObj.errorData.length > 1) {
      errorObj.message = `${error.message}, ${errorObj?.errorData
        .map((f) => f.message)
        .join(", ")}`;
    } else {
      errorObj.message =
        error.message || error.name || "Unexpected error occured";
    }
  } catch (er: any) {
    errorObj.message = er.message || "Unexpected error occured";
  }

  return errorObj;
}
