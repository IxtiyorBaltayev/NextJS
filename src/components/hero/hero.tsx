import { Avatar, Box, Typography } from "@mui/material";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { format } from "date-fns";
import { HeroProps } from "./hero.props";

const Hero = ({ blogs }: HeroProps) => {
	return (
		<Box width={"100%"} height={"70vh"}>
			<Carousel
				responsive={{
					mobile: {
						breakpoint: { max: 4000, min: 1000 },
						items: 1,
					},
				}}>
				{blogs.map((item) => (
					<Box key={item.id}>
						<Box sx={{ position: "relative", width: "100%", height: "70vh" }}>
							<Image src={item.image.url} alt={item.title} fill style={{ objectFit: "cover" }} priority />
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
								<Typography sx={{ fontSize: { xs: "20px", md: "25px" } }}>{item.excerpt}</Typography>
								<Box sx={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}>
									<Avatar alt={item.author.name} src={item.author.avatar.url} />
									<Box>
										<Typography>{item.author.name}</Typography>
										<Typography sx={{ fontSize: "13px" }}>
											{format(new Date(item.createdAt), "dd MMM, yyyy")}
										</Typography>
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
