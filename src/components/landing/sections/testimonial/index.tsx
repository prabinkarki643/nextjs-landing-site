import React from "react";
import {
  Typography,
  Avatar,
  Carousel,
  theme,
  Rate,
  Card,
} from "antd";
import { getFilePath } from "@/utils";
import { useAppSelector } from "@/store";
import { SECTIONBLOCK } from "@/constants/sectionsList";

export default function Testimonial() {
  const { token } = theme.useToken();
  const {testimonials,sectionsSettings} = useAppSelector(
    (state) => state.site
  );
  const testimonialSection = sectionsSettings?.[SECTIONBLOCK.TESTIMONIAL]

  if (!testimonialSection.display) {
    return null;
  }
  return (
    <React.Fragment>
      <div
        id={testimonialSection.htmlId||"testimonial"}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "50%",
          minHeight: "100vh",
          paddingTop: 64,
          paddingBottom: 70,
          backgroundColor: "#0b163f",
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
              level={4}
              style={{ fontFamily: "Jost", color: "#fff", marginBottom: 0 }}
            >
              {testimonialSection?.title}
            </Typography.Title>
            <Typography.Title
              style={{ fontFamily: "Jost", color: "#fff", textAlign: "center" }}
            >
              {testimonialSection?.heading}
            </Typography.Title>
            <Typography.Paragraph
              style={{
                fontFamily: "Jost",
                width: "60%",
                color: "#fff",
                textAlign: "center",
              }}
            >
              {testimonialSection?.description}
            </Typography.Paragraph>
          </div>
          <Carousel autoplay draggable>
            {testimonials.map((testimonial, key) => (
              <Card
                style={{ borderRadius: 20 }}
                className={[
                  "flex align-center justify-center shadow-md testimonial-bg",
                ].join(" ")}
                key={key}
              >
                <div className="testimonial">
                  <p className="message">{testimonial.message}</p>
                  <div></div>
                  <div className="image">
                    <Avatar
                      size={100}
                      className="mt-2 shadow-md"
                      style={{}}
                      src={getFilePath(testimonial?.avatar?.url)}
                    />
                  </div>
                  <Typography.Text className="name">
                    -- {testimonial.name} --
                  </Typography.Text>
                  <Typography.Paragraph className="designation">
                    {testimonial.designation}
                  </Typography.Paragraph>
                  <Rate value={5} />
                </div>
              </Card>
            ))}
          </Carousel>
        </div>
      </div>
      <style>{`
        .ant-carousel .slick-slide {
          padding: 50px 0px 50px 0px;
        }
        .testimonial-bg {
          background-color: transparent !important;
          color: white;
          min-height: 500px !important;
          border: 3px solid ${token.colorPrimary} !important;
          font-family: "Raleway", sans-serif;
          padding: 35px 70px;
          text-align: center;
          position: relative;
        }
        .testimonial-bg:before {
          content: "";
          font-family: "fontawesome";
          width: 60px;
          height: 60px;
          border: 3px solid ${token.colorPrimary};
          line-height: 60px;
          background: ${token.colorPrimary};
          text-align: center;
          font-size: 40px;
          color: white;
          position: absolute;
          top: -40px;
          left: 2%;
        }
        .testimonial {
          padding: 0 15px;
        }
        .testimonial .message {
          font-size: 20px;
          font-weight: 400;
          font-style: italic;
          color: white;
          line-height: 30px;
          padding-bottom: 25px;
          margin-bottom: 15px;
          position: relative;
        }
        .testimonial .message:before {
          content: "";
          width: 75%;
          border-top: 1px solid ${token.colorPrimary};
          margin: 0 auto;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }
        .testimonial .message:after {
          content: "";
          width: 20px;
          height: 20px;
          background: ${token.colorPrimary};
          position: absolute;
          bottom: -10px;
          left: 50%;
          border-bottom: 1px solid ${token.colorPrimary};
          border-right: 1px solid ${token.colorPrimary};
          transform: translateX(-50%) rotate(45deg);
        }
        .testimonial .name {
          font-size: 20px;
          font-weight: 700;
          color: white;
          text-transform: capitalize;
          margin: 0;
        }
        .testimonial .designation {
          font-size: 18px;
          color: white;
        }
      `}</style>
    </React.Fragment>
  );
}
