import React from "react";
import Layout from "./../../layout/layout";
import { GetServerSideProps } from "next";
import { BlogService } from "@/components/services/blog.services";
import { BlogsType } from "@/components/interface/blogs.interface";
import { CategoryType } from "@/components/interface/categories.interface";
import { Sidebar } from "@/components/index";
import { Box } from "@mui/material";
import Content from "./../../components/content/content";

const CategoryDetailedPage = ({ blogs, latestBlogs, categories }: DetailedCategoriesBlogsPageProps) => {
	return (
		<Layout>
			<Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "20px", padding: "20px" }}>
				<Sidebar latestBlogs={latestBlogs} categories={categories} />
				<Content blogs={blogs} />
			</Box>
		</Layout>
	);
};

export default CategoryDetailedPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const blogs = await BlogService.getDetailedCategoriesBlog(query.slug as string);
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

interface DetailedCategoriesBlogsPageProps {
	blogs: BlogsType[];
	latestBlogs: BlogsType[];
	categories: CategoryType[];
}
