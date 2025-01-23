import Grid from "@mui/material/Grid2";
import TabBox from "../../../components/TabBox";
import { useEffect, useState } from "react";
import ActionCard from "../../../components/ActionCard";
import { useAppSelector } from "../../../lib/hooks";
import { userSelector } from "../../../slice/userSlice";
import InputText from "../../../components/InputText";
import { IBranchResponse } from "../../../response/user/branchResponse";

export default function Branch() {
  const [branches, setBranches] = useState<Array<IBranchResponse> | null>(null);
  const [editMode, setEditMode] = useState<Record<number, boolean>>({});

  const organizationProps = useAppSelector(userSelector);

  useEffect(() => {
    if (organizationProps?.branch) {
      setBranches(organizationProps.branch);
      setEditMode(
        organizationProps.branch.reduce((acc, _, index) => {
          acc[index] = false;
          return acc;
        }, {} as Record<number, boolean>)
      );
    }
  }, [organizationProps]);

  const handleEditToggle = (index: number) => {
    setEditMode((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleInputChange = (
    index: number,
    field: keyof IBranchResponse,
    value: string
  ) => {
    setBranches((prev) =>
      prev
        ? prev.map((branch, i) =>
            i === index ? { ...branch, [field]: value } : branch
          )
        : prev
    );
  };

  const handleSave = (index: number) => {
    // Save logic can go here (e.g., API call)
    console.log("Saving branch:", branches?.[index]);
    handleEditToggle(index); // Exit edit mode
  };

  const handleReset = (index: number) => {
    // Reset logic to revert changes
    if (organizationProps?.branch) {
      setBranches((prev) =>
        prev
          ? prev.map((branch, i) =>
              i === index ? organizationProps.branch![index] : branch
            )
          : prev
      );
    }
    handleEditToggle(index); // Exit edit mode
  };

  return (
    <TabBox title="Organization Details">
      {branches && branches.length > 0 ? (
        branches.map((el: IBranchResponse, index: number) => (
          <ActionCard
            key={index}
            title={`Branch: ${el.name || "Unknown Branch"}`}
            showEditButtons={true}
            editMode={editMode[index]}
            onReset={() => handleReset(index)}
            handleEditToggle={() => handleEditToggle(index)}
            handleSubmit={() => handleSave(index)}
          >
            <Grid container spacing={2}>
              <Grid size={{xs:12,sm:6}} >
                <InputText
                  label="Branch Name"
                  name="name"
                  value={el.name || ""}
                  onChange={(e:any) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                  editMode={!editMode[index]}
                />
              </Grid>
              <Grid  size={{xs:12,sm:6}}>
                <InputText
                  label="Branch Code"
                  name="branch_code"
                  value={el.branch_code || ""}
                  editMode={!editMode[index]}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              
              <Grid  size={{xs:12,sm:6}}>
                <InputText
                  label="Address"
                  name="address"
                  value={el.address || ""}
                  onChange={(e:any) =>
                    handleInputChange(index, "address", e.target.value)
                  }
                  editMode={!editMode[index]}
                />
              </Grid>

              <Grid size={{xs:12,sm:6}} >
                <InputText
                  label="City"
                  name="city"
                  value={el.city || ""}
                  onChange={(e:any) =>
                    handleInputChange(index, "city", e.target.value)
                  }
                  editMode={!editMode[index]}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              
              <Grid  size={{xs:12,sm:6}}>
                <InputText
                  label="District Code"
                  name="district_code"
                  value={el.district_code || ""}
                  onChange={(e:any) =>
                    handleInputChange(index, "district_code", e.target.value)
                  }
                  editMode={!editMode[index]}
                />
              </Grid>

              <Grid size={{xs:12,sm:6}} >
                <InputText
                  label="State Code"
                  name="state_code"
                  value={el.state_code || ""}
                  onChange={(e:any) =>
                    handleInputChange(index, "state_code", e.target.value)
                  }
                  editMode={!editMode[index]}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              
              <Grid  size={{xs:12,sm:6}}>
                <InputText
                  label="Country Code"
                  name="country_code"
                  value={el.country_code || ""}
                  onChange={(e:any) =>
                    handleInputChange(index, "country_code", e.target.value)
                  }
                  editMode={!editMode[index]}
                />
              </Grid>

              <Grid size={{xs:12,sm:6}} >
                <InputText
                  label="Pin Code"
                  name="pin_code"
                  value={el.pin_code || ""}
                  onChange={(e:any) =>
                    handleInputChange(index, "pin_code", e.target.value)
                  }
                  editMode={!editMode[index]}
                />
              </Grid>
            </Grid>
          </ActionCard>
        ))
      ) : (
        <p>No branches available.</p>
      )}
    </TabBox>
  );
}
