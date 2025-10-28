import { useCallback, useState, type ReactElement } from "react";
import AdminSidebar from "../component/AdminSidebar";
import type { ColumnDef } from "@tanstack/react-table";
import TableHOC from "../component/TableHOC";

interface Datatype {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: ColumnDef<Datatype>[] = [
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => row.original.avatar,
  },
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
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => row.original.email,
  },
];

const arr: Datatype[] = [];

const Customer = () => {
  const [data] = useState<Datatype[]>(arr);

  const Table = useCallback(() => {
    return (
      <TableHOC<Datatype>
        columns={columns}
        data={data}
        containerClassname="dashboardProductBox"
        heading="Customers"
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

export default Customer;
