import { Layout } from "antd";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const { Header } = Layout;
  return (
    <Layout className="mainLayout">
      <Header>
        <Navbar />
      </Header>

      {/* <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
  );
}

export default App;
