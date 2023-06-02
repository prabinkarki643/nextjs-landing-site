import React, { useState, useEffect, CSSProperties, useMemo } from "react";
import { Menu, Dropdown, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { breakPointValuesUtils } from "../../../../theme/theme";
import { MediaQuery } from "../../../responsive";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store";
import { MENUTYPE } from "@/constants/menuList";

function HeaderMenu({ navStyle }: { navStyle?: CSSProperties }) {
  const [selectedNavKey, setSelectedNavKey] = useState(["/#home"]);
  const {menuItems,lastButtonConfig} = useAppSelector((state) => state.site.menus?.[MENUTYPE.HEADER_MENU]);

  const finalMenuItemsList = useMemo(() => {
    const menuItemsArr =  menuItems?.map((i, key) => {
      return {
        label: <Link href={i.href}>{i.label}</Link>,
        key: i.href,
      };
    });
    return menuItemsArr
  }, [menuItems]);
  const router = useRouter();
  useEffect(() => {
    const navKey = `${router.pathname}${router.pathname}`;
    setSelectedNavKey([navKey]);
  }, [router]);

  return (
    <React.Fragment>
      <MediaQuery query={breakPointValuesUtils.up("lg")}>
        <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
          <Menu
            mode="horizontal"
            selectedKeys={selectedNavKey}
            onSelect={({ key }) => {
              setSelectedNavKey([key]);
            }}
            items={finalMenuItemsList}
            style={{
              width: "100%",
              backgroundColor: "transparent",
              justifyContent: "flex-end",
              ...navStyle,
              border: "none",
            }}
          ></Menu>
         {lastButtonConfig?.show && <Button type="primary" size="large">
            <Link href={lastButtonConfig?.href}>{lastButtonConfig?.label}</Link>
          </Button>}
        </div>
      </MediaQuery>

      <MediaQuery query={breakPointValuesUtils.down("lg")}>
        <Dropdown
          overlay={
            <>
              <Menu
                onClick={({ key }) => {
                  setSelectedNavKey([key]);
                }}
                selectedKeys={selectedNavKey}
                items={[
                  ...finalMenuItemsList,
                 ...[lastButtonConfig?.show?{
                    label: (
                      <Button
                        type="primary"
                        style={{ fontSize: "Jost" }}
                        size="large"
                      >
                        <Link href={lastButtonConfig.href}>{lastButtonConfig.label}</Link>
                      </Button>
                    ),
                    key: lastButtonConfig.href,
                  }:null],
                ]}
              ></Menu>
            </>
          }
        >
          <div style={{}}>
            <Button type="text" icon={<MenuOutlined />}></Button>
          </div>
        </Dropdown>
      </MediaQuery>
    </React.Fragment>
  );
}

export default HeaderMenu;
