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
				<footer className="absolute bottom-0">
					<p className="my-20 mx-20">
						Asheel Ahmed Siddiqui - &copy; 2024 &mdash; &mdash; &mdash; Made
						with love ♥
					</p>
				</footer>
			</body>
		</html>
	);
}
