import { Alert, Button, Checkbox, FormControlLabel, FormGroup, Stack } from "@mui/material";
import GuestLayout from "../../layout/GuestLayout";
import InputText from "../../components/InputText";
import Submit from "../../components/Submit";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";
import { ILoginRequest, loginValidation } from "../../request/auth/LoginRequest";
import { toast } from 'react-toastify';
import { useLoginMutation } from "../../service/auth/auth";
import { useCookieHandler } from "../../lib/helper/useCookieHandler";

export default function Login(){
    const [user,setUser] = useState<ILoginRequest|any>({});
    const [error, setError] = useState<ILoginRequest|any>({})
    const navigate = useNavigate();
    const [login] = useLoginMutation();
    const {setCookieValue} = useCookieHandler();

    const submitForm = async () => {
        // Validate the user input before proceeding
        const validationResult = loginValidation(user as ILoginRequest);

        if (validationResult.isError) {
            setError(validationResult.data); // Set validation errors
            return;
        }

        try {
            const {error, data} = await login(user)
            if(data) {
                setCookieValue('authToken', data.access_token, {
                    path: '/',
                    maxAge: user.isRemember ? 7 * 24 * 60 * 60 : 3600, // 1 week or 1 hour
                    secure: true,
                    sameSite: 'strict',
                  });                
                navigate('/dashboard');
            } else if(error) {
                let errorData:any = error;
                setError({ general: errorData.data.error });
            }
           
        } catch (error) {
            console.error('Login failed:', error);

            // Handle the error appropriately and show error toast
            toast.error('Login failed. Please try again.');
            setError({ general: 'Login failed. Please try again.' });
        }
    };


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
        {error.general&&<Alert severity="error">{error.general}</Alert>}
        <form action={submitForm}>
            <Stack spacing={3}>
                <InputText error={error}  value={user.email} label="Email" name="email" onChange={onChange}/>
                <InputText  error={error} value={user.password} label="Password" name="password" type="password" onChange={onChange}/>
                <Stack justifyContent="space-between"  spacing={2}>
                    <Submit/>
                    <Stack direction="row"  justifyContent="space-between" >
                        <FormGroup>
                            <FormControlLabel control={<Checkbox name="isRemember" onChange={onChange}/>} label="Remember this Device" />
                        </FormGroup>
                        <Button>Forgot Password ?</Button>
                    </Stack>
                </Stack>
            </Stack>
        </form>
    </GuestLayout>);
}