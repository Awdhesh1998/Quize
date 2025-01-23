import { Avatar } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TabBox from "../../../components/TabBox";
import { useEffect, useState } from "react";
import ActionCard from "../../../components/ActionCard";
import { red } from "@mui/material/colors";
import { useAppSelector } from "../../../lib/hooks";
import { userSelector } from "../../../slice/userSlice";
import { IOrganizationResponse } from "../../../response/user/organizationResponse";
import InputText from "../../../components/InputText";

export default function OrganizationDetails(){

    const [logo, setLogo] = useState<string|null>(null);
    const [nameplate, setNameplate] = useState<string|null>(null);
    const [organizationDetails, setOrganizationDetails] = useState<IOrganizationResponse|null>();
    
    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setLogo(URL.createObjectURL(file));
        }
    };

    const handleNameplateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setNameplate(URL.createObjectURL(file));
        }
    };

    const organizationProps = useAppSelector(userSelector)

    useEffect(()=>{
        if(organizationProps) {
            setLogo(organizationProps.organization?.logo || null)
            setOrganizationDetails(organizationProps.organization);
            setNameplate(organizationDetails?.nameplate||null)
        }
    },[organizationProps])
    return (<TabBox title="Organization Details">  
                <ActionCard
                    title={organizationDetails?.name||''}
                    avatar={
                    <label htmlFor="avatar-upload">
                        <input
                        id="avatar-upload"
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleAvatarChange}
                        />
                        <Avatar
                        sx={{ bgcolor: red[500], cursor: "pointer", width: 100, height: 100 }}
                        aria-label="recipe"
                        src={logo || undefined}
                        >
                        {organizationDetails?.name?organizationDetails.name[0]:""}
                        </Avatar>
                    </label>
                    }
                    subheader={organizationDetails?.email}
                />
                <ActionCard
                title="Organization Details"
                >
                    <Grid>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12,sm:6, md:6, lg:6, xl:6}} >
                                <InputText
                                label="Name"
                                name="name"
                                value={organizationDetails?.name}
                                />
                            </Grid>
                            <Grid size={{xs:12,sm:6, md:6, lg:6, xl:6}} >
                                <InputText
                                label="Organization Code"
                                name="name"
                                value={organizationDetails?.organization_code}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12,sm:6, md:6, lg:6, xl:6}} >
                                <InputText
                                label="Subtile"
                                name="subtitle"
                                value={organizationDetails?.subtitle || ''}
                                />
                            </Grid>
                            <Grid size={{xs:12,sm:6, md:6, lg:6, xl:6}} >
                                <InputText
                                label="Email"
                                name="email"
                                value={organizationDetails?.email}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12,sm:6, md:6, lg:6, xl:6}} >
                                <InputText
                                label="Phone"
                                name="phone"
                                value={organizationDetails?.phone || ''}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </ActionCard>
                <ActionCard
                    title="Nameplate Of Organization">
                         <label htmlFor="nameplate-upload">
                        <input
                        id="nameplate-upload"
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleNameplateChange}
                        />
                        <Avatar
                        sx={{ bgcolor: red[500], cursor: "pointer", width: 685, height: 100 }}
                        aria-label="recipe"
                        src={nameplate || undefined}
                        variant="square"
                        >
                        {organizationDetails?.name?organizationDetails.name[0]:""}
                        </Avatar>
                    </label>
                </ActionCard>
            </TabBox>)
}