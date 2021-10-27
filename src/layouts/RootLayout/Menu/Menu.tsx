import React, { memo } from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";

const { SubMenu } = Menu;

function MenuPage(props: any) {
  const { handleClick } = props;
  return (
    <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
      <SubMenu key="employee" title="Сотрудники">
        <Menu.Item key="employee_all" onClick={handleClick}>
          Все сотрудники
        </Menu.Item>
        <Menu.Item key="add_employee">Добавить нового сотрудника</Menu.Item>
        {/* <Menu.Item key="3">option3</Menu.Item>
        <Menu.Item key="4">option4</Menu.Item> */}
      </SubMenu>
      <SubMenu key="location" title="Офисы">
        <Menu.Item key="location_all" onClick={handleClick}>
          Все офисы
        </Menu.Item>
        <Menu.Item key="add_location">Добавить новый офис</Menu.Item>
        {/* <Menu.Item key="7">option7</Menu.Item>
        <Menu.Item key="8">option8</Menu.Item> */}
      </SubMenu>
      {/* <SubMenu key="sub3" title="subnav 3">
        <Menu.Item key="9">option9</Menu.Item>
        <Menu.Item key="10">option10</Menu.Item>
        <Menu.Item key="11">option11</Menu.Item>
        <Menu.Item key="12">option12</Menu.Item>
      </SubMenu> */}
    </Menu>
  );
}

export default memo(MenuPage);
