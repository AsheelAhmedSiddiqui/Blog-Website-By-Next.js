import "./globals.css";
import { Providers } from "./Provider";
import MyNavbar from "@/components/Navbar";

export const metadata = {
	title: "Bloggy - One Blogs Stop",
	description: "Hello! welcome to bloggy web",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<MyNavbar />
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
