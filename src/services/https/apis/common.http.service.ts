import { AppWebRequest } from "../NetworkManager";

class CommonHttpService {
  submitContactForm(payload: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) {
    return AppWebRequest({
      method: "post",
      url: "/contact-forms",
      data: {
        data: payload,
      },
    });
  }

  submitProjectForm(payload:{inputData:any,submittedData:any,title?:string}) {
    return AppWebRequest({
      method: "post",
      url: "/project-forms",
      data: {
        data: payload,
      },
    });
  }

  createSubscribe(email: string) {
    return AppWebRequest({
      method: "post",
      url: "/subscribers",
      data: {
        data: { email },
      },
    });
  }
}

const commonHttpService = new CommonHttpService();
export default commonHttpService;
