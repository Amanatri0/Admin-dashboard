import type { ColumnDef } from "@tanstack/react-table";
import TableHOC from "./TableHOC";

interface DataType {
  id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: string;
}

const columns: ColumnDef<DataType>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "discount",
    header: "Discount",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

const DashboardTable = ({ data = [] }: { data: DataType[] }) => {
  return (
    <TableHOC<DataType>
      columns={columns}
      data={data} // you can replace [] with real data
      containerClassname="transactionBox"
      heading="Top Transaction"
    />
  );
};

export default DashboardTable;
