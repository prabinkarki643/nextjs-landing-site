import React from "react";
import {
  Row,
  Col,
  Typography,
  Image,
  Button,
  Card,
  Space,
  Avatar,
  theme,
} from "antd";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import Circle from "../../../common/circle";
import { Parallax } from "react-scroll-parallax";
import { useAppSelector } from "@/store";
import { MapToken } from "antd/es/theme/interface";

interface HomeProps {}

export default function Home({}: HomeProps) {
  const { token } = theme.useToken();
  const { homePageData } = useAppSelector((state) => state.site);
  return (
    <React.Fragment>
      <div
        id="home"
        style={{
          backgroundImage: `url("/images/home-bg-img.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: 64,
          paddingBottom: 70,
        }}
      >
        <Parallax speed={10}>
          <Row
            style={{ minHeight: "100vh", marginTop: 100 }}
            justify="space-between"
            className="container"
          >
            <Col span={12} xs={24} md={12}>
              <Typography.Title style={{ fontSize: 50, fontFamily: "Jost" }}>
                {homePageData?.heading || "Add Heading From Backend"}
              </Typography.Title>
              <Typography.Text
                style={{ marginTop: 20, fontSize: 18, fontFamily: "Jost" }}
              >
                {homePageData?.description || "Add Description From Backend"}
              </Typography.Text>
              <div style={{ marginTop: 30 }}>
                <Button type="primary" size="large">
                  <Link href={homePageData?.actionButton?.href||"#"}>{homePageData?.actionButton?.title || "Learn More"}</Link>
                </Button>
              </div>
            </Col>
            <Col span={12} xs={24} md={12}>
              <div style={{ position: "relative" }}>
                <Image
                  src="/images/banner_image.png"
                  width={"100%"}
                  preview={false}
                />
                <Circle
                  size={100}
                  fillColor="white"
                  style={{ position: "absolute", top: "30%", right: "3%" }}
                />
                <Circle
                  size={150}
                  fillColor={token.colorPrimary}
                  style={{ position: "absolute", bottom: "20%", left: "3%" }}
                />
              </div>
            </Col>
          </Row>
          <Row gutter={[20, 20]} justify="center">
            <Fade cascade triggerOnce>
              {
                (homePageData?.keyStrategy||[]).map((str:any,index:number)=>{
                  const color=str.iconBgColor
                  return(
                    <Col key={index}>
                    <Card style={{ width: 300 }} className="shadow-sm">
                      <Space size={15}>
                        <div>
                          <Avatar
                            style={{ backgroundColor: token[color as keyof MapToken].toString() }}
                            size={50}
                            icon={
                              <span className="material-symbols-outlined">
                                {str.mdIcon}
                              </span>
                            }
                          />
                        </div>
                        <div>
                          <Typography.Title
                            level={4}
                            style={{ fontFamily: "Jost" }}
                          >
                            {str.shortTitle}
                          </Typography.Title>
                          <Typography.Text style={{ fontFamily: "Jost" }}>
                            {str.description}
                          </Typography.Text>
                        </div>
                      </Space>
                    </Card>
                  </Col>
                  )
                })
              }
            </Fade>
          </Row>
        </Parallax>
      </div>
    </React.Fragment>
  );
}
