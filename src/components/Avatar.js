import { Avatar, AvatarIcon } from "@nextui-org/react";

export default function MyAvatar() {
	return (
		<div className="flex items-center">
			<Avatar
				icon={<AvatarIcon />}
				classNames={{
					base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
					icon: "text-black/80",
				}}
			/>
		</div>
	);
}
