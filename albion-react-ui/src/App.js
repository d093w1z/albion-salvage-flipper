import React, { useState } from "react";
import { Layout, Button, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import SideBar from "./Components/SideBar";
import AppFooter from "./Components/AppFooter";
import PageContent from "./Components/PageContent";
import AppHeader from "./Components/AppHeader";
const { Sider, Content, Header } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="App">
      <BrowserRouter>
        <Layout hasSider>
          <Sider align trigger={null} collapsible collapsed={collapsed}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "10px",
                width: 50,
                height: 50,
                margin: "15px",
                color: "white",
              }}
            />
            <SideBar />
          </Sider>
          <Layout>
            <Header
              style={{ padding: 0, background: colorBgContainer, fontSize: 2 }}
            >
              <AppHeader />
            </Header>
            <Content>
              <PageContent />
            </Content>
            <AppFooter />
          </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
