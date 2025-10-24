import { useCallback, useState, type ReactElement } from "react";
import AdminSidebar from "../component/AdminSidebar";
import TableHOC from "../component/TableHOC";
import type { ColumnDef } from "@tanstack/react-table";

interface Datatype {
  photo: string;
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

const arr: Datatype[] = [];

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
    </div>
  );
};

export default Products;
