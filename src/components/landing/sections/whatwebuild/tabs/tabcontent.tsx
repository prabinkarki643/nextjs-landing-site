import { Row, Col, Image, Typography, Space, theme } from "antd";
import { Slide } from "react-awesome-reveal";
import { Parallax } from "react-scroll-parallax";

type TabContentProps = {
  imageUrl: string;
  title: string;
  description: string;
  keyPoints: Array<string>;
};

export default function TabContent({
  imageUrl,
  title,
  description,
  keyPoints,
}: TabContentProps) {
  const { token } = theme.useToken();
  return (
    <Row
      gutter={[10, 10]}
      align="middle"
      justify="space-between"
      className="container"
    >
      <Col xs={24} md={12}>
        <Slide direction="left">
          <Parallax scale={[1, 0.8, "easeInQuad"]}>
            <div style={{ position: "relative" }}>
              <Image src={imageUrl} width={"80%"} preview={false} />
            </div>
          </Parallax>
        </Slide>
      </Col>
      <Col xs={24} md={12}>
        <Slide direction="right">
          <Typography.Title style={{ fontFamily: "Jost", color: "#fff" }}>
            {title}
          </Typography.Title>
          <Typography.Title
            level={5}
            style={{
              fontFamily: "Jost",
              color: "#d9d9d9",
            }}
          >
            {description}
          </Typography.Title>
          <div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              {keyPoints?.map((p, i) => (
                <Space key={i}>
                  <span
                    className="material-symbols-outlined"
                    style={{ color: token.colorPrimary }}
                  >
                    done
                  </span>
                  <Typography.Title
                    level={5}
                    style={{
                      fontFamily: "Jost",
                      color: "#d9d9d9",
                      marginTop:0
                    }}
                  >
                    {p}
                  </Typography.Title>
                </Space>
              ))}
            </div>
          </div>
        </Slide>
      </Col>
    </Row>
  );
}

TabContent.defaultProps = {
  imageUrl: "/images/general/tab_img2.png",
  title: "Automation Power",
  description: `Continually network effective bandwidth whereas goal-oriented
  schemas. Intrinsicly incentivize corporate synergy with accurate
  task bricks-and-clicks leadership skills.`,
  keyPoints: ["Digital Conferance", "Great Speak", "Event Mangement"],
};
