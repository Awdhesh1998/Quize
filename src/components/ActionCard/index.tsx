import { ReactNode } from "react";
import { Card, CardHeader, CardContent, CardActions, Button } from "@mui/material";
import EditButton from "./EditButton"; // Import the reusable EditButton component
import Submit from "../Submit";
import { Restore, Save } from "@mui/icons-material";

export default function ActionCard({
  children,
  title,
  subheader,
  avatar,
  showEditButtons,
  editMode,
  onReset,
  handleSubmit,
  handleEditToggle
}: Readonly<{
  children?: ReactNode;
  title: string;
  subheader?: string;
  avatar?: ReactNode;
  showEditButtons?: boolean; // Flag to display EditButton
  onSave?: () => void; // Save callback
  onCancel?: () => void; // Cancel callback
  onReset?: () => void; // Reset callback
  handleSubmit?: () => void;
  handleEditToggle?: (e:boolean) => void; 
  editMode?:boolean
}>) {
 

  

  return (
    <Card variant="outlined" sx={{ marginTop: 3 }}>
      {/* Card Header */}
      <CardHeader
        avatar={avatar || null} // Render avatar only if provided
        action={
          showEditButtons ? (
            <EditButton
              editMode={editMode|| false}
              onEditToggle={handleEditToggle ||(()=>{})}
            />
          ) : null
        }
        title={title}
        subheader={subheader}
        titleTypographyProps={{ variant: "subtitle1" }}
      />

      {/* Card Content */}
     
      {(children && !handleSubmit) && <CardContent>{children}</CardContent>}
      {handleSubmit && <form action={handleSubmit}><CardContent>{children}</CardContent> {editMode && <CardActions><Submit icon={Save}/> <Button variant="text" color="error" onClick={onReset} fullWidth><Restore/> Reset</Button></CardActions>}</form>}
     
    </Card>
  );
}
