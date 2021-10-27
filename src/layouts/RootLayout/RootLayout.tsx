import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { MenuPage } from "./Menu";
import LocationPage from "../../pages/location/Location";
import EmployeePage from "pages/employee/Employee";

const { Header, Footer, Content, Sider } = Layout;

const RootLayout: React.FC = ({ children }) => {
  type componentsType = {
    [key: string]: any;
  };
  const components: componentsType = {
    location_all: <LocationPage />,
    employee_all: <EmployeePage />,
  };

  const [render, updateRender] = useState("location_all");

  const handleMenuClick = (menu: { key: React.SetStateAction<string> }) => {
    updateRender(menu.key);
  };
  return (
    <Layout>
      <Layout>
        <Header></Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <MenuPage handleClick={handleMenuClick} />
          </Sider>
          <Layout>
            <Content style={{ margin: "24px 16px 0" }}>
              {components[render]}
            </Content>
          </Layout>
        </Layout>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
};

export default RootLayout;
