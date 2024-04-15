import { Hero } from "@/components/index";
import { Button } from "@mui/material";
import Head from "next/head";
import Layout from "./../layout/layout";

const HomePage = () => {
	return (
		<Layout>
			<Hero></Hero>
		</Layout>
	);
};

export default HomePage;
