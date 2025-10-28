import type { ColumnDef } from "@tanstack/react-table";
import AdminSidebar from "../component/AdminSidebar";
import { useCallback, useState, type ReactElement } from "react";
import TableHOC from "../component/TableHOC";

interface Datatype {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: string;
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
    // cell: ({ row }) => row.original.action,
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => row.original.action,
  },
];

const arr: Datatype[] = [];

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
