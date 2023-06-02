import React, { ReactElement } from "react";
import { Typography, Card, Badge, Button, Avatar, Space, theme } from "antd";

interface PricingCardItemProps {
    highlight?:boolean
}

export default function PricingCardItem({highlight}: PricingCardItemProps): ReactElement {
  const { token } = theme.useToken();
  return (
    <div className={[highlight?"scale-110":""].join(" ")}>
    <Badge.Ribbon
      style={{
        height: 40,
        minWidth: "50%",
        maxWidth: "80%",
        display: "flex",
        alignItems: "center",
        borderTopRightRadius: 40,
        marginTop: 10,
      }}
      text={
        <Typography.Title
          style={{
            color: "white",
            verticalAlign: "middle",
            marginBottom: 0,
          }}
          level={3}
        >
          BASIC
        </Typography.Title>
      }
      placement="start"
    >
      <Card
        hoverable
        style={{ width: 300, borderRadius: 20 }}
        className={[highlight?"shadow-lg":"shadow-md"].join(" ")}
      >
        <div className="flex flex-col" style={{ height: 450 }}>
          <div className="mt-[50px] mb-[10px] text-center flex-none">
            <Typography.Title level={3}>
              $4.99<Typography.Text>/Mon</Typography.Text>
            </Typography.Title>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
            className="px-5 xs:px-2 flex-1 overflow-auto"
          >
            <Space style={{ display: "flex", alignItems: "flex-start" }}>
              <Avatar
                style={{ backgroundColor: token.colorSuccess }}
                size={15}
                icon={
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 12 }}
                  >
                    done
                  </span>
                }
              />
              <div>
                <Typography.Text>5 GB bandwidth</Typography.Text>
              </div>
            </Space>
            <Space style={{ display: "flex", alignItems: "flex-start" }}>
              <Avatar
                style={{ backgroundColor: token.colorSuccess }}
                size={15}
                icon={
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 12 }}
                  >
                    done
                  </span>
                }
              />
              <div>
                <Typography.Text>5 GB bandwidth</Typography.Text>
              </div>
            </Space>
            <Space style={{ display: "flex", alignItems: "flex-start" }}>
              <Avatar
                style={{ backgroundColor: token.colorSuccess }}
                size={15}
                icon={
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 12 }}
                  >
                    done
                  </span>
                }
              />
              <div>
                <Typography.Text>5 GB bandwidth</Typography.Text>
              </div>
            </Space>
            <Space style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                style={{ backgroundColor: token.colorSuccess }}
                size={15}
                icon={
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 12 }}
                  >
                    done
                  </span>
                }
              />
              <div>
                <Typography.Text>5 GB bandwidth</Typography.Text>
              </div>
            </Space>
            <Space style={{ display: "flex", alignItems: "flex-start" }}>
              <Avatar
                style={{ backgroundColor: token.colorSuccess }}
                size={15}
                icon={
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 12 }}
                  >
                    done
                  </span>
                }
              />
              <div>
                <Typography.Text>
                  5 GB bandwidth
                </Typography.Text>
              </div>
            </Space>
            <Space style={{ display: "flex", alignItems: "flex-start" }}>
              <Avatar
                style={{ backgroundColor: token.colorSuccess }}
                size={15}
                icon={
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 12 }}
                  >
                    done
                  </span>
                }
              />
              <div>
                <Typography.Text>5 GB bandwidth</Typography.Text>
              </div>
            </Space>
          </div>
          <div className="mt-2 text-center flex-none">
            <Button className={[highlight?"scale-110":""].join(" ")} type="primary">BUY NOW</Button>
          </div>
        </div>
      </Card>
    </Badge.Ribbon>
    </div>
  );
}
