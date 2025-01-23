import { Button, Checkbox, FormControlLabel, FormGroup, Stack, Typography } from "@mui/material";
import GuestLayout from "../../layout/GuestLayout";
import InputText from "../../components/InputText";
import Submit from "../../components/Submit";
import { ChangeEvent, useState } from "react";

export default function Login(){
    const [user,setUser] = useState< any>({});
    const [error, setError] = useState< any>({})

    const onChange = (e:ChangeEvent<HTMLInputElement>)=>{
        let name = e.target.name;
        let value:string|boolean = "";
        setError((current: { [x: string]: any; }) => {
            if(current[name]){
                const {[name]: _, ...rest} = current;
                return rest;
            } else {
                return current;
            }
          });
        if("checkbox" === e.target.type) {
            value = e.target.checked;            
        } else {
            value = e.target.value;
        }
        setUser({...user, [name]:value});
    }
    return(<GuestLayout>   
        <form >
            <Stack spacing={3}>
                <InputText error={error}  value={user.email} label="Email" name="email" onChange={onChange}/>
                <InputText  error={error} value={user.password} label="Password" name="password" type="password" onChange={onChange}/>
                <Stack justifyContent="space-between"  spacing={2}>
                    <Submit/>
                    <Stack direction="row"  justifyContent="space-between" >
                        <FormGroup>
                            <FormControlLabel control={<Checkbox name="isRemember" onChange={()=>{}}/>} label="Remeber this Device" />
                        </FormGroup>
                        <Button>Forgot Password ?</Button>
                    </Stack>
                </Stack>
            </Stack>
        </form>
        <Stack direction="row" sx={{ mt: 4 }}>
            <Typography component="h6" variant="h6">Dosen&apos;t have an account yet?</Typography>
            <Button  onClick={() => {}} >Sign Up</Button>
        </Stack>
    </GuestLayout>);
}