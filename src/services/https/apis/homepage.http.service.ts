import { AppWebRequest } from "../NetworkManager";
import { AxiosRequestConfig } from 'axios';

class HomePageHttpService {
  fetchHomePageInitialData(config?: AxiosRequestConfig<any>) {
    const { params, ...axiosConfig } = config || {};
    const {sort,populate,...otherParams}=params||{}
    return AppWebRequest({
      method: "get",
      url:"/home-page/initialState",
      ...axiosConfig,
      params:{
        ...otherParams
      }
    });
  }
}

const homePageHttpService = new HomePageHttpService();
export default homePageHttpService;
