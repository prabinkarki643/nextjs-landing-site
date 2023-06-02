import { SECTIONBLOCK } from "@/constants/sectionsList"
import { useAppSelector } from "@/store"
import { Tabs, Typography, theme } from "antd"
import React from "react"
import TabContent from "./tabs/tabcontent"

export default function WhatWeBuild() {
  const { token } = theme.useToken()
  const whatWeBuild = useAppSelector((state) => state.site.sectionsSettings[SECTIONBLOCK.WHATWEBUILD])

  if (!whatWeBuild.display) {
    return null
  }

  const technologies: any[] = whatWeBuild?.technologies || []
  return (
    <React.Fragment>
      <div
        id={whatWeBuild.htmlId || "whatwebuild"}
        style={{
          backgroundColor: "#0b163f",
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
            <Typography.Title style={{ fontFamily: "Jost", color: "#fff", textAlign: "center" }}>
              {whatWeBuild?.heading ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: whatWeBuild?.heading,
                  }}
                ></span>
              ) : (
                <span>
                  We Build any Kind Of <br /> Technology
                </span>
              )}
            </Typography.Title>
            <Typography.Title
              level={3}
              style={{
                fontFamily: "Jost",
                color: "#d9d9d9",
                width: "50%",
                textAlign: "center",
              }}
              type="secondary"
            >
              {whatWeBuild?.description ||
                `Credibly grow premier ideas rather than bricks-and-clicks
              strategic theme areas distributed for stand-alone web-readiness.`}
            </Typography.Title>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Tabs
              centered
              items={technologies.map((tab, index) => {
                const id = String(index + 1)

                return {
                  label: (
                    <span
                      style={{
                        color: "#d9d9d9",
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                        {tab.mdIcon}
                      </span>
                      <span>{tab.title}</span>
                    </span>
                  ),
                  key: id,
                  children: (
                    <TabContent
                      imageUrl={tab?.contentImage}
                      title={tab?.contentTitle}
                      description={tab?.contentDescription}
                      keyPoints={tab?.contentKeyPoints?.split?.(",")}
                    />
                  ),
                }
              })}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
