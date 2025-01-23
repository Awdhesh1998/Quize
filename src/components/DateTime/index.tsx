import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import { DateTimeField } from '@mui/x-date-pickers';
import { FormHelperText, InputLabel } from '@mui/material';


interface InputTextProps {
  customClasses?: string;
  label: string;
  name:string;
  placeholder?:string;
  type?:string;
  value?:Dayjs | null;
  onChange?:any;
  error?:any;
  minRows?:number;
  multiline?:boolean;
  format?:string;
}

export default function DateTime({label, name, value, error, onChange, format="D/M/YYYY hh:mm A"}:InputTextProps) {
  let isError = error && error[name]?true:false;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer
        components={[
          'DateTimePicker',
          'MobileDateTimePicker',
          'DesktopDateTimePicker',
          'StaticDateTimePicker',
          'DateTimeField'
        ]}
      
        
      >
        <InputLabel>{label}</InputLabel>
        <DateTimeField  style={{marginTop:'auto'}} name={name} onChange={(event)=>onChange(event,name)} slotProps={{ textField: { size: 'small' } }} format={format} value={value}/>
        {isError?<FormHelperText  style={{marginTop:'auto'}}  error={isError}>{error[name]}</FormHelperText>:""}
      </DemoContainer>
    </LocalizationProvider>
  );
}
