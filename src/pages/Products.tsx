import { useCallback, useState, type ReactElement } from "react";
import AdminSidebar from "../component/AdminSidebar";
import TableHOC from "../component/TableHOC";
import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface Datatype {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: ColumnDef<Datatype>[] = [
  {
    accessorKey: "photo",
    header: "Photo",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey: "action",
    header: "Action",
  },
];

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";

const arr: Datatype[] = [
  {
    photo: <img src={img} alt="elec" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 3,
    action: <Link to="/">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="image" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: <Link to="/">Manage</Link>,
  },
];

const Products = () => {
  const [data] = useState<Datatype[]>(arr);

  const Table = useCallback(() => {
    return (
      <TableHOC<Datatype>
        columns={columns}
        data={data}
        containerClassname="dashboardProductBox"
        heading="Products"
      />
    );
  }, []);
  return (
    <div className="adminContainer">
      {/* Sidebar */}
      <AdminSidebar />
      <main>{Table()}</main>
      <Link to={"/admin/product/new"} className="createProductButton">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
