import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import CustomNoRowsOverlay from './CustomNoRowsOverlay';

interface DataTableProps {
    rows?:GridRowsProp;
    columns:GridColDef[];
    isLoading:boolean;
    rowCount:number;
}


export default function DataTable(props:DataTableProps){
   return <DataGrid
        rows={props.rows} 
        columns={props.columns}
        slots={{ noRowsOverlay: CustomNoRowsOverlay }}       
        rowCount={props.rowCount}
        
        sx={{ '--DataGrid-overlayHeight': '300px' }}
        loading={props.isLoading}
        initialState={{
            pagination:{
                paginationModel:{pageSize: 10, page:0}
            }
        }}
        pageSizeOptions={[10, 20, 50]}
        
    />
}