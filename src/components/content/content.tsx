import { Avatar, Box, Divider, Typography } from "@mui/material";
import { formatDate } from "date-fns/format";
import Image from "next/image";

const Content = () => {
	return (
		<Box width={{ xs: "100%", md: "70%" }}>
			{data.map((item) => (
				<Box
					key={item.image}
					sx={{
						backgroundColor: "rgb(200 200 200 / 50%)",
						"&:first-child": { marginTop: 0 },
						marginTop: "20px",
						padding: "10px",
						borderRadius: "5px",
						boxShadow: 1,
					}}>
					<Box position={"relative"} width={"100%"} height={{ xs: "30vh", md: "50vh" }}>
						<Image src={item.image} alt={item.title} fill style={{ objectFit: "cover", borderRadius: "5px" }} />
					</Box>
					<Box>
						<Typography variant="h4" marginTop={"30px"}>
							{item.title}
						</Typography>
						<Typography variant="body1" color={"gray"}>
							{item.exerpt}
						</Typography>
						<Divider sx={{ marginTop: "30px" }} />
						<Box sx={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}>
							<Avatar alt={item.author.name} src={item.author.image} />
							<Box>
								<Typography>{item.author.name}</Typography>
								<Typography sx={{ fontSize: "13px" }}>{formatDate(new Date(), "dd MMM, yyyy")}</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			))}
		</Box>
	);
};

export default Content;

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
