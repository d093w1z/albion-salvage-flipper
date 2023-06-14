import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  return (
    <div className="SideBar">
      <Menu
        theme="dark"
        mode="inline"
        className="SideBarMenu"
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
            label: "Dashboard",
            key: "/",
          },
          {
            label: "Deals",
            key: "/deals",
          },
          {
            label: "Orders",
            key: "/orders",
          },
        ]}
      />
    </div>
  );
}

export default SideBar;
