import { Content, Hero, Sidebar } from "@/components/index";
import { Box } from "@mui/material";
import Layout from "./../layout/layout";

const HomePage = () => {
	return (
		<Layout>
			<Hero></Hero>
			<Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "20px", padding: "20px" }}>
				<Sidebar></Sidebar>
				<Content></Content>
			</Box>
		</Layout>
	);
};

export default HomePage;
