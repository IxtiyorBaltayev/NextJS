import React from "react";
import { GetServerSideProps } from "next";
import { BlogService } from "./../../components/services/blog.services";
import { BlogsType } from "./../../components/interface/blogs.interface";
import Layout from "./../../layout/layout";
import { Avatar, Box, Typography } from "@mui/material";
import { Sidebar } from "@/components/index";
import { CategoryType } from "@/components/interface/categories.interface";
import Image from "next/image";
import { formatDate } from "date-fns";

const DetailedBlogsPage = ({ blog, categories, latestBlogs }: DetailedBlogsPageProps) => {
	return (
		<Layout>
			<Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "20px", padding: "20px" }}>
				<Box width={{ xs: "100%", md: "70%" }}>
					<Box
						sx={{ backgroundColor: "white", padding: "20px", boxShadow: 2 }}
						position={"relative"}
						width={"100%"}
						height={{ xs: "30vh", md: "50vh" }}>
						<Image
							src={blog.image.url}
							alt={blog.title}
							fill
							style={{ objectFit: "cover", borderRadius: "5px" }}
							priority
						/>
					</Box>
					<Box display={"flex"} flexDirection={"column"} rowGap={"10px"}>
						<Box sx={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}>
							<Avatar alt={blog.author.avatar.url} src={blog.author.avatar.url} />
							<Box>
								<Typography>{blog.author.name}</Typography>
								<Typography sx={{ fontSize: "13px" }}>
									{formatDate(new Date(blog.createdAt), "dd MMM, yyyy")}
								</Typography>
							</Box>
						</Box>
						<Typography variant="h3" marginTop={"10px"}>
							{blog.title}
						</Typography>
						<Typography>{blog.excerpt}</Typography>
						<div dangerouslySetInnerHTML={{ __html: blog.description.html }} />
					</Box>
				</Box>
				<Sidebar latestBlogs={latestBlogs} categories={categories} />
			</Box>
		</Layout>
	);
};

export default DetailedBlogsPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const blog = await BlogService.getDetailedBlog(query.slug as string);
	const latestBlogs = await BlogService.getLatestBlog();
	const categories = await BlogService.getCategories();
	return {
		props: {
			blog,
			latestBlogs,
			categories,
		},
	};
};

interface DetailedBlogsPageProps {
	blog: BlogsType;
	latestBlogs: BlogsType[];
	categories: CategoryType[];
}
