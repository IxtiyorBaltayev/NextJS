import { gql, request } from "graphql-request";
import { BlogsType } from "../interface/blogs.interface";
import { CategoryType } from "../interface/categories.interface";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const BlogService = {
	async getAllblogs() {
		const query = gql`
			query GetBlogs {
				blogs {
					excerpt
					id
					slug
					title
					createdAt
					image {
						url
					}
					author {
						name
						avatar {
							url
						}
					}
					category {
						label
						slug
					}
				}
			}
		`;
		const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
		return result.blogs;
	},

	async getLatestBlog() {
		const query = gql`
			query GetBlogs {
				blogs(last: 2) {
					excerpt
					id
					slug
					title
					createdAt
					image {
						url
					}
					author {
						name
						avatar {
							url
						}
					}
				}
			}
		`;
		const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
		return result.blogs;
	},

	async getCategories() {
		const query = gql`
			query GetCategories {
				categories {
					slug
					label
				}
			}
		`;
		const result = await request<{ categories: CategoryType[] }>(graphqlAPI, query);
		return result.categories;
	},

	async getDetailedBlog(slug: string) {
		const query = gql`
			query GetDetailedBlog($slug: String!) {
				blog(where: { slug: $slug }) {
					excerpt
					id
					slug
					title
					createdAt
					image {
						url
					}
					author {
						name
						avatar {
							url
						}
					}
					category {
						label
						slug
					}
					description {
						html
						text
					}
				}
			}
		`;
		const result = await request<{ blog: BlogsType[] }>(graphqlAPI, query, { slug });
		return result.blog;
	},

	async getDetailedCategoriesBlog(slug: string) {
		const query = gql`
			query GetCategoriesBlog($slug: String!) {
				blogs(where: { category: { slug: $slug } }) {
					excerpt
					id
					slug
					title
					createdAt
					image {
						url
					}
					author {
						name
						avatar {
							url
						}
					}
					category {
						label
						slug
					}
					description {
						html
						text
					}
				}
			}
		`;
		const result = await request<{ blog: BlogsType[] }>(graphqlAPI, query, { slug });
		return result.blog;
	},
};
