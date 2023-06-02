import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Form,
  Input,
  Avatar,
  Button,
  Space,
  theme,
  message,
} from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  HeatMapOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useAppSelector } from "@/store";
import commonHttpService from "@/services/https/apis/common.http.service";
import ReCaptcha,{isCaptchaVisible} from "@/components/common/recaptcha";
import { SECTIONBLOCK } from "@/constants/sectionsList";

const captchaId = "contactform_recaptcha"
export default function ContactUs() {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [submiting, setSubmitting] = useState(false);
  const {
    sectionsSettings,
    contactSettings,
  } = useAppSelector((state) => state.site);

  const contactUs = sectionsSettings[SECTIONBLOCK.CONTACTUS]

  if (!contactUs.display) {
    return null;
  }

  async function handleSubmit(values: any) {
    if (isCaptchaVisible(captchaId) && !values.recaptcha) {
      return message.error("Please verify that, you are not a robot");
    }
    delete values.recaptcha;
    setSubmitting(true);
    commonHttpService
      .submitContactForm(values)
      .then((res) => {
        form?.resetFields?.();
        setSubmitting(false);
        message.success(
          "Your message is submitted, We will get back to you soon"
        );
      })
      .catch((err) => {
        setSubmitting(false);
        message.error("Error submiting your message, Try again after sometime");
      });
  }
  return (
    <React.Fragment>
      <div
        id={contactUs.htmlId||"contact-us"}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "50%",
          minHeight: "70vh",
          paddingTop: 64,
          paddingBottom: 70,
          backgroundColor:'#fbfbfd'
        }}

      >
        <div className="container">
          <Row style={{ marginBottom: 40 }}>
            <Col>
              <Typography.Title
                level={2}
                style={{
                  marginBottom: 0,
                  textTransform: "uppercase",
                  fontFamily: "Jost",
                }}
              >
                {contactUs?.title || "Get In Touch"}
              </Typography.Title>
            </Col>
          </Row>

          <Card
            className="shadow-sm p-1 bg-white"
            bodyStyle={{ backgroundColor: "white", padding: 50 }}
          >
            <Row gutter={[40, 20]} wrap={true}>
              <Col xs={24} md={16}>
                <div>
                  <Form onFinish={handleSubmit} form={form}>
                    <Row gutter={[10, 10]}>
                      <Col xs={24} sm={12}>
                        <Form.Item
                          name="name"
                          rules={[{ required: true, message: "Required" }]}
                        >
                          <Input
                            placeholder="Name"
                            style={{ outline: "none" }}
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={12}>
                        <Form.Item
                          name="email"
                          rules={[{ required: true, message: "Required" }]}
                        >
                          <Input placeholder="Email" />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item
                      name="subject"
                      rules={[{ required: true, message: "Required" }]}
                    >
                      <Input placeholder="Subject" />
                    </Form.Item>

                    <Form.Item
                      name="message"
                      rules={[{ required: true, message: "Required" }]}
                    >
                      <Input.TextArea rows={4} placeholder="Message" />
                    </Form.Item>

                    <Form.Item
                      name="recaptcha"
                      rules={[{ required: true, message: "Required" }]}
                    >
                      <ReCaptcha
                        id={captchaId}
                        key={captchaId}
                      />
                    </Form.Item>

                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      loading={submiting}
                    >
                      SEND MESSAGE
                    </Button>
                  </Form>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <Space direction="vertical" size={20}>
                  <Space>
                    <Avatar
                      className="contact-icon"
                      size={25}
                      style={{ backgroundColor: token.colorPrimary }}
                      icon={<PhoneOutlined />}
                    />
                    <Typography.Text>
                      Call:{" "}
                      <Link href="#" className="text-muted">
                        {contactSettings.phoneNumber}
                      </Link>{" "}
                    </Typography.Text>
                  </Space>
                  <Space>
                    <Avatar
                      className="contact-icon"
                      size={25}
                      style={{ backgroundColor: token.colorPrimary }}
                      icon={<MailOutlined />}
                    />
                    <Typography.Text>
                      Email:{" "}
                      <Link href="#" className="text-muted">
                        {contactSettings.email}
                      </Link>{" "}
                    </Typography.Text>
                  </Space>
                  <Space>
                    <Avatar
                      className="contact-icon"
                      size={25}
                      style={{ backgroundColor: token.colorPrimary }}
                      icon={<HeatMapOutlined />}
                    />
                    <Typography.Text>
                      Location:{" "}
                      <Link href="#" className="text-muted">
                        {contactSettings.location}
                      </Link>{" "}
                    </Typography.Text>
                  </Space>
                  <div style={{ width: "100%" }}>
                    {contactSettings.embededMapSrcHref && (
                      <div className="contact-map mt-2">
                        <iframe
                          title="contact-map"
                          src={contactSettings.embededMapSrcHref}
                          width={"100%"}
                          height={100}
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    )}
                  </div>
                </Space>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
      <style>{`
        .contact-box .follow-icon li {
          margin: 0 3px !important;
        }

        .contact-box .follow-icon li a {
          background-color: transparent;
          height: 38px;
          width: 38px;
          display: block;
          line-height: 38px;
          text-align: center;
          border-radius: 50px;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }

        .contact-box .follow-icon li a:hover {
          background-color: #ff8700;
          color: #ffffff !important;
          height: 38px;
          width: 38px;
          position: relative;
          display: block;
          line-height: 38px;
          text-align: center;
          border-radius: 50px;
          -webkit-box-shadow: 0 0 0 6px rgba(255, 135, 0, 0.15);
          box-shadow: 0 0 0 6px rgba(255, 135, 0, 0.15);
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }

        .contact-box .contact-icon {
          border: 1px solid #bdbdbd;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }
      `}</style>
    </React.Fragment>
  );
}
