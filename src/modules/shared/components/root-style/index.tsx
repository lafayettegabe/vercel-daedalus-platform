'use client';
import React, { PropsWithChildren, useState } from 'react';
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  RobotOutlined,
  EyeOutlined,
  AudioOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Image from 'next/image';
import logo from 'src/Images/logo.png'
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
  getItem('Account', 'sub1', <UserOutlined />, [
    getItem('Profile', '3'),
    getItem('Payments', '4'),
    getItem('Settings', '5'),
  ]),
  getItem('Chatbots', 'sub2', <RobotOutlined />, [
    getItem('Bots', '6'), 
    getItem('Templates', '7')
  ]),
  getItem('Vision', 'sub3', <EyeOutlined />, [
    getItem('Face Detection', '8'),
    getItem('Image Labeling', '9'),
    getItem('Text Recognition', '10'),
    getItem('Live Tracking', '11'),
    getItem('Barcode Scanning', '12'),
  ]),
  getItem('Voice', 'sub4', <AudioOutlined />, [
    getItem('Speech Recognition', '13'),
    getItem('Voice Synthesis', '14'),
  ]),
];

export const RootStyle = ({ children }: PropsWithChildren) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>([]); // Added state for open keys
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuOpenChange = (keys: React.Key[]) => {
    const latestOpenKey = keys.find((key) => !openKeys.includes(key as string));
    if (latestOpenKey && latestOpenKey.includes('sub')) {
      setOpenKeys([latestOpenKey as string]); // Update the open keys state with the latest open key
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
