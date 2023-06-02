import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Badge,
  Button,
  Avatar,
  theme,
  Space,
  Radio,
} from "antd";
import { Parallax } from "react-scroll-parallax";
import { Bounce } from "react-awesome-reveal";
import PricingCardItem from "./components/pricingcarditem";

// Design: https://www.postermywall.com/index.php/art/template/9201305de0503713bad84560243b5ec6/modern-pricing-plan-mock-up-design-template
export default function Pricing() {
  const { token } = theme.useToken();
  const [planDecade, setPlanDecade] = useState("MONTHLY");
  const [planList] = useState([
    {
      name: "Basic",
      price: "19.00",
      bandwidth: "1GB",
      space: "100MB",
      support: "No",
      domain: "05",
      fees: "No",
      is_active: false,
    },
    {
      name: "Popular",
      price: "39.00",
      bandwidth: "1.5GB",
      space: "500MB",
      support: "Yes",
      domain: "10",
      fees: "No",
      is_active: true,
    },
    {
      name: "Advance",
      price: "80.00",
      bandwidth: "2GB",
      space: "1GB",
      support: "Yes",
      domain: "15",
      fees: "No",
      is_active: false,
    },
  ]);
  return (
    <React.Fragment>
      <div
        id="pricing"
        style={{
          backgroundColor: "#FFFF",
          backgroundImage: `url("/images/pricing-bg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: 70,
          paddingBottom: 70,
        }}
      >
        <Parallax speed={10}>
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
                {"Our Pricing & Plans"}
              </Typography.Title>
              <Typography.Paragraph
                style={{
                  fontFamily: "Jost",
                  width: "60%",
                  textAlign: "center",
                }}
              >
                {`Credibly grow premier ideas rather than bricks-and-clicks
              strategic theme areas distributed for stand-alone web-readiness.`}
              </Typography.Paragraph>
            </div>
            <div>
              <div style={{ textAlign: "center" }}>
                <Radio.Group
                  options={[
                    {
                      label: "MONTHLY",
                      value: "MONTHLY",
                    },
                    {
                      label: "YEARLY",
                      value: "YEARLY",
                    },
                  ]}
                  value={planDecade}
                  onChange={(e) => setPlanDecade(e.target.value)}
                  optionType="button"
                  buttonStyle="solid"
                  size="large"
                />
              </div>
              <Row justify="center" gutter={[30,30]} style={{ marginTop: 50,marginBottom: 50 }}>
                <Bounce cascade triggerOnce>
                  {[1, 2, 3].map((pri, index) => {
                    return (
                      <Col key={index}>
                        <PricingCardItem highlight={pri===2}/>
                      </Col>
                    );
                  })}
                  <Col></Col>
                </Bounce>
              </Row>
            </div>
          </div>
        </Parallax>
      </div>
    </React.Fragment>
  );
}
