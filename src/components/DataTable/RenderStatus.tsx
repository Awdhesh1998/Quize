import { Chip } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";

export default function RenderStatus(props: GridRenderCellParams<any, any>){
    const {value} = props;

    switch(value+"") {
        case '2':
            return <Chip size="small" label="Draft" color="warning"/>
            break;
        case '1':
            return <Chip size="small" label="Active" color="success"/>
            break;
        case '0':
            return <Chip size="small" label="Draft" color="warning"/>
            break;
    }

    return <Chip/>
}