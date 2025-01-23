
import Grid from "@mui/material/Grid2";
import InputText from "../../../components/InputText";
import TabBox from "../../../components/TabBox";
import Submit from "../../../components/Submit";

export default function Security() {
     return (
        <TabBox title="Security Setting" subtitle="Change Password">
            <Grid container direction="column" sx={{marginTop:3}} spacing={2}>
                <Grid>
                    <InputText label="Old Password" name="old-password" />
                </Grid>
                <Grid>
                    <InputText label="New Password" name="old-password" />
                </Grid>
                <Grid>
                    <InputText label="Confirm Password" name="old-password" />
                </Grid>
                <Grid>
                    <Submit/>
                </Grid>
            </Grid>
        </TabBox>)
}