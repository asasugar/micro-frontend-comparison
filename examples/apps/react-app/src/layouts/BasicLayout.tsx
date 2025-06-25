import { Layout } from '@arco-design/web-react';
import { Outlet } from 'react-router-dom';
import './BasicLayout.less';

const { Header, Content, Footer } = Layout;

const BasicLayout = () => {
  return (
    <Layout className="layout">
      <Header>React 子应用</Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>React 子应用 ©2024</Footer>
    </Layout>
  );
};

export default BasicLayout;
