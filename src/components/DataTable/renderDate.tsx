import { GridRenderCellParams } from "@mui/x-data-grid";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";

dayjs.extend(calendar); 

export default function RenderDate(props: GridRenderCellParams<any, any>) {
    const {value} = props;

    return dayjs(value).calendar(); 
    // return dayjs.calendar(dayjs(value));

    // return dayjs(value).format('DD/MM/YYYY HH:mm A');
}


