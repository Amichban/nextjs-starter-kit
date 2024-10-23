"use client";

import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  ColumnFiltersState,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react"

interface DataGovernanceEntry {
  department: string
  dataQuality: string
  accessibility: string
  documentation: string
  compliance: string
  organizationAndRoles: string
  processesAndTooling: string
  maturityLevel: string
  date: string
}

const data: DataGovernanceEntry[] = [
  {
    department: "Legal",
    dataQuality: "Expert",
    accessibility: "Expert",
    documentation: "Expert",
    compliance: "Expert",
    organizationAndRoles: "Expert",
    processesAndTooling: "Expert",
    maturityLevel: "Expert",
    date: "2023-09-15",
  },
  {
    department: "Marketing",
    dataQuality: "Basic",
    accessibility: "Basic",
    documentation: "Basic",
    compliance: "Basic",
    organizationAndRoles: "Basic",
    processesAndTooling: "Basic",
    maturityLevel: "Basic",
    date: "2023-09-10",
  },
  {
    department: "R&D",
    dataQuality: "Transformative",
    accessibility: "Transformative",
    documentation: "Transformative",
    compliance: "Transformative",
    organizationAndRoles: "Transformative",
    processesAndTooling: "Transformative",
    maturityLevel: "Transformative",
    date: "2023-08-20",
  },
  {
    department: "APAC",
    dataQuality: "Awareness",
    accessibility: "Awareness",
    documentation: "Awareness",
    compliance: "Awareness",
    organizationAndRoles: "Awareness",
    processesAndTooling: "Awareness",
    maturityLevel: "Awareness",
    date: "2023-09-05",
  },
]

export default function DataGovernanceTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])

  const columns: ColumnDef<DataGovernanceEntry>[] = [
    {
      accessorKey: "department",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Department
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "dataQuality",
      header: "Data Quality",
    },
    {
      accessorKey: "accessibility",
      header: "Accessibility",
    },
    {
      accessorKey: "documentation",
      header: "Documentation",
    },
    {
      accessorKey: "compliance",
      header: "Compliance",
    },
    {
      accessorKey: "organizationAndRoles",
      header: "Organization and Roles",
    },
    {
      accessorKey: "processesAndTooling",
      header: "Processes and Tooling",
    },
    {
      accessorKey: "maturityLevel",
      header: "Maturity Level",
    },
    {
      accessorKey: "date",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter organizations..."
          value={(table.getColumn("organization")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("organization")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
