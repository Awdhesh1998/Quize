import { useEffect, useState } from "react";
import AuthLayout from "../../layout/AuthLayout";
import { useStudentListQuery } from "../../service/user/student";
import { Avatar, Box, Typography } from "@mui/material";
import { IStudentList } from "./data/IStudentList";
import { useAppSelector } from "../../lib/hooks";
import { studentListSelector } from "../../slice/studentSlice";
import { IRegisterResponse } from "../../response/student/RegisterResponse";
import { IPageResponse } from "../../response/page/PageResponse";
import RenderStatus from "../../components/DataTable/RenderStatus";
import TableGrid from "../../components/table/TableGrid";
import { IColumnDef } from "../../components/table/datatype/ColumnsDataType";
import { deepOrange } from "@mui/material/colors";
import { IOrderBy } from "../../components/table/datatype/IOrderBy";

const headCells: IColumnDef[] = [
  { field: "id", headerName: "#ID"},
  { field: "student.name", headerName: "Name", renderCell:(params) => {
      return<Box display="flex" alignItems="center" gap={2}>
      <Avatar alt={params.row.name} src={params.row.pic} sx={{ bgcolor: deepOrange[500] }}>
        {params.row.name.charAt(0)}
      </Avatar>
      <Typography variant="body1">{params.row.name}</Typography>
    </Box>; // Format date as a local date
    }  
  },
  { field: "reg_no", headerName: "Reg. No." },
  { field: "branch_code", headerName: "Branch Code" },
  { field: "status", headerName: "Status", renderCell: RenderStatus },
  { field: "created_at", headerName: "Created At", renderCell:(params) => {
      const date = new Date(params.value);
      return date.toLocaleDateString(); // Format date as a local date
    } 
  },
];

export default function Student() {
  const [rows, setRows] = useState<IStudentList[]>([]);
  const [pageDetail, setPageDetail] = useState<IPageResponse>({current_page:0,path:"",prev_page_url:"",next_page_url:"",per_page:10,to:0,total:0, last_page:0});
  const studentListProps = useAppSelector(studentListSelector);
  const [orderBy,setOrderBy] = useState<IOrderBy>({sort_by:'id', sort_order:'desc'});
  const [pages,setPages] =useState<{per_page:number,page:number,sort_by:string,sort_order:'asc'|'desc'}>({page:0,per_page:10, ...orderBy});
  const {  isLoading, refetch } = useStudentListQuery(pages);
  
  useEffect(() => {
    // Fetch data based on pageDetail
    refetch();
  }, [pages.page, pages.per_page,  pages.sort_by,pages.sort_order,refetch]);
  // Map student list data to rows when studentListProps changes
  useEffect(() => {
    if(studentListProps.studentList) {
        setRows(studentListProps.studentList.map((el: IRegisterResponse) => ({
          branch_code: el.branch_code,
          created_at: el.updated_at,
          id: el.id,
          name: el.student?.name || "N/A",
          reg_no: el.reg_no || "N/A",
          pic: el.student?.pic || "",
          status: el.status,
          unique_code: el.unique_code,
          })));
    }
    if(studentListProps.pageDetails) {
        setPageDetail(studentListProps.pageDetails)
        setOrderBy({sort_by:pages.sort_by, sort_order:pages.sort_order})
    }
  }, [studentListProps]);


  return (
    <AuthLayout>
        <TableGrid
          rows={rows}
          orderByDef={orderBy}
          keyID="unique_code"
          columns={headCells}
          isFetching={isLoading}
          onPageChange={(_event,page)=>{setPages({...pages,"page":page});}}
          currentPage={pageDetail.current_page}
          rowsPerPage={pageDetail.per_page}
          onRowsPerPageChange={(event)=>{
            let perPage = parseInt(event.target.value)||10;
            setPages({...pages,"per_page":perPage,"page":0});
          }}
          onSortHandler={(event:IOrderBy)=>setPages({...pages,"sort_by":event.sort_by, sort_order:(event.sort_order==='asc'?'desc':'asc')})}
          totalCount={pageDetail.total}
        />
    </AuthLayout>
  );
}
