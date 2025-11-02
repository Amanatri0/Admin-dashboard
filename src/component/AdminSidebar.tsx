import React from "react";
import { IoIosPeople } from "react-icons/io";
import {
  RiBarChart2Fill,
  RiCoupon2Fill,
  // RiCoupon2Fill,
  RiDashboardFill,
  RiLineChartFill,
  RiMoneyRupeeCircleFill,
  RiPieChart2Fill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  const Dashboard = [
    {
      id: 1,
      url: "/admin/dashboard",
      icon: <RiDashboardFill />,
      text: "Dashboard",
    },
    {
      id: 2,
      url: "/admin/product",
      icon: <RiShoppingBag3Fill />,
      text: "Product",
    },
    {
      id: 3,
      url: "/admin/customer",
      icon: <IoIosPeople />,
      text: "Customer",
    },
    {
      id: 4,
      url: "/admin/transaction",
      icon: <RiMoneyRupeeCircleFill />,
      text: "Transaction",
    },
  ];

  const Charts = [
    {
      id: 1,
      url: "/admin/chart/bar",
      icon: <RiBarChart2Fill />,
      text: "Bar",
    },
    {
      id: 2,
      url: "/admin/chart/pie",
      icon: <RiPieChart2Fill />,
      text: "Pie",
    },
    {
      id: 3,
      url: "/admin/chart/line",
      icon: <RiLineChartFill />,
      text: "Line",
    },
  ];

  const Apps = [
    {
      id: 1,
      url: "/admin/app/cupon",
      icon: <RiCoupon2Fill />,
      text: "Cupon",
    },
  ];

  return (
    <aside>
      <h2>logo</h2>

      {/* Dashboard */}

      <div>
        <h5>Dashbord</h5>
        <ul>
          {Dashboard.map((item) => (
            <li
              style={{
                backgroundColor: location.pathname.includes(item.url)
                  ? "rgba(0,115, 255, 0.1)"
                  : "white",
              }}
              key={item.id}
            >
              <Link
                to={item.url}
                style={{
                  color: location.pathname.includes(item.url)
                    ? "rgba(0,115, 255)"
                    : "black",
                }}
              >
                {item.icon}
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Charts */}

      <div>
        <h5>Charts</h5>
        <ul>
          {Charts.map((item) => (
            <li
              style={{
                backgroundColor: location.pathname.includes(item.url)
                  ? "rgba(0,115, 255, 0.1)"
                  : "white",
              }}
              key={item.id}
            >
              <Link
                to={item.url}
                style={{
                  color: location.pathname.includes(item.url)
                    ? "rgba(0,115, 255)"
                    : "black",
                }}
              >
                {item.icon}
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* App */}

      <div>
        <h5>App</h5>
        <ul>
          {Apps.map((item) => (
            <li
              style={{
                backgroundColor: location.pathname.includes(item.url)
                  ? "rgba(0,115, 255, 0.1)"
                  : "white",
              }}
              key={item.id}
            >
              <Link
                to={item.url}
                style={{
                  color: location.pathname.includes(item.url)
                    ? "rgba(0,115, 255)"
                    : "black",
                }}
              >
                {item.icon}
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default AdminSidebar;
