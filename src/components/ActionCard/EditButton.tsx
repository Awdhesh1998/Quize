import { Edit, Cancel } from "@mui/icons-material";
import { Stack, Button } from "@mui/material";

interface EditButtonProps {
  editMode: boolean;
  onEditToggle: (e:boolean) => void;
}

export default function EditButton({
  editMode,
  onEditToggle
}: EditButtonProps) {
  return (
    <Stack direction="row" spacing={2} justifyContent="flex-end" mt={2}>
      {!editMode ? (
        <Button  size="small" startIcon={<Edit />} variant="outlined" onClick={()=>onEditToggle(true)}>
          Edit
        </Button>
      ) : (
          <Button
            size="small"
            startIcon={<Cancel />}
            variant="outlined"
            color="secondary"
            onClick={()=>onEditToggle(false)}
          >
            Cancel
          </Button>
      )}
    </Stack>
  );
}
