import { Spinner } from "@nextui-org/react";

export default function Loader() {
	return (
		<div className="flex items-center justify-center h-screen">
			<Spinner label="Wait Data is Loading..." color="primary" />
		</div>
	);
}
