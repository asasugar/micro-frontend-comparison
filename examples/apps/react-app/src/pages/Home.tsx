import React from 'react';
import { Typography, List } from '@arco-design/web-react';
import './Home.less';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Typography.Title>欢迎使用 React 子应用</Typography.Title>
      <Typography.Paragraph>
        这是一个基于 React 18 的微前端子应用，包含以下特性：
      </Typography.Paragraph>
      <List>
        <List.Item>React 18 + TypeScript</List.Item>
        <List.Item>Arco Design 组件库</List.Item>
        <List.Item>React Router 6 路由</List.Item>
        <List.Item>微前端框架支持</List.Item>
      </List>
    </div>
  );
};

export default Home;
