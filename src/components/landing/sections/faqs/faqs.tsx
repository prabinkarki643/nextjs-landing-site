import React from 'react'
import { Typography, theme } from 'antd'
import { Collapse } from 'antd'
import { useAppSelector } from '@/store'
import { SECTIONBLOCK } from '@/constants/sectionsList'

const { Panel } = Collapse
export default function FAQS() {
  const { token } = theme.useToken()
  const {
    sectionsSettings,
    faqs = [],
  } = useAppSelector((state) => state.site);

  const faqsSection = sectionsSettings?.[SECTIONBLOCK.FAQS]

  if (!faqsSection.display) {
    return null;
  }
  return (
    <React.Fragment>
      <div
        id={faqsSection.htmlId||'faqs'}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: '50%',
          minHeight: '70vh',
          paddingTop: 64,
          paddingBottom: 70
        }}
        className='bg-gradient'
      >
        <div className='container'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Typography.Title
              style={{ fontFamily: 'Jost', textAlign: 'center' }}
            >
              {faqsSection?.heading || "Do you have any question ?"}
            </Typography.Title>
            <Typography.Paragraph
              style={{
                fontFamily: 'Jost',
                width: '60%',
                textAlign: 'center'
              }}
            >
              {faqsSection?.description||`Credibly grow premier ideas rather than bricks-and-clicks
              strategic theme areas distributed for stand-alone web-readiness.`}
            </Typography.Paragraph>
          </div>
          <Collapse
            expandIconPosition='right'
            defaultActiveKey={['1']}
            className='faqs-collapse'
          >
            {faqs.map((faq, index) => (
              <Panel
                header={
                  <Typography.Title
                    level={5}
                    className='faqs-header'
                    style={{ fontFamily: 'Jost' }}
                  >
                    {faq.question}
                  </Typography.Title>
                }
                key={index + 1}
                style={{ fontFamily: 'Jost' }}
              >
                {faq.answer}
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
      <style>{`
        .faqs-collapse .faqs-header {
          position: relative;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }

        .faqs-collapse .faqs-header:hover {
          color: ${token.colorPrimary} !important;
          -webkit-transition: all 0.5s;import { useAppSelector } from '@/store';

          transition: all 0.5s;
        }

        .faqs-collapse .faqs-header:hover:after {
          width: 100%;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }
      `}</style>
    </React.Fragment>
  )
}
