import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../component/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import image from "../assets/profileimage.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../component/Charts";
import { BiMaleFemale } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main section */}
      <main className="dashboard">
        {/* Nav section */}

        <div className="bar">
          <BsSearch size={25} />
          <input type="text" placeholder="Search for data" />
          <FaRegBell size={25} />
          <img src={image} alt="" />
        </div>

        {/* Section 1 */}

        <section className="widgetContainer">
          <WidgetItem
            percent={40}
            amount={true}
            value={340000}
            heading="Revenue"
            color="rgb(0, 115, 255)"
          />
          <WidgetItem
            percent={-14}
            value={250}
            heading="Users"
            color="rgb(0, 198, 202)"
          />
          <WidgetItem
            percent={80}
            value={23000}
            heading="Transaction"
            color="rgb(255, 196, 0)"
          />
          <WidgetItem
            percent={30}
            value={1000}
            heading="Products"
            color="rgb(75, 0, 255)"
          />
        </section>

        {/* Section 2 */}

        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transaction</h2>
            {/* Graph Here */}
            <BarChart
              data_1={[300, 144, 433, 655, 237, 445, 190]}
              data_2={[200, 444, 556, 778, 455, 755, 990]}
              tittle_1="Revenue"
              tittle_2="Transactions"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgba(53,162,235,0.8)"
            />
          </div>
          <div className="dashboardCategories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((item) => (
                <CategoryItem
                  key={item.heading}
                  heading={item.heading}
                  value={item.value}
                  color={`hsl(${item.value * 4}, ${item.value}%, 50%)`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="transactionContainer">
          <div className="genderChart">
            <h2>Gender Ratio</h2>
            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%,56%)", "hsl(240, 90%,65%)"]}
              cutout={85}
              offset={[3, 1]}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>

          <div className="table">
            <h2>Transaction Table</h2>
          </div>
          {/* Transaction chart */}
        </section>
      </main>
    </div>
  );
};

interface WidgetProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: WidgetProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `₹${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> + {percent}%{""}{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%{""}{" "}
        </span>
      )}
    </div>

    {/* Circle */}

    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(${color} ${
          (Math.abs(percent) / 100) * 360
        }deg , rgba(255, 255, 255) 0 )`,
      }}
    >
      <span style={{ color }}>{percent}%</span>
    </div>
  </article>
);

interface CategoryProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryProps) => (
  <div className="categoryItem">
    <h5>{heading}</h5>
    <div>
      {/* change the value from percent to number for better count */}
      <div style={{ backgroundColor: color, width: `${value}%` }}></div>
    </div>

    <span>{value}</span>
  </div>
);

export default Dashboard;
