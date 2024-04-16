import { Avatar, Box, Typography } from "@mui/material";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { format } from "date-fns";

const Hero = () => {
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
	return (
		<Box width={"100%"} height={"70vh"}>
			<Carousel
				responsive={{
					mobile: {
						breakpoint: { max: 4000, min: 1000 },
						items: 1,
					},
				}}>
				{data.map((item) => (
					<Box key={item.image}>
						<Box sx={{ position: "relative", width: "100%", height: "70vh" }}>
							<Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} priority />
							<Box
								sx={{
									position: "absolute",
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									width: "100%",
									backgroundColor: "rgba(0,0,0, .5)",
								}}
							/>
							<Box
								sx={{
									position: "relative",
									width: { xs: "100%", md: "70%" },
									top: "50%",
									transform: "translateY(-50%)",
									paddingLeft: { xs: "10px", md: "50px" },
									color: "white",
									zIndex: "999",
								}}>
								<Typography sx={{ fontSize: { xs: "35px", md: "50px" } }}>{item.title}</Typography>
								<Typography sx={{ fontSize: { xs: "20px", md: "25px" } }}>{item.exerpt}</Typography>
								<Box sx={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}>
									<Avatar alt={item.author.name} src={item.author.image} />
									<Box>
										<Typography>{item.author.name}</Typography>
										<Typography sx={{ fontSize: "13px" }}>{format(new Date(), "dd MMM, yyyy")}</Typography>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				))}
			</Carousel>
		</Box>
	);
};

export default Hero;
