import { Avatar, Col, Row, Space, theme, Typography } from "antd";
import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { useAppSelector } from "@/store";

export default function FooterAlt() {
  const { token } = theme.useToken();
  const { siteSettings,contactSettings } = useAppSelector((state) => state.site);
  const showCopyRightText = useAppSelector(
    (state) => state.site.footer.showCopyRightText
  );
  return (
    <React.Fragment>
      <section
        style={{
          backgroundColor: "transparent",
          paddingTop: 5,
          paddingBottom: 5,
        }}
      >
        <div>
          <Row gutter={[0, 0]} align="middle" justify="space-between">
            <Col>
              {showCopyRightText&&<Typography.Title
                level={4}
                style={{
                  color: "GrayText",
                  fontSize: 14,
                  fontWeight: "light",
                  marginBottom: 0,
                  fontFamily: "Jost",
                }}
              >
                {new Date().getFullYear()}{" "}
                {siteSettings?.copyrightText}
              </Typography.Title>}
            </Col>
            <Col>
              <Space>
                <a href={contactSettings?.socialLinks?.facebookLink||"#"} target="_blank">
                  <Avatar
                    className="socialIcon"
                    icon={<FacebookOutlined />}
                    size="small"
                  ></Avatar>
                </a>
                <a href={contactSettings?.socialLinks?.instagramLink||"#"} target="_blank">
                  <Avatar
                    className="socialIcon"
                    icon={<InstagramOutlined />}
                    size="small"
                  ></Avatar>
                </a>
                <a href={contactSettings?.socialLinks?.twitterLink||"#"} target="_blank">
                  <Avatar
                    className="socialIcon"
                    icon={<TwitterOutlined />}
                    size="small"
                  ></Avatar>
                </a>
              </Space>
            </Col>
          </Row>
        </div>
        <style>
          {`
          .socialIcon{
            background-color:transparent;
            border:1px solid ${token.colorPrimary};
          }

          .socialIcon:hover{
            background-color:${token.colorPrimary};
          }
          `}
        </style>
      </section>
    </React.Fragment>
  );
}
