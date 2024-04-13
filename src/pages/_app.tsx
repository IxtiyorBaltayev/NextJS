import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "@/helpers/theme";
import "@/styles/globals.css";

export default function App(props: AppProps) {
	const { Component, pageProps } = props;
	return (
		<AppCacheProvider {...props}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</AppCacheProvider>
	);
}
