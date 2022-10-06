import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
    icon: JSX.Element;
    desc: string;
    href?: string
}

export const SidebarItem = ({ icon, desc, href = '/404' }: Props) => {
    const location = useLocation();
    const navigate = useNavigate();

    const onClick = ($e: React.MouseEvent<HTMLAnchorElement>) => {
        if (href === '/404') {
            return;
        }

        $e.preventDefault();
        navigate(href);
    };

    return (
        <ListItemButton
            className={`section__option ${location.pathname === href && 'active'}`}
            href={href}
            onClick={onClick}
        >
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText>
                {desc}
            </ListItemText>
        </ListItemButton>
    )
}
