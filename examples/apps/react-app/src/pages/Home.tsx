import React, { useState } from "react";
import { Card, Space, Typography, Button } from "@arco-design/web-react";
import "./Home.less";

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="home">
      <Card style={{ width: 600 }} title="React 子应用">
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Typography.Paragraph>
            这是一个 React 子应用，当前计数：{count}
          </Typography.Paragraph>
          <Space>
            <Button type="primary" onClick={() => setCount(count + 1)}>
              增加
            </Button>
            <Button status="danger" onClick={() => setCount(count - 1)}>
              减少
            </Button>
          </Space>
        </Space>
      </Card>
    </div>
  );
};

export default Home;