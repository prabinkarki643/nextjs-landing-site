import React from "react";
import {
  Row,
  Col,
  Typography,
  Image,
  Button,
  Card,
  Space,
  theme,
} from "antd";
// import Pulse from "react-reveal/Pulse";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import { Parallax } from "react-scroll-parallax";
import { useAppSelector } from "@/store";
import CountUp from "react-countup";
import { SECTIONBLOCK } from "@/constants/sectionsList";

export default function Insight() {
  const { token } = theme.useToken();
  const insight = useAppSelector(
    (state) => state.site.sectionsSettings[SECTIONBLOCK.INSIGHT]
  );

  if (!insight.display) {
    return null;
  }

  const dataSource: any[] = insight?.dataSource || [];
  return (
    <React.Fragment>
      <div
        id={insight.htmlId||"companyvision"}
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
              <Slide direction="left">
                <div style={{ position: "relative" }}>
                  <Image
                    src={
                      insight?.sectionImage}
                    width={"100%"}
                    preview={false}
                  />
                </div>
              </Slide>
            </Col>
            <Col span={12} xs={24} md={12}>
              <Typography.Title
                level={4}
                style={{ fontFamily: "Jost", color: token.colorPrimary }}
              >
                {insight?.title || "INSIGHT"}
              </Typography.Title>
              <Typography.Title style={{ fontSize: 50, fontFamily: "Jost" }}>
                {insight?.heading || "Insight that drives change"}
              </Typography.Title>
              <Typography.Text
                style={{ marginTop: 20, fontSize: 18, fontFamily: "Jost" }}
              >
                {insight?.description ||
                  `It is a long established fact that a reader will be distracted
                  by the readable content`}
              </Typography.Text>
              <div>
                <Space wrap size={50}>
                  {dataSource.map((d, i) => (
                    <Card
                      bodyStyle={{ padding: 10, minWidth: 180 }}
                      className="shadow-sm"
                      key={i}
                    >
                      <Space
                        size={0}
                        direction="vertical"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography.Title
                          style={{ fontFamily: "Jost" }}
                          level={2}
                        >
                          <CountUp end={d.count}/>
                          <span
                            style={{
                              color: token.colorPrimary,
                              fontWeight: "bold",
                              marginTop: 0,
                            }}
                          >
                            {d.suffix}
                          </span>
                        </Typography.Title>
                        <Typography.Title
                          style={{ fontFamily: "Jost", marginTop: 0 }}
                          level={5}
                        >
                          {d.title}
                        </Typography.Title>
                      </Space>
                    </Card>
                  ))}
                  {/* <Card bodyStyle={{ padding: 10 }} className="shadow-sm">
                    <Space size={0} direction="vertical" align="center">
                      <Typography.Title
                        style={{ fontFamily: "Jost" }}
                        level={2}
                      >
                        98
                        <span
                          style={{
                            color: token.colorPrimary,
                            fontWeight: "bold",
                          }}
                        >
                          %
                        </span>
                      </Typography.Title>
                      <Typography.Title
                        style={{ fontFamily: "Jost" }}
                        level={5}
                      >
                        Private Office
                      </Typography.Title>
                    </Space>
                  </Card>
                  <Card bodyStyle={{ padding: 10 }} className="shadow-sm">
                    <Space size={0} direction="vertical" align="center">
                      <Typography.Title
                        style={{ fontFamily: "Jost" }}
                        level={2}
                      >
                        20M
                        <span
                          style={{
                            color: token.colorPrimary,
                            fontWeight: "bold",
                          }}
                        >
                          +
                        </span>
                      </Typography.Title>
                      <Typography.Title
                        style={{ fontFamily: "Jost" }}
                        level={5}
                      >
                        Coworking Desks
                      </Typography.Title>
                    </Space>
                  </Card>
                  <Card bodyStyle={{ padding: 10 }} className="shadow-sm">
                    <Space size={0} direction="vertical" align="center">
                      <Typography.Title
                        style={{ fontFamily: "Jost" }}
                        level={2}
                      >
                        100K
                        <span
                          style={{
                            color: token.colorPrimary,
                            fontWeight: "bold",
                          }}
                        >
                          +
                        </span>
                      </Typography.Title>
                      <Typography.Title
                        style={{ fontFamily: "Jost" }}
                        level={5}
                      >
                        Meeting Rooms
                      </Typography.Title>
                    </Space>
                  </Card>
                  <Card bodyStyle={{ padding: 10 }} className="shadow-sm">
                    <Space size={0} direction="vertical" align="center">
                      <Typography.Title
                        style={{ fontFamily: "Jost" }}
                        level={2}
                      >
                        55
                        <span
                          style={{
                            color: token.colorPrimary,
                            fontWeight: "bold",
                          }}
                        >
                          %
                        </span>
                      </Typography.Title>
                      <Typography.Title
                        style={{ fontFamily: "Jost" }}
                        level={5}
                      >
                        Meeting Rooms
                      </Typography.Title>
                    </Space>
                  </Card> */}
                </Space>
              </div>
              <div style={{ marginTop: 30 }}>
                <Button
                  type="ghost"
                  size="large"
                  style={{ border: "1px solid" }}
                >
                  <Link href="#ourservices" style={{ fontFamily: "Jost" }}>
                    See Our Services
                  </Link>
                </Button>
              </div>
            </Col>
          </Row>
        </Parallax>
      </div>
    </React.Fragment>
  );
}
