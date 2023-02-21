import { ListItem } from "@mui/material";
import { Stack } from "@mui/system";
import './Footer.css';

export const Footer = () => {
    return (
        <Stack  direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}>
        <ListItem>dilsono316@gmail.com</ListItem>
        <ListItem>&copy;Dilon Campêlo</ListItem>
        <ListItem>DiBank</ListItem>
        </Stack>
    )
} 
