import { FormGroup, FormHelperText, InputLabel,  MenuItem, Select} from '@mui/material';

type KeyType ={
    key:string,
    value:string
}

interface InputTextProps {
    customClasses?: string;
    label: string;
    name:string;
    placeholder?:string;
    value?:string| number;
    onChange?:any;
    options:Array<any>;
    key?:KeyType;   
    error?:any; 
    isDisabled?:boolean; 
  }

const InputSelect: React.FC<InputTextProps>  = ({label, name, value, onChange, options, error, isDisabled, })=>{
    let isError = error && error[name]?true:false;
    return (<FormGroup>
        <InputLabel>{label}</InputLabel>
        <Select value={value?value:""} name={name} error={isError} onChange={onChange?onChange:()=>{}} fullWidth size="small" disabled={isDisabled || false}>
            {options.map(el=><MenuItem key={el.value} value={el.value}>{el.label}</MenuItem>)}
        </Select>
        {isError?<FormHelperText error={isError}>{error[name]}</FormHelperText>:""}
    </FormGroup>);
}

export default InputSelect;