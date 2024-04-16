import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import { navItems } from "./../config/constants";
import { Fragment } from "react/jsx-dev-runtime";
import Image from "next/image";
import { format } from "date-fns";

const Sidebar = () => {
	return (
		<Box width={{ xs: "100%", md: "30%" }}>
			<Box sx={{ position: "sticky", transition: "all .3s ease" }} top={"100px"}>
				<Box padding={"20px"} borderRadius={"5px"} sx={{ boxShadow: 2 }}>
					<Typography variant="h5">Latest Blog</Typography>
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						{data.map((item) => (
							<Box key={item.title} marginTop={"20px"}>
								<Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
									<Image
										src={item.image}
										alt={item.image}
										width={100}
										height={100}
										style={{ objectFit: "cover", borderRadius: "8px" }}
										priority
									/>
									<Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
										<Typography variant="body1">{item.title}</Typography>
										<Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
											<Avatar alt={item.author.name} src={item.author.image} />
											<Box>
												<Typography variant="body2">{item.author.name}</Typography>
												<Box sx={{ fontSize: "13px", opacity: ".6" }}>{format(new Date(), "dd MMM, yyyy")}</Box>
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
						{navItems.map((nav) => (
							<Fragment key={nav.route}>
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

const data = [
	{
		image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
		title: "Technical SEO with Hygraph",
		exerpt: "Get started with your SEO implementation when using a Headless CMS",
		author: {
			name: "Ixtiyor Baltayev",
			image:
				"https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yWFoybW9UMlVwSEJOWjlDTDZqcmRJOU8yWGgifQ?width=80",
		},
	},
	{
		image: "https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h",
		title: "Union Types and Sortable Relations with Hygraph",
		exerpt: "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
		author: {
			name: "Ixtiyor Baltayev",
			image:
				"https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yWFoybW9UMlVwSEJOWjlDTDZqcmRJOU8yWGgifQ?width=80",
		},
	},
];
