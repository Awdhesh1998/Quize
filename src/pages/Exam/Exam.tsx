import AuthLayout from "../../Layout/AuthLayout";
import ComingSoon from "../error/ComingSoon";
export default function Exam(){
    return (<AuthLayout>
        <h2>Exam</h2>
        <ComingSoon/>
    </AuthLayout>)
}