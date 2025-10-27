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
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => row.original.action,
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
    accessorKey: "photo",
    header: "Photo",
    cell: ({ row }) => row.original.photo,
  },
];

const img =
  "https://yamahamusicstore.in/products-images/enlarge-image/VDN7140.webp?v=1761410324";

const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";

const arr: Datatype[] = [
  {
    name: "Yamaha PAC112VM Ice Blue Electric Guitar",
    action: <Link to="/">Manage</Link>,
    price: 690,
    stock: 3,
    photo: <img src={img} alt="elec" />,
  },

  {
    name: "Seb laptop",
    action: <Link to="/">Manage</Link>,
    price: 1223,
    stock: 213,
    photo: <img src={img2} alt="image" />,
  },
  {
    name: "Yamaha PAC112VM Ice Blue Electric Guitar",
    action: <Link to="/">Manage</Link>,
    price: 690,
    stock: 3,
    photo: <img src={img} alt="elec" />,
  },

  {
    name: "Seb laptop",
    action: <Link to="/">Manage</Link>,
    price: 1223,
    stock: 213,
    photo: <img src={img2} alt="image" />,
  },
  {
    name: "Yamaha PAC112VM Ice Blue Electric Guitar",
    action: <Link to="/">Manage</Link>,
    price: 690,
    stock: 3,
    photo: <img src={img} alt="elec" />,
  },

  {
    name: "Seb laptop",
    action: <Link to="/">Manage</Link>,
    price: 1223,
    stock: 213,
    photo: <img src={img2} alt="image" />,
  },
  {
    name: "Yamaha PAC112VM Ice Blue Electric Guitar",
    action: <Link to="/">Manage</Link>,
    price: 690,
    stock: 3,
    photo: <img src={img} alt="elec" />,
  },

  {
    name: "Seb laptop",
    action: <Link to="/">Manage</Link>,
    price: 1223,
    stock: 213,
    photo: <img src={img2} alt="image" />,
  },
  {
    name: "Yamaha PAC112VM Ice Blue Electric Guitar",
    action: <Link to="/">Manage</Link>,
    price: 690,
    stock: 3,
    photo: <img src={img} alt="elec" />,
  },

  {
    name: "Seb laptop",
    action: <Link to="/">Manage</Link>,
    price: 1223,
    stock: 213,
    photo: <img src={img2} alt="image" />,
  },
  {
    name: "Yamaha PAC112VM Ice Blue Electric Guitar",
    action: <Link to="/">Manage</Link>,
    price: 690,
    stock: 3,
    photo: <img src={img} alt="elec" />,
  },

  {
    name: "Seb laptop",
    action: <Link to="/">Manage</Link>,
    price: 1223,
    stock: 213,
    photo: <img src={img2} alt="image" />,
  },
  {
    name: "Yamaha PAC112VM Ice Blue Electric Guitar",
    action: <Link to="/">Manage</Link>,
    price: 690,
    stock: 3,
    photo: <img src={img} alt="elec" />,
  },

  {
    name: "Seb laptop",
    action: <Link to="/">Manage</Link>,
    price: 1223,
    stock: 213,
    photo: <img src={img2} alt="image" />,
  },
  {
    name: "Yamaha PAC112VM Ice Blue Electric Guitar",
    action: <Link to="/">Manage</Link>,
    price: 690,
    stock: 3,
    photo: <img src={img} alt="elec" />,
  },

  {
    name: "Seb laptop",
    action: <Link to="/">Manage</Link>,
    price: 1223,
    stock: 213,
    photo: <img src={img2} alt="image" />,
  },
  {
    name: "Yamaha PAC112VM Ice Blue Electric Guitar",
    action: <Link to="/">Manage</Link>,
    price: 690,
    stock: 3,
    photo: <img src={img} alt="elec" />,
  },

  {
    name: "Seb laptop",
    action: <Link to="/">Manage</Link>,
    price: 1223,
    stock: 213,
    photo: <img src={img2} alt="image" />,
  },
  {
    name: "Yamaha PAC112VM Ice Blue Electric Guitar",
    action: <Link to="/">Manage</Link>,
    price: 690,
    stock: 3,
    photo: <img src={img} alt="elec" />,
  },

  {
    name: "Seb laptop",
    action: <Link to="/">Manage</Link>,
    price: 1223,
    stock: 213,
    photo: <img src={img2} alt="image" />,
  },
  {
    name: "Yamaha PAC112VM Ice Blue Electric Guitar",
    action: <Link to="/">Manage</Link>,
    price: 690,
    stock: 3,
    photo: <img src={img} alt="elec" />,
  },

  {
    name: "Seb laptop",
    action: <Link to="/">Manage</Link>,
    price: 1223,
    stock: 213,
    photo: <img src={img2} alt="image" />,
  },
  {
    name: "Yamaha PAC112VM Ice Blue Electric Guitar",
    action: <Link to="/">Manage</Link>,
    price: 690,
    stock: 3,
    photo: <img src={img} alt="elec" />,
  },

  {
    name: "Seb laptop",
    action: <Link to="/">Manage</Link>,
    price: 1223,
    stock: 213,
    photo: <img src={img2} alt="image" />,
  },
  {
    name: "Yamaha PAC112VM Ice Blue Electric Guitar",
    action: <Link to="/">Manage</Link>,
    price: 690,
    stock: 3,
    photo: <img src={img} alt="elec" />,
  },

  {
    name: "Seb laptop",
    action: <Link to="/">Manage</Link>,
    price: 1223,
    stock: 213,
    photo: <img src={img2} alt="image" />,
  },
  {
    name: "Yamaha PAC112VM Ice Blue Electric Guitar",
    action: <Link to="/">Manage</Link>,
    price: 690,
    stock: 3,
    photo: <img src={img} alt="elec" />,
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
