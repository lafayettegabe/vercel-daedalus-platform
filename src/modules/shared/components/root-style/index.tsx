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
import { useRouter } from 'next/navigation';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number]

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
  getItem('Dashboard',            '/', <PieChartOutlined />),
  getItem('Chat',                 '/chat', <WechatOutlined />),
  getItem('Chatbots',             'sub1', <RobotOutlined />, [
    getItem('Bots',               '/chatbots/bots'),
    getItem('Templates',          '/chatbots/templates'),
    getItem('Integrations',       '/chatbots/integrations'),
    getItem('Management',         '/chatbots/management'),
  ]),
  getItem('Vision',               'sub2', <EyeOutlined />, [
    getItem('Face Detection',     '/vision/face-detection'),
    getItem('Image Labeling',     '/vision/image-labeling'),
    getItem('Text Recognition',   '/vision/text-recognition'),
    getItem('Live Tracking',      '/vision/live-tracking'),
    getItem('Barcode Scanning',   '/vision/barcode-scanning'),
  ]),
  getItem('Voice',                'sub3', <AudioOutlined />, [
    getItem('Speech Recognition', '/voice/speech-recognition'),
    getItem('Voice Synthesis',    '/voice/voice-synthesis'),
  ]),
  getItem('Developers',           '/developers', <CodeOutlined />),
];

export const RootStyle = ({ children }: PropsWithChildren) => {
  const router = useRouter()
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
       <div style={{ marginTop: 14, marginBottom: 14 }}>
          <Link href="/">
            <Logo collapsed={collapsed} />
          </Link>
        </div>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          openKeys={openKeys} // Pass the open keys state to the Menu component
          onOpenChange={handleMenuOpenChange} // Handle submenu open changes
          onClick={({ key }) => router.push(key as string)}
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
