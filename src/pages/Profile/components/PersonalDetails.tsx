import React, { useEffect, useState } from "react";
import { Avatar} from "@mui/material";
import { red } from "@mui/material/colors";
import Grid from "@mui/material/Grid2";
import TabBox from "../../../components/TabBox";
import ActionCard from "../../../components/ActionCard";
import InputText from "../../../components/InputText";
import { useAppSelector } from "../../../lib/hooks";
import { userSelector } from "../../../slice/userSlice";
import { IUserResponse } from "../../../response/user/userResponse";
import { IOwnerResponse } from "../../../response/user/ownerResponse";


export default function PersonalDetails() {

  const userProps = useAppSelector(userSelector)
  
  const [user, setUser] = useState<IUserResponse|any>({})

  const [editMode, setEditMode] = useState({
    personalInfo: false,
    address: false,
  });

  const [personalInfo, setPersonalInfo] = useState<IOwnerResponse|any>({});
  const [originalPersonalInfo,setOriginalPersonalInfo] = useState({ ...personalInfo });

  useEffect(()=>{
    if(userProps.user)
      setUser(userProps.user);
    if(userProps.owner) {
      setPersonalInfo(userProps.owner);
      setOriginalPersonalInfo(userProps.owner);
    }
  },[userProps])



  const [avatar, setAvatar] = useState<string | null>(null);

  const handleEditToggle = (section: string, flag:boolean) => {
    if(!flag) {
        handleReset(section)
    }
    setEditMode({ ...editMode, [section]: flag });
  };

  const handleReset = (section: string) => {
    if (section === "personalInfo" || section === "address") {
      setPersonalInfo({ ...originalPersonalInfo });
    }
  };

  const handleInputChange = (section: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (section === "personalInfo" || section === "address") {
      setPersonalInfo((prev:IOwnerResponse) => ({ ...prev, [name]: value }));
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () =>{
    
  }

  

  return (
    <TabBox title="My Profile" subtitle="See your details here. You can edit them.">
      {/* Avatar and Name */}
      <ActionCard
        title={user.name}
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
              src={avatar || undefined}
            >
              {user.name?user.name[0]:""}
            </Avatar>
          </label>
        }
        subheader={user.email}
      />

      {/* Personal Information */}
      <ActionCard
        title="Personal Information"
        showEditButtons={true}
        editMode={editMode.personalInfo}
        onReset={() => handleReset("personalInfo")}
        handleEditToggle={(e:boolean)=>handleEditToggle("personalInfo",e)}
        handleSubmit={handleSubmit}
      >
        <Grid >
            <Grid container spacing={2}>
                <Grid size={{xs:12,sm:6, md:6, lg:6, xl:6}} >
                    <InputText
                    label="Name"
                    name="name"
                    value={personalInfo.name}
                    onChange={(e:any) => handleInputChange("personalInfo", e)}
                    editMode={!editMode.personalInfo}
                    />
                </Grid>
                <Grid size={{xs:12,sm:6, md:6, lg:6, xl:6}} >
                    <InputText
                    label="Email"
                    name="email"
                    value={personalInfo.email}
                    onChange={(e:any) => handleInputChange("personalInfo", e)}
                    editMode={!editMode.personalInfo}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid size={{xs:12,sm:6, md:6}}>
                    <InputText
                    label="Phone"
                    name="phone"
                    value={personalInfo.phone}
                    onChange={(e:any) => handleInputChange("personalInfo", e)}
                    editMode={!editMode.personalInfo}
                    />
                </Grid>
                <Grid size={{xs:12,sm:6, md:6}}>
                    <InputText
                    label="Qualification"
                    name="qualification"
                    value={personalInfo.qualification}
                    onChange={(e:any) => handleInputChange("personalInfo", e)}
                    editMode={!editMode.personalInfo}
                    />
                </Grid>
            </Grid>
        </Grid>
      </ActionCard>

      {/* Address Section */}
      <ActionCard
        title="Address"
        showEditButtons={true}
        editMode={editMode.address}
        onReset={() => handleReset("address")}
        handleEditToggle={(e:boolean)=>handleEditToggle("address",e)}
        handleSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid size={{xs:12,sm:6, md:6}}>
            <InputText
              label="Street"
              name="address"
              value={personalInfo.address}
              onChange={(e:any) => handleInputChange("address", e)}
              editMode={!editMode.address}
            />
          </Grid>
          <Grid size={{xs:12,sm:6, md:6}}>
            <InputText
              label="City"
              name="city"
              value={personalInfo.city}
              onChange={(e:any) => handleInputChange("address", e)}
              editMode={!editMode.address}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid size={{xs:12,sm:6, md:6}}>
            <InputText
              label="State"
              name="state_code"
              value={personalInfo.state_code}
              onChange={(e:any) => handleInputChange("address", e)}
              editMode={!editMode.address}
            />
          </Grid>
          <Grid size={{xs:12,sm:6, md:6}}>
            <InputText
              label="Zip Code"
              name="pin_code"
              value={personalInfo.pin_code}
              onChange={(e:any) => handleInputChange("address", e)}
              editMode={!editMode.address}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid size={{xs:12,sm:6, md:6}}>
            <InputText
              label="Country"
              name="country_code"
              value={personalInfo.country_code}
              onChange={(e:any) => handleInputChange("address", e)}
              editMode={!editMode.address}
            />
          </Grid>
        </Grid>
      </ActionCard>
    </TabBox>
  );
}
