import { CategoryType } from "../interface/categories.interface";
import { BlogsType } from "./../interface/blogs.interface";
export interface SidebarProps {
	latestBlogs: BlogsType[];
	categories: CategoryType[];
}
