import React from "react";
import {
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableSortLabel,
  Box,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { HeadCell } from "../data/HeadCell"; // Assuming this is where the HeadCell interface resides
import { IStudentList } from "../data/IStudentList";

type Order = "asc" | "desc";

interface EnhancedTableProps {
  numSelected?: number;
  onRequestSort?: (event: React.MouseEvent<unknown>, property: keyof IStudentList) => void;
  onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: keyof IStudentList;
  rowCount: number;
  headCells: HeadCell[];
  showCheckbox?: boolean; // New prop to toggle checkbox visibility
}

export default function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected = 0,
    rowCount,
    onRequestSort,
    headCells,
    showCheckbox = false, // Default to true if not provided
  } = props;

  const createSortHandler =
    (property: keyof IStudentList) => (event: React.MouseEvent<unknown>) => {
      if (onRequestSort) {
        onRequestSort(event, property);
      }
    };

  return (
    <TableHead>
      <TableRow>
        {showCheckbox && (
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all items",
              }}
            />
          </TableCell>
        )}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id as string}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
