import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
} from "@nextui-org/react";

export default function MyNavbar() {
	return (
		<Navbar>
			<NavbarBrand>
				<p className="font-bold text-inherit">Bloggy</p>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem isActive>
					<Link color="foreground" href="/">
						Our Blogs
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="/about">
						About
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="/contact">
						Contact
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Link href="#">Login</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color="primary" href="#" variant="flat">
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
