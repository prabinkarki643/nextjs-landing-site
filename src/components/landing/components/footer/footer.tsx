import commonHttpService from '@/services/https/apis/common.http.service';
import { Row, Col, Typography, theme, Space, Form, Input, Button, message,Layout } from 'antd'
import Link from "next/link";
import { useState } from 'react';
import AppLogo from '../../../common/logo'
import FooterAlt from './footeralt';
import FooterMenu from '../menus/footer.menu';

function Footer() {
  const { token } = theme.useToken()
  const [form] = Form.useForm()
  const [submiting, setSubmitting] = useState(false);

  async function handleSubmitSubscriber(values: any) {
    setSubmitting(true);
    commonHttpService
      .createSubscribe(values?.email)
      .then((res) => {
        form.resetFields();
        setSubmitting(false);
        message.success("Thank you for subscribing");
      })
      .catch((err) => {
        setSubmitting(false);
        message.error(err?.message||"Error subscribing, Try again after sometime");
      });
  }

  return (
    <Layout.Footer style={{ backgroundColor: "#0b163f" }}>
    <div
      id='footer'
      style={{
        backgroundColor: 'transparent',
        backgroundImage: `url("/images/footer-bg.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        paddingTop: 40,
        paddingBottom: 30,
        position: 'relative',
        minHeight: 300
      }}
    >
      <div className='container'>
        <Row style={{ color: 'grey' }} gutter={[40, 20]}>
          <Col xs={24} lg={12} style={{}}>
            <AppLogo style={{ marginBottom: 10 }} whiteColorLogo />
            <Typography.Title
              level={5}
              style={{
                textAlign: 'justify',
                fontFamily: 'Jost',
                color: 'GrayText'
              }}
            >
              Our latest news, articles, and resources, we will sent to your
              inbox weekly.
            </Typography.Title>
            <Form
              form={form}
              onFinish={handleSubmitSubscriber}
            >
              <Space wrap>
                <Form.Item
                  name='email'
                  rules={[{ required: true, message: 'Required' }]}
                  style={{ width: 250 }}
                >
                  <Input
                    type='email'
                    size='large'
                    placeholder='Enter your email'
                  />
                </Form.Item>
                <Form.Item>
                  <Button type='primary' htmlType='submit' size='large' loading={submiting}>
                    SUBSCRIBE
                  </Button>
                </Form.Item>
              </Space>
            </Form>
          </Col>
          <Col xs={24} lg={6}>
            <FooterMenu target='supportLink'/>
          </Col>

          <Col xs={24} lg={6}>
          <FooterMenu target='quickLink'/>
          </Col>
        </Row>
      </div>
    </div>
    <div>
      <FooterAlt/>
    </div>
    </Layout.Footer>
  )
}

export default Footer
