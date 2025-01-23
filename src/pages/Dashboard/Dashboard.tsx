import AuthLayout from "../../layout/AuthLayout";
import ComingSoon from "../error/ComingSoon";
export default function Dashboard(){
    return (<AuthLayout>
        <h2>Dashboard</h2>
        <ComingSoon/>
    </AuthLayout>)
}