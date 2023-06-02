import React from "react";
import { Typography, Image, Col, Row, Card } from "antd";
import styles from "./styles.module.css";
import {Bounce } from "react-awesome-reveal";
import { useAppSelector } from "@/store";
import { SECTIONBLOCK } from "@/constants/sectionsList";

export default function Services() {
  const {
    sectionsSettings,
    services = [],
  } = useAppSelector((state) => state.site);

  const servicesWeProvide = sectionsSettings[SECTIONBLOCK.SERVICESWEPROVIDE]

  if (!servicesWeProvide.display) {
    return null;
  }
  return (
    <React.Fragment>
      <div
        id={servicesWeProvide.htmlId||"ourservices"}
        style={{
          backgroundColor: "#fff",
          paddingTop: 64,
          paddingBottom: 70,
          minHeight: "80vh",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography.Title
              style={{ fontFamily: "Jost", textAlign: "center" }}
            >
              {servicesWeProvide?.heading || "Services We Provide"}
            </Typography.Title>
            <Typography.Paragraph
              style={{
                fontFamily: "Jost",
                width: "60%",
                textAlign: "center",
              }}
            >
              {servicesWeProvide?.description ||
                `Credibly grow premier ideas rather than bricks-and-clicks
              strategic theme areas distributed for stand-alone web-readiness.`}
            </Typography.Paragraph>
          </div>

          <Row justify="center">
            <Bounce cascade triggerOnce>
              {services.map((service, index) => {
                return (
                  <Col key={index}>
                    <Card
                      bodyStyle={{ textAlign: "center" }}
                      className={styles.card}
                    >
                      <div style={{ textAlign: "center", marginBottom: 20 }}>
                        <Image
                          src={service?.image}
                          alt={service.title||"service"}
                          preview={false}
                          width="80px"
                        />
                      </div>
                      <Typography.Title level={4}>
                        {service.title}
                      </Typography.Title>
                      <Typography.Paragraph>
                        {service.shortDescription}
                      </Typography.Paragraph>
                    </Card>
                  </Col>
                );
              })}
            </Bounce>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
}
