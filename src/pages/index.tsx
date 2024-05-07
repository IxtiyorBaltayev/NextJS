import { Content, Hero, Sidebar } from "@/components/index";
import { Box } from "@mui/material";
import Layout from "./../layout/layout";
import { GetServerSideProps } from "next";
import { BlogService } from "./../components/services/blog.services";
import { BlogsType } from "./../components/interface/blogs.interface";
import { CategoryType } from "@/components/interface/categories.interface";

const HomePage = ({ blogs, latestBlogs, categories }: HomePageProps) => {
	return (
		<Layout>
			<Hero blogs={blogs} />
			<Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "20px", padding: "20px" }}>
				<Sidebar latestBlogs={latestBlogs} categories={categories} />
				<Content blogs={blogs} />
			</Box>
		</Layout>
	);
};

export default HomePage;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
	const blogs = await BlogService.getAllblogs();
	const latestBlogs = await BlogService.getLatestBlog();
	const categories = await BlogService.getCategories();
	return {
		props: {
			blogs,
			latestBlogs,
			categories,
		},
	};
};

interface HomePageProps {
	blogs: BlogsType[];
	latestBlogs: BlogsType[];
	categories: CategoryType[];
}
