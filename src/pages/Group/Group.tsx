import AuthLayout from "../../Layout/AuthLayout";
import ComingSoon from "../error/ComingSoon";
export default function Group(){
    return (<AuthLayout>
        <h2>Group</h2>
        <ComingSoon/>
    </AuthLayout>)
}