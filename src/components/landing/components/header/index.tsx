import React from 'react'
import { Layout, Row, Col } from "antd";
import Link from 'next/link';
import AppLogo from '@/components/common/logo';
import HeaderMenu from '../menus/header.menu';

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <Layout.Header
    style={{
      position: "fixed",
      zIndex: 1,
      width: "100%",
      backgroundColor: "#fff",
      // boxShadow:'rgba(0, 0, 0, 0.2) 0px 25px 20px -20px'
    }}
  >
    <Row className="container">
      <Col style={{display:'flex',alignItems:'center'}}>
        <Link href="#home" style={{display:'flex',alignItems:'center'}}>
          <AppLogo />
        </Link>
      </Col>
      <Col
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <HeaderMenu />
      </Col>
    </Row>
  </Layout.Header>
  )
}