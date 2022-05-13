import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="//fonts.googleapis.com" />
					<link rel="preconnect" href="//fonts.gstatic.com" crossOrigin="true" />
					<link
						href="//fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
						rel="stylesheet"
					/>
					<script src="//kit.fontawesome.com/9d6058a237.js" crossOrigin="anonymous" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
