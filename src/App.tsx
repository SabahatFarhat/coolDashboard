import { Button, Card, Col, ColorPicker, Descriptions, Divider, Form, Input, Layout, Menu, Row, Space, Steps, Table, Tag, TimePicker, Typography, type DescriptionsProps } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import "./styles/dashboard.css";
import {HiOutlineHome} from "react-icons/hi";
import {GrOrganization} from "react-icons/gr";
import {BsPerson} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { LoadingOutlined, ProfileOutlined, SmileOutlined, SolutionOutlined, UserOutlined  } from "@ant-design/icons";
import { useState } from "react";
//import { Anchor } from 'antd';
import { faker } from '@faker-js/faker';
import ButtonGroup from "antd/es/button/button-group";
import dayjs from "dayjs";
import { ConfigProvider } from 'antd';
import ThreeScene from './components/ThreeScene'; 


const generateData = () => {
  const dat = [];

  for (let i = 0; i < 34; i++) {
    dat.push({
      id : i,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      status: Math.random() > 0.5 ? true : false,
    });
    }
    return dat;
  }

  //const [modalOpen, setModalOpen] = useState(false);
  const items: DescriptionsProps['items']  = [
  {
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    label: 'Billing',
    children: 'Prepaid',
  },
  {
    label: 'Time',
    children: '18:00:00',
  },
  {
    label: 'Amount',
    children: '$80.00',
  },
  {
    label: 'Discount',
    span: { xl: 2, xxl: 2 },
    children: '$20.00',
  },
  {
    label: 'Official',
    span: { xl: 2, xxl: 2 },
    children: '$60.00',
  },
  {
    label: 'Config Info',
    span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    children: (
      <>
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
      </>
    ),
  },
  {
    label: 'Hardware Info',
    span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    children: (
      <>
        CPU: 6 Core 3.5 GHz
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
      </>
    ),
  },
];

const data = generateData();

function App() {
const [collapsed, setCollapsed] = useState(false);

  return (
    <ConfigProvider componentSize="small">
    <Layout className = "container ">
      <Header
      color = "white"
      style={{
        backgroundColor: "white",
      }}
      > 
      <div style={{display: "flex", alignItems: "center"}}>
        <GiHamburgerMenu 
        onClick ={() => setCollapsed(!collapsed)}
        style={{fontSize: "1.3rem", 
        marginRight: "1rem"}} />
      
      <div className = "brand" > Cool - Dashboard </div>
      </div>
        </Header>
      <Layout > 
        <Sider collapsed={collapsed} theme="light">
          <Menu
          mode="inline"
          items={[
            {
              label: "Home",
              key: "home",
              icon: <HiOutlineHome />,
              children: [
                {
                  label:"Add profile",
                  key: "add-profile",
                  icon: <ProfileOutlined /> 
              },
              {
                label:"All users ",
                key: "all-users",
                icon: <BsPerson />,
              }
              ],

            },
            {
              label: "About Us",
              key: "about-us",
              icon: <GrOrganization />,
            }
          ]}
          />
        </Sider>
        <Content className="content">
          <Space direction ="horizontal">
          
          <Card style={{ width: '100%' }}>
            {/* <Space direction ="horizontal">
            <AiOutlineMoneyCollect />
            <small> Total Sales </small>
           </Space>
          <Typography.Title level={3}> $ 100,000 </Typography.Title> */}
          
          <ThreeScene />
          </Card> 
            {/* <Card>
            <Space direction ="horizontal">
            <AiOutlineMoneyCollect />
            <small> Total Sales </small>
           </Space>
          <Typography.Title level={3}> $ 100,000 </Typography.Title>
          </Card> 
            <Card>
            <Space direction ="horizontal">
            <AiOutlineMoneyCollect />
            <small> Total Sales </small>
           </Space>
          <Typography.Title level={3}> $ 100,000 </Typography.Title>
          </Card>     */}
          </Space>

          <Divider/>


          {/* <Row gutter={[16, 16]}>
            <Col span={6}>
              <Card>
                <Typography.Title level={4}>User Statistics</Typography.Title>
                
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Typography.Title level={4}>Sales Overview</Typography.Title>
                
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Anchor
    affix={false}
    items={[
      {
        key: '1',
        href: '#anchor-demo-basic',
        title: 'Basic demo',
      },
      {
        key: '2',
        href: '#anchor-demo-static',
        title: 'Static demo',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link Props',
          },
        ],
      },
    ]}
  />
                
              </Card>
            </Col>
          </Row> */}
        

  <Card>
         {/* <Button
          type="primary"
          onClick={() => openNotification('topRight')}
          icon={<RadiusUprightOutlined />}
        >
          topRight
        </Button> */}
    {/* <Button
      danger
      type="primary"
      onClick={() =>
        Modal.confirm({
          title: 'Are you sure you want to delete this item?',
          content: 'This action cannot be undone.',
          // onOk: () => {
          //   console.log('Item deleted');
          // },
        })
      }
    >
      Delete 
    </Button> */}
    <Descriptions
      title="Responsive Descriptions"
      bordered
      column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
      items={items}
    />
  </Card>
  <Card>
    <Form 
    onFinish ={(values) => {
      console.log("Form Submitted", values);
    }
  } 

       layout ="vertical">
      <Form.Item label="Username" name="username">
        <Input placeholder="Enter your username" />
      </Form.Item>
      <Form.Item label="Email" name="Email">
        <Input placeholder="Enter your email" />
      </Form.Item>  
      <Form.Item label="Message" name="message">
        <Input placeholder="Enter your message" />
      </Form.Item>
      <Form.Item>
        <TimePicker
        defaultValue = {dayjs().hour(0).minute(0)} 
        format="HH:mm"
        style={{width: "100%"}}
        />
      </Form.Item>
      <Form.Item >
        <ColorPicker 
        style={{width: "100%"}}
        />  
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      
      
    </Form>
  </Card>          
  
  <Card>
            <Steps
    items={[
      {
        title: 'Login',
        description: 'Please login to your account',
        status: 'finish',
        icon: <UserOutlined />,
      },
      {
        title: 'Verification',
        description: 'Verify your email address',
        status: 'finish',
        icon: <SolutionOutlined />,
      },
  
      {
        title: 'Pay',
        description: 'Pay for your order',
        status: 'process',
        icon: <LoadingOutlined />,
      },
      {
        title: 'Done',
        description: 'You are all set',
        status: 'wait',
        icon: <SmileOutlined />,
      },
    ]}
  />
          </Card>

          <Row gutter={16} style={{marginTop: 16, height: 300}}>
            <Col span ={10}>
              <Table 
              style = {{height: 300}}
              dataSource = {data} 
              rowKey="id"
              columns={[
                {
                  title: 'ID',
                  dataIndex: 'id',
                  key: 'id',
                  fixed: true
                },
                {
                  title: 'Name',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: 'Email',
                  dataIndex: 'email',
                  key: 'email',
                },
                {
                  title: 'Status',
                  dataIndex: 'status',
                  key: 'status',
                  render: (val)=>
                    val ? <Tag>Active </Tag>: <Tag color="red">Inactive</Tag>,
                },
                {
                  title: 'Action',
                  key: 'action',
                  render :()=>
                    <Space.Compact>
                      <Button type="primary">Edit</Button>
                      <Button type="default" danger>Delete</Button>
                    </Space.Compact>
                }
              ]}
              />
            </Col>
          </Row>

          
        </Content>
      </Layout>
    </Layout>
    </ConfigProvider>
  );
}

export default App