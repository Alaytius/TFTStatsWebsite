"use client"
import * as React from "react"
import { Input } from "@/components/ui/input"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([{id: 'games', desc: true}])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,  
      columnFilters,
    },
  })

  return (
  <div>
    <div className="flex items-center py-4">
    <Input
      placeholder="Search augments..."
      value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
      onChange={(event) =>
        table.getColumn("name")?.setFilterValue(event.target.value)
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
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className={Array.isArray(cell.getValue() as [number, number]|string) ? ((cell.getValue() as [number, number])[1] < 25 ?  "text-gray-500" : '') : 'herl'}>
                  <TooltipProvider>
                  <Tooltip>
                  <TooltipTrigger>
                    {/* {flexRender(cell.column.columnDef.cell, cell.getContext())} */}
                    {/* {(cell.getValue() as string) ? flexRender(cell.column.columnDef.cell, cell.getContext()) : (cell.getValue() as [number, number])[0]} */}
                    {Array.isArray(cell.getValue() as [number, number]|string) ? (cell.getValue() as [number, number])[0] : flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TooltipTrigger>
                  <TooltipContent>
                    {Array.isArray(cell.getValue() as [number, number]|string) ? (cell.getValue() as [number, number])[1] + ' Games': flexRender(cell.column.columnDef.cell, cell.getContext())} 
                  </TooltipContent>
                  </Tooltip>
                  </TooltipProvider>
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
  </div>
  )
}
