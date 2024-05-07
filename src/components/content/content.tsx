import { Avatar, Box, Divider, Typography } from "@mui/material";
import { formatDate } from "date-fns/format";
import Image from "next/image";
import { ContentProps } from "./content.props";

const Content = ({ blogs }: ContentProps) => {
	return blogs ? (
		<Box width={{ xs: "100%", md: "70%" }}>
			{blogs.map((item) => (
				<Box
					key={item.id}
					sx={{
						backgroundColor: "rgb(200 200 200 / 50%)",
						"&:first-of-type": { marginTop: 0 },
						marginTop: "20px",
						padding: "10px",
						borderRadius: "5px",
						boxShadow: 1,
					}}>
					<Box position={"relative"} width={"100%"} height={{ xs: "30vh", md: "50vh" }}>
						<Image
							src={item.image.url}
							alt={item.title}
							fill
							style={{ objectFit: "cover", borderRadius: "5px" }}
							priority
						/>
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
							<Avatar alt={item.author.avatar.url} src={item.author.avatar.url} />
							<Box>
								<Typography>{item.author.name}</Typography>
								<Typography sx={{ fontSize: "13px" }}>
									{formatDate(new Date(item.createdAt), "dd MMM, yyyy")}
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			))}
		</Box>
	) : (
		<div></div>
	);
};

export default Content;
