import React from 'react'
import {
  Row,
  Col,
  Typography,
  Image,
  Button,
} from 'antd'
import { Slide } from 'react-awesome-reveal'
import { Parallax } from 'react-scroll-parallax'
import Link from 'next/link';
import { useAppSelector } from '@/store';
import { SECTIONBLOCK } from '@/constants/sectionsList';

export default function CompanyVision() {
  const companyVision = useAppSelector(
    (state) => state.site.sectionsSettings[SECTIONBLOCK.COMPANYVISION]
  );

  if (!companyVision.display) {
    return null;
  }
  return (
    <React.Fragment>
      <div
        id={companyVision.htmlId||'companyvision'}
        style={{
          backgroundColor: '#FFDD0F',
          paddingTop: 64,
          paddingBottom: 70
        }}
      >
        <Parallax speed={10}>
          <Row
            style={{ minHeight: '80vh' }}
            justify='space-between'
            className='container'
          >
            <Col span={12} xs={24} md={12}>
              <Typography.Title level={4} style={{ fontFamily: 'Jost' }}>
              {companyVision?.title || "COMPANY'S VISION"}
              </Typography.Title>
              <Typography.Title style={{ fontSize: 50, fontFamily: 'Jost' }}>
              {companyVision?.heading || "The story behind how our company was founded"}
              </Typography.Title>
              <Typography.Text
                style={{ marginTop: 20, fontSize: 18, fontFamily: 'Jost' }}
              >
                {companyVision?.description ||
                  `Lorem ipsum dolor sit amet consectetur adipiscing elit eque
                  ipsum odio justo amet urna auctor. At congue vulputate augue
                  praesent mauris eu posuere pretium tellus. Viverra volutpat a
                  est quis egestas id risus cursus venenatis.`}

              </Typography.Text>
              <div style={{ marginTop: 30 }}>
                <Button
                  type='ghost'
                  size='large'
                  style={{ border: '1px solid' }}
                >
                  <Link  href={companyVision?.actionButton?.href || "/#about"} style={{ fontFamily: 'Jost' }}>
                  {companyVision?.actionButton?.title || "Read More Story"}
                  </Link>
                </Button>
              </div>
            </Col>
            <Col span={12} xs={24} md={12}>
              <Slide direction='right'>
                <div style={{ position: 'relative' }}>
                  <Image
                    src={companyVision?.sectionImage}
                    width={'100%'}
                    preview={false}
                  />
                </div>
              </Slide>
            </Col>
          </Row>
        </Parallax>
      </div>
    </React.Fragment>
  )
}
