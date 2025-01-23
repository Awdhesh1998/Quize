import AuthLayout from "../../layout/AuthLayout";
import ComingSoon from "../error/ComingSoon";
export default function Support(){
    return (<AuthLayout>
        <h2>Support</h2>
        <ComingSoon/>
    </AuthLayout>)
}