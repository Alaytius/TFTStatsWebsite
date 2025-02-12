"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Augments = {
  name: string
  avg: number
  avg2_1: number
  avg3_2: number
  avg4_2: number
  games: number
}
//Top 4 Rate, Win Rate
export const columns: ColumnDef<Augments>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Augment Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "avg",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Average Placement
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "games",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Games Played
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "avg2_1",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          At 2-1
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "avg3_2",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          At 3-2
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "avg4_2",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          At 4-2
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
]
