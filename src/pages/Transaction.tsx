import type { ColumnDef } from "@tanstack/react-table";
import AdminSidebar from "../component/AdminSidebar";
import { useCallback, useState, type ReactElement } from "react";
import TableHOC from "../component/TableHOC";
import { Link } from "react-router-dom";

interface Datatype {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: ColumnDef<Datatype>[] = [
  {
    accessorKey: "user",
    header: "User",
    // cell: ({ row }) => row.original.avatar,
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "discount",
    header: "Discount",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => row.original.status,
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => row.original.action,
  },
];

const arr: Datatype[] = [
  {
    user: "Johon Doe",
    amount: 4500,
    discount: 200,
    quantity: 10,
    status: <span className="red">Processing</span>,
    action: <Link to={"/admin/transaction/abcde"}>Manage</Link>,
  },
  {
    user: "His friend",
    amount: 500,
    discount: 2000,
    quantity: 10,
    status: <span className="green">Delivered</span>,
    action: <Link to={"/admin/transaction/abcde"}>Manage</Link>,
  },
  {
    user: "Noman",
    amount: 450,
    discount: 100,
    quantity: 100,
    status: <span className="purple">Delayed</span>,
    action: <Link to={"/admin/transaction/abcde"}>Manage</Link>,
  },
  {
    user: "Coolie",
    amount: 45000,
    discount: 1110,
    quantity: 30,
    status: <span className="red">Processing</span>,
    action: <Link to={"/admin/transaction/abcde"}>Manage</Link>,
  },
];

const Transaction = () => {
  const [data] = useState<Datatype[]>(arr);

  const Table = useCallback(() => {
    return (
      <TableHOC<Datatype>
        columns={columns}
        data={data}
        containerClassname="dashboardProductBox"
        heading="Transactions"
        showPagination={true}
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

export default Transaction;
