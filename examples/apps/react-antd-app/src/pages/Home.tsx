import React from 'react';
import { Typography, List } from 'antd';
import { Link } from 'react-router-dom';
import './Home.less';

const { Title, Paragraph } = Typography;
const Home: React.FC = () => {
  return (
    <div className="home">
      <Title>欢迎使用 React 子应用</Title>
      <Paragraph>这是一个基于 React 19 的微前端子应用，包含以下特性：</Paragraph>
      <List>
        <List.Item>React 19 + TypeScript</List.Item>
        <List.Item>Ant Design 组件库</List.Item>
        <List.Item>
          <Link to="/formily">Formily 表单库</Link>
        </List.Item>
        <List.Item>React Router 6 路由</List.Item>
        <List.Item>微前端框架支持</List.Item>
      </List>
    </div>
  );
};

export default Home;
