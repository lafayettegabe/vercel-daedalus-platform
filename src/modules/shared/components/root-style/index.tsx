'use client';
import React, { PropsWithChildren, useState } from 'react';
import {
  CodeOutlined,
  PieChartOutlined,
  UserOutlined,
  RobotOutlined,
  EyeOutlined,
  AudioOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import Logo from '../Logo';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <PieChartOutlined />),
  getItem('Chat', '6', <WechatOutlined />),
  getItem('Chatbots', 'sub2', <RobotOutlined />, [
    getItem('Bots', '7'), 
    getItem('Templates', '8'),
    getItem('Integrations', '9'),
    getItem('Management', '10'),
  ]),
  getItem('Vision', 'sub3', <EyeOutlined />, [
    getItem('Face Detection', '11'),
    getItem('Image Labeling', '12'),
    getItem('Text Recognition', '13'),
    getItem('Live Tracking', '14'),
    getItem('Barcode Scanning', '15'),
  ]),
  getItem('Voice', 'sub4', <AudioOutlined />, [
    getItem('Speech Recognition', '16'),
    getItem('Voice Synthesis', '17'),
  ]),
  getItem('Developers', '18', <CodeOutlined />),
];

export const RootStyle = ({ children }: PropsWithChildren) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>([]); // Added state for open keys
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuOpenChange = (keys: React.Key[]) => {
    const latestOpenKey = keys.find((key) => !openKeys.includes(String(key)));
    if (latestOpenKey && String(latestOpenKey).includes('sub')) {
      setOpenKeys([String(latestOpenKey)]); // Update the open keys state with the latest open key
    } else {
      setOpenKeys([]); // Close all submenus if no valid submenu key is selected
    }
  };  

  return (
    <Layout style={{ minHeight: '100vh' }} hasSider>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <Link href="/">
          <Logo collapsed={collapsed} />
        </Link>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          openKeys={openKeys} // Pass the open keys state to the Menu component
          onOpenChange={handleMenuOpenChange} // Handle submenu open changes
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Daedalus</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Daedalus Institute ©2023</Footer>
      </Layout>
    </Layout>
  );
};

export default RootStyle;
