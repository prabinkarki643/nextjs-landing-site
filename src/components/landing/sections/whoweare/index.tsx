import React from "react";
import {
  Row,
  Col,
  Typography,
  Image,
  Button,
  Space,
  Avatar,
  theme,
} from "antd";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";
import { Parallax } from "react-scroll-parallax";
import { useAppSelector } from "@/store";
import { getFilePath } from "@/utils";
import { SECTIONBLOCK } from "@/constants/sectionsList";

export default function WhoWeAre() {
  const { token } = theme.useToken();
  const whoWeAre = useAppSelector(
    (state) => state.site.sectionsSettings[SECTIONBLOCK.WHOWEARE]
  );

  if (!whoWeAre.display) {
    return null;
  }
  return (
    <React.Fragment>
      <div
        id={whoWeAre.htmlId || "whoweare"}
        style={{
          backgroundColor: "#fff",
          paddingTop: 64,
          paddingBottom: 70,
        }}
      >
        <Parallax speed={10}>
          <Row
            style={{ minHeight: "80vh" }}
            justify="space-between"
            className="container"
          >
            <Col span={12} xs={24} md={12}>
              <Typography.Title
                level={4}
                style={{ color: token.colorPrimary, fontFamily: "Jost" }}
              >
                {whoWeAre?.title || "WHO WE ARE"}
              </Typography.Title>
              <Typography.Title style={{ fontSize: 50, fontFamily: "Jost" }}>
                {whoWeAre?.heading ||
                  "We specialize in UI/UX, web development, digital marketing."}
              </Typography.Title>
              <Typography.Text
                style={{ marginTop: 20, fontSize: 18, fontFamily: "Jost" }}
              >
                {whoWeAre?.description ||
                  `It is a long established fact that a reader will be distracted
                by the readable content`}
              </Typography.Text>
              <div>
                <Fade cascade triggerOnce>
                  {whoWeAre?.keyPoints
                    ?.split(",")
                    ?.map((point: string, index: number) => {
                      return (
                        <div style={{ marginTop: 10 }} key={index}>
                          <Space
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Avatar
                              style={{ backgroundColor: token.colorPrimary }}
                              size={25}
                              icon={
                                <span className="material-symbols-outlined">
                                  done
                                </span>
                              }
                            />
                            <div>
                              <Typography.Text
                                style={{
                                  marginBottom: "0em",
                                  fontSize: 18,
                                  fontWeight: 500,
                                }}
                              >
                                {point}
                              </Typography.Text>
                            </div>
                          </Space>
                        </div>
                      );
                    })}
                </Fade>
              </div>
              <div style={{ marginTop: 30 }}>
                <Button type="primary" size="large">
                  <Link
                    href={whoWeAre?.actionButton?.href || "/#about"}
                    style={{ fontFamily: "Jost" }}
                  >
                    {whoWeAre?.actionButton?.title || "Get In Touch"}
                  </Link>
                </Button>
              </div>
            </Col>
            <Col span={12} xs={24} md={12}>
              <Slide direction="right">
                <div style={{ position: "relative" }}>
                  <Image
                    src={
                      whoWeAre?.sectionImage}
                    width={"100%"}
                    preview={false}
                  />
                </div>
              </Slide>
            </Col>
          </Row>
        </Parallax>
      </div>
    </React.Fragment>
  );
}
