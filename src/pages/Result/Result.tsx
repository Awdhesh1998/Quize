import AuthLayout from "../../Layout/AuthLayout";
import ComingSoon from "../error/ComingSoon";
export default function Result(){
    return (<AuthLayout>
        <h2>Result</h2>
        <ComingSoon/>
    </AuthLayout>)
}