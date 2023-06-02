import { MENUTYPE } from "@/constants/menuList";
import { useAppSelector } from "@/store";
import { Typography,theme } from "antd";
import Link from "next/link";
import React from "react";

interface FooterMenuProps {
  target: "supportLink" | "quickLink";
}

export default function FooterMenu({ target }: FooterMenuProps) {
    const { token } = theme.useToken()
  const { supportMenuItems, quickLinksMenuItems } = useAppSelector(
    (state) => state.site.menus[MENUTYPE.FOOTER_MENU]
  );

  const renderMenu = () => {
    if (target === "supportLink") {
      return (
        <>
          <Typography.Title
            level={4}
            style={{ fontFamily: "Jost", color: "#fff" }}
          >
            SUPPORT
          </Typography.Title>
          <ul className="list-unstyled footer-sub-menu">
            {supportMenuItems?.map((i, indx) => {
              return (
                <li className="f-14">
                  <Link href={i.href} style={{ color: "GrayText" }}>
                    <Typography.Title
                      level={5}
                      style={{
                        textAlign: "justify",
                        fontFamily: "Jost",
                        color: "GrayText",
                        display: "inline",
                      }}
                    >
                      {i.label}
                    </Typography.Title>
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      );
    }
    return (
      <>
        <Typography.Title
          level={4}
          style={{ fontFamily: "Jost", color: "#fff" }}
        >
          QUICK LINKS
        </Typography.Title>
        <ul className="footer-sub-menu">
          {quickLinksMenuItems?.map((i, indx) => {
            return (
              <li className="f-14">
                <Link href={i.href} style={{ color: "GrayText" }}>
                  <Typography.Title
                    level={5}
                    style={{
                      textAlign: "justify",
                      fontFamily: "Jost",
                      color: "GrayText",
                      display: "inline",
                    }}
                  >
                    {i.label}
                  </Typography.Title>
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  return (
    <div>
      {renderMenu()}
      <style>{`
      .footer-sub-menu{
        list-style-type: none;
        padding-left:0px;
      }
        .footer-sub-menu li {
          margin: 14px 0 !important;
        }

        .footer-sub-menu li a {
          position: relative;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }

        .footer-sub-menu li a:after {
          content: "";
          background-color: ${token.colorPrimary};
          height: 1px;
          width: 0%;
          position: absolute;
          left: 0;
          bottom: -5px;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }

        .footer-sub-menu li a:hover {
          color: ${token.colorPrimary} !important;
          -webkit-transition: all 0.5s;import { Link } from 'next/link';
import { Link } from 'react-router-hash-link';
import FooterAlt from './footeralt';

          transition: all 0.5s;
        }

        .footer-sub-menu li a:hover:after {
          width: 100%;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }
      `}</style>
    </div>
  );
}
