import { gql, request } from "graphql-request";
import { BlogsType } from "../interface/blogs.interface";

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
};
