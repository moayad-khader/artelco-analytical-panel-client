"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "components/ui/badge";
import { Checkbox } from "components/ui/checkbox";

import { Billboard } from "lib/schemas/billboard.schema";
import { DataTableColumnHeader } from "components/tables/data.table/columnHeader";
import { DataTableRowActions } from "components/tables/data.table/rowActions";
import { Icons } from "components/icons";

export const columns: ColumnDef<Billboard>[] = [
  {
    accessorKey: "billboard_title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("billboard_title")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "billboard_icon",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Billboard Icon" />
    ),
    cell: ({ row }) => {
      const BillboardIcon = Icons[row.getValue("billboard_icon") as string];

      return (
        <div className="flex w-[100px] items-center">
          <BillboardIcon />
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "db_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Database" />
    ),
    cell: ({ row }) => {
      return <div className="flex items-center">{row.getValue("db_name")}</div>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "table_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Table Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">{row.getValue("table_name")}</div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
