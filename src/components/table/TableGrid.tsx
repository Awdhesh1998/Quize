import { CircularProgress, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel } from "@mui/material";
import React from "react";
import { IColumnDef } from "./datatype/ColumnsDataType";
import TablePaginationActions from "./component/TablePaginationAction";
import { IOrderBy } from "./datatype/IOrderBy";

 
export default function TableGrid({isFetching, columns, rows, keyID, totalCount, currentPage, rowsPerPage, orderByDef, onPageChange, onRowsPerPageChange, onSortHandler}:{
    isFetching?:boolean;
    columns:Array<IColumnDef>;
    rows?:Array<any>;
    orderByDef: IOrderBy;
    keyID:string;
    totalCount:number;
    currentPage:number;
    rowsPerPage?:number;
    onPageChange:(event: React.MouseEvent<HTMLButtonElement> | null,page:number)=>void;
    onRowsPerPageChange:(event:React.ChangeEvent<HTMLInputElement>)=>void;
    onSortHandler:(event:IOrderBy)=>void;
}) {
    return (
            <TableContainer
                component={Paper}
                
            >
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((el:IColumnDef)=><TableCell key={el.field} align="center" component="th" sortDirection={orderByDef.sort_by == el.field? orderByDef.sort_order: false }><TableSortLabel  
                                active={orderByDef.sort_by === el.field}
                                direction={orderByDef.sort_by === el.field ? orderByDef.sort_order: 'asc'}
                                onClick={ ()=>onSortHandler({...orderByDef, sort_by:el.field})} 
                                > {el.headerName}</TableSortLabel></TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {isFetching &&<TableRow><TableCell colSpan={columns.length}><Stack alignItems="center" justifyContent="center" padding={2}><CircularProgress size={60}/></Stack></TableCell></TableRow>}
                        {(rows||[]).map((row:any)=><TableRow key={row[keyID]}>{columns.map((col:IColumnDef)=><TableCell  key={row[keyID]+"."+col.field+"."+row[col.field]}>{col.renderCell?col.renderCell({"value":row[col.field],"row":row}) :row[col.field]}</TableCell>)}</TableRow>
                        )}
                    </TableBody>
                    
                </Table>
                <Table>
                <TableFooter>
                            <TableRow>
                                <TablePagination
                                colSpan={columns.length }
                                count={totalCount}
                                page={currentPage}
                                onPageChange={onPageChange}
                                rowsPerPage={rowsPerPage||10}
                                onRowsPerPageChange={onRowsPerPageChange}
                                ActionsComponent={TablePaginationActions}
                                labelRowsPerPage="Rows per page:"
                                labelDisplayedRows={({ from, to, count }) =>
                                    `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`
                                }

                                />
                            </TableRow>                
                    </TableFooter>
                </Table>
            </TableContainer>
            );
}