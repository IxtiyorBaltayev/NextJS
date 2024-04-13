import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { navItems } from "../config/constants";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import FingerprintIcon from "@mui/icons-material/Fingerprint";

interface Props {
	window?: () => Window;
}

const Navbar = ({ window }: Props) => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingX: "20px" }}>
				<Box sx={{ my: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
					<FingerprintIcon />
				</Box>
				<Close />
			</Box>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item.route} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary={item.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box height={"10vh"} sx={{ display: "flex" }}>
			<AppBar component="nav">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}>
						<MenuIcon />
					</IconButton>
					<Box component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
						<FingerprintIcon />
					</Box>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						{navItems.map((item) => (
							<Button key={item.route} sx={{ color: "#fff" }}>
								{item.label}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<nav>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": { boxSizing: "border-box", width: "100%" },
					}}>
					{drawer}
				</Drawer>
			</nav>
		</Box>
	);
};
export default Navbar;
