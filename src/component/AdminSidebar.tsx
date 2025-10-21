import { BiCoin } from "react-icons/bi";
import { BsWatch } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import {
  RiBarChart2Fill,
  RiCoupon2Fill,
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
      url: "/admin/dashboard",
      icon: <RiDashboardFill />,
      text: "Dashboard",
    },
    {
      url: "/admin/product",
      icon: <RiShoppingBag3Fill />,
      text: "Product",
    },
    {
      url: "/admin/customer",
      icon: <IoIosPeople />,
      text: "Customer",
    },
    {
      url: "/admin/transaction",
      icon: <RiMoneyRupeeCircleFill />,
      text: "Transaction",
    },
  ];

  const Charts = [
    {
      url: "/admin/chart/bar",
      icon: <RiBarChart2Fill />,
      text: "Bar",
    },
    {
      url: "/admin/chart/pie",
      icon: <RiPieChart2Fill />,
      text: "Pie",
    },
    {
      url: "/admin/chart/line",
      icon: <RiLineChartFill />,
      text: "Line",
    },
  ];

  const Apps = [
    {
      url: "/admin/app/stopwatch",
      icon: <BsWatch />,
      text: "Stopwatch",
    },
    {
      url: "/admin/app/cupon",
      icon: <RiCoupon2Fill />,
      text: "Coupon",
    },
    {
      url: "/admin/app/toss",
      icon: <BiCoin />,
      text: "Toss",
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

      {/* Apps */}

      <div>
        <h5>Apps</h5>
        <ul>
          {Apps.map((item) => (
            <li
              style={{
                backgroundColor: location.pathname.includes(item.url)
                  ? "rgba(0,115, 255, 0.1)"
                  : "white",
              }}
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
