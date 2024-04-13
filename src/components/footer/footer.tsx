import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { format } from "date-fns";

const Footer = () => {
	return (
		<Box
			padding={"20px"}
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "primary.main",
				color: "white",
			}}>
			<Typography>Ixtiyor Baltayev © {format(new Date(), "yyyy")} All Right Reserved</Typography>
		</Box>
	);
};

export default Footer;
