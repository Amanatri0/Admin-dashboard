import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import { useState } from "react";

interface TableProps<T extends object> {
  columns: ColumnDef<T>[]; // columns definition
  data: T[]; // table data
  containerClassname?: string;
  heading?: string;
  showPagination?: boolean;
}

function TableHOC<T extends object>({
  columns,
  data,
  containerClassname = "",
  heading = "",
  showPagination = true,
}: TableProps<T>) {
  // State for sorting
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className={containerClassname}>
      {heading && <h2 className="heading">{heading}</h2>}

      <table className="table">
        {/* Table Header */}
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="sortToggle"
                >
                  {header.isPlaceholder ? null : (
                    <>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* Table Body */}
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {showPagination && (
        <div className="tablePagination">
          <button
            disabled={!table.getCanPreviousPage}
            onClick={table.previousPage}
          >
            Prev
          </button>

          <span>
            {`${
              table.getState().pagination.pageIndex + 1
            } of page  ${table.getPageCount()} `}{" "}
          </span>

          <button disabled={!table.getCanNextPage} onClick={table.nextPage}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default TableHOC;
