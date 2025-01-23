import { FormGroup, InputLabel, OutlinedInput, FormHelperText, Typography } from "@mui/material";

interface InputTextProps {
  customClasses?: string;
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  value?: string | number;
  onChange?: any;
  error?: any;
  minRows?: number;
  multiline?: boolean;
  editMode?: boolean; // New prop for edit mode
}

const InputText: React.FC<InputTextProps> = ({
  label,
  name,
  placeholder,
  type,
  value,
  onChange,
  multiline,
  error,
  minRows,
  editMode = false, // Default value set to false
}) => {
  const isError = error && error[name] ? true : false;

  return (
    <FormGroup>
      <InputLabel>{label}</InputLabel>
      {editMode ? (
        // Display plain text when editMode is true
        <Typography
          sx={{
            border: "1px solid",
            borderColor: "grey.400",
            padding: 1,
            borderRadius: 1,
            minHeight: multiline ? `${minRows || 1}em` : "auto",
            backgroundColor: "grey.100",
          }}
        >
          {value || "N/A"}
        </Typography>
      ) : (
        // Editable input field when editMode is false
        <OutlinedInput
          name={name}
          onChange={onChange || (() => {})}
          placeholder={placeholder}
          value={value}
          fullWidth
          size="small"
          type={type || "text"}
          error={isError}
          multiline={multiline || false}
          minRows={minRows || 1}
        />
      )}
      {isError ? (
        <FormHelperText error={isError}>{error[name]}</FormHelperText>
      ) : (
        ""
      )}
    </FormGroup>
  );
};

export default InputText;
