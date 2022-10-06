import { Dashboard, Egg, HeadsetMic, HelpCenter, Logout, LunchDining, MenuBook, Person, ReportProblem, Sell, Settings } from "@mui/icons-material";
import { Box, Drawer } from "@mui/material";

import { buildRoute } from "../pipes";
import { SidebarItem } from "./SidebarItem";
import { logo } from "../../../assets/images";

type Props = {
    name: string;
}

export const MerchantSidebar = ({ name }: Props) => {
    return (
        <Drawer
            variant="permanent"
            className="menu__sidebar"
            open
        >
            <div
                className="sidebar__header"
            >
                <div
                    className="sidebar__header-logo"
                    style={{
                        backgroundImage: `url(${logo})`
                    }}
                ></div>
                <div className="sidebar__header-divider"></div>
                <div className="sidebar__header-profile">
                    <div className="header-profile__img">
                        <img src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg" alt="" />
                    </div>
                    <div className="header-profile__info">
                        <p className="header-profile__name">{name}</p>
                        <p className="header-profile__type">Restaurante</p>
                    </div>
                </div>
            </div>
            <Box
                component="div"
                sx={{ width: '100%' }}
                className="sidebar__content"
            >
                <ul className="sidebar__content-section">
                    <li className="section__title">Mi Negocio</li>
                    <SidebarItem icon={<Dashboard />} desc="Ordenes" /> 
                    <SidebarItem icon={<MenuBook />} desc="Menú/Carta" />
                    <SidebarItem icon={<LunchDining />} desc="Productos" href={buildRoute('/productos')} />
                    <SidebarItem icon={<Egg />} desc="Ingredientes" />
                    <SidebarItem icon={<Sell />} desc="Marketing" />
                </ul>

                <ul className="sidebar__content-section">
                    <li className="section__title">Mi Cuenta</li>
                    <SidebarItem icon={<Person />} desc="Perfil" />
                    <SidebarItem icon={<Settings />} desc="Configuración" />
                    <SidebarItem icon={<Logout />} desc="Cerrar Sesión" />
                </ul>

                <ul className="sidebar__content-section">
                    <li className="section__title">Más Información</li>
                    <SidebarItem icon={<HelpCenter />} desc="Centro de Ayuda" />
                    <SidebarItem icon={<ReportProblem />} desc="Reportar un Problema" />
                    <SidebarItem icon={<HeadsetMic />} desc="Ayuda en Línea" />
                </ul>
            </Box>
        </Drawer>
    )
}
