import React from "react";
import { Row, Col, Typography, Image, Card, theme } from "antd";
import { useAppSelector } from "@/store";
import { SECTIONBLOCK } from "@/constants/sectionsList";

// https://nicepage.com/we/519028/meet-our-big-team-wordpress-ecommerce
// http://demo.ovathemes.com/infetech/privacy-policy/
export default function OurTeam() {
  const {token} = theme.useToken()
  const {teamMembers,sectionsSettings} = useAppSelector(
    (state) => state.site
  );
  const ourTeamSection = sectionsSettings?.[SECTIONBLOCK.OURTEAM]

  if (!ourTeamSection.display) {
    return null;
  }

  return (
    <React.Fragment>
      <div
        id={ourTeamSection.htmlId||"our-team"}
        style={{
          backgroundColor: "#ffff",
          backgroundImage: `url("/images/pricing-bg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          minHeight: "70vh",
          paddingTop: 64,
          paddingBottom: 70,
        }}
        className="bg-gradient"
      >
        <div className="container">
          <Row style={{ marginBottom: 40 }}>
            <Col>
              <Typography.Title
                level={2}
                style={{
                  marginBottom: 0,
                  textTransform: "uppercase",
                }}
              >
                {ourTeamSection.heading}
              </Typography.Title>
              <Typography.Paragraph
              style={{
                fontFamily: "Jost",
                width: "60%",
                color: "#fff",
                textAlign: "center",
              }}
            >
              {ourTeamSection?.description}
            </Typography.Paragraph>
            </Col>
          </Row>

          <Row
            gutter={[10, 10]}
            justify="space-between"
            wrap={true}
          >
            {teamMembers.map((member, index) => {
              return (
                <Col key={index}>
                  <div>
                    <div>
                      <Image
                        width={300}
                        height={250}
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                          // border: "1px solid black",
                          borderRadius:10
                        }}
                        className="shadow-md"
                        preview={false}
                        src={member.imgUrl}
                      />

                      <div
                        style={{
                          width: 280,
                          minHeight: 200,
                          position: "relative",
                          left: 10,
                          right: 10,
                          top: -30,
                        }}
                      >
                        <Card
                          bodyStyle={{
                            textAlign: "center",
                            margin: 0,
                          }}
                          hoverable={true}
                          className="shadow-md"
                        >
                          <Typography.Text className="text-uppercase f-13 mb-2 text-muted">
                            {member.designation}
                          </Typography.Text>
                          <Typography.Title
                            level={5}
                            className="font-weight-normal f-18"
                          >
                            {member.name}
                          </Typography.Title>
                          <Typography.Paragraph className="text-muted f-14 text-ellipsis">
                            {member.message}
                          </Typography.Paragraph>
                          <div className="social-links">
                            <ul className="follow-icon mb-0 flex">
                              {member.facebookLink && (
                                <li className="inline-item f-15">
                                  <a
                                    href={member.facebookLink}
                                    className="social-icon text-muted"
                                  >
                                    <i className="fa fa-facebook"></i>
                                  </a>
                                </li>
                              )}
                              {member.twitterLink && (
                                <li className="inline-item f-15">
                                  <a
                                    href={member.twitterLink}
                                    className="social-icon text-muted"
                                  >
                                    <i className="fa fa-twitter"></i>
                                  </a>
                                </li>
                              )}
                              {member.instagramLink && (
                                <li className="inline-item f-15">
                                  <a
                                    href={member.instagramLink}
                                    className="social-icon text-muted"
                                  >
                                    <i className="fa fa-instagram"></i>
                                  </a>
                                </li>
                              )}

                              {member.portfolio && (
                                <li className="inline-item f-15">
                                  <a
                                    href={member.portfolio}
                                    className="social-icon text-muted"
                                  >
                                    <i className="fa fa-code"></i>
                                  </a>
                                </li>
                              )}
                            </ul>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <style>{`
        .social-links .follow-icon li {
          margin: 0 3px !important;
        }

        .social-links .follow-icon li a {
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

        .social-links .follow-icon li a:hover {
          background-color: ${token};
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
      `}</style>
    </React.Fragment>
  );
}
