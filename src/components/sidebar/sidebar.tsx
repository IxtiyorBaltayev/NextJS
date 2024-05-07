import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import { Fragment } from "react/jsx-dev-runtime";
import Image from "next/image";
import { format } from "date-fns";
import { SidebarProps } from "./sidebar.props";

const Sidebar = ({ latestBlogs, categories }: SidebarProps) => {
	return (
		<Box width={{ xs: "100%", md: "30%" }}>
			<Box sx={{ position: "sticky", transition: "all .3s ease" }} top={"100px"}>
				<Box padding={"20px"} borderRadius={"5px"} sx={{ boxShadow: 2 }}>
					<Typography variant="h5">Latest Blog</Typography>
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						{latestBlogs.map((item) => (
							<Box key={item.id} marginTop={"20px"}>
								<Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
									<Image
										src={item.image.url}
										alt={item.title}
										width={100}
										height={100}
										style={{ objectFit: "cover", borderRadius: "8px" }}
										priority
									/>
									<Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
										<Typography variant="body1">{item.title}</Typography>
										<Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
											<Avatar alt={item.author.name} src={item.author.avatar.url} />
											<Box>
												<Typography variant="body2">{item.author.name}</Typography>
												<Box sx={{ fontSize: "13px", opacity: ".6" }}>
													{format(new Date(item.createdAt), "dd MMM, yyyy")}
												</Box>
											</Box>
										</Box>
									</Box>
								</Box>
								<Divider sx={{ marginTop: "20px" }} />
							</Box>
						))}
					</Box>
				</Box>
				<Box padding={"20px"} borderRadius={"5px"} sx={{ boxShadow: 2 }} marginTop={"20px"}>
					<Typography variant="h5">Category</Typography>
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						{categories.map((nav) => (
							<Fragment key={nav.slug}>
								<Button sx={{ justifyContent: "flex-start", height: "50px" }}>{nav.label}</Button>
								<Divider />
							</Fragment>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Sidebar;
