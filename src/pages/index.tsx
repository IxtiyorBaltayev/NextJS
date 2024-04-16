import { Content, Hero, Sidebar } from "@/components/index";
import { Box } from "@mui/material";
import Layout from "./../layout/layout";
import { GetServerSideProps } from "next";
import { BlogService } from "./../components/services/blog.services";
import { BlogsType } from "./../components/interface/blogs.interface";

const HomePage = ({ blogs }: HomePageProps) => {
	console.log({ blogs });

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

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
	const blogs = await BlogService.getAllblogs();
	return {
		props: {
			blogs,
		},
	};
};

interface HomePageProps {
	blogs: BlogsType[];
}
