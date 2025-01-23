import { ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme, styled } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function MenuListItem({ item }: any) {
  const theme = useTheme();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(item.href); // Navigate to the item's path
  };

  const ListItemStyled = styled(ListItem)(() => ({
    padding: 0,
    ".MuiButtonBase-root": {
      whiteSpace: "nowrap",
      marginBottom: "8px",
      padding: "8px 10px",
      borderRadius: "8px",
      backgroundColor: "inherit",
      color: theme.palette.text.secondary,
      paddingLeft: "10px",
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
        color: 'white',
      },
      "&.Mui-selected": {
        color: "white",
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: "white",
        },
      },
    },
  }));
  const Icon = item.icon;
  const itemIcon = Icon ? <Icon stroke={1.5} size="1.3rem" /> : '';
  return (
    <ListItemStyled key={item.label} disablePadding>
      <ListItemButton
        onClick={handleClick}
      // selected={pathName.match(new RegExp(item.href)) !== null}
      >
        <ListItemIcon sx={{
          minWidth: "36px",
          p: "3px 0",
          color: "inherit",
        }}>
          {itemIcon}
        </ListItemIcon>
        <ListItemText primary={item.label} />
      </ListItemButton>
    </ListItemStyled>
  );
}