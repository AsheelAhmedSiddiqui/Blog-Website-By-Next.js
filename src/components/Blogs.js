import { Card, CardBody } from "@nextui-org/react";
import MyAvatar from "./Avatar";
import Badge from "./Badge";

export default function Blogs({ blogInfo }) {
	return (
		<Card className="mx-5 my-8 border">
			<CardBody>
				<Badge cate={blogInfo.category} />
				<h1 className="text-2xl font-bold my-4 mx-2">{blogInfo.title}</h1>
				<p className="mx-2 mb-8 text-base font-medium text-gray-400">
					{blogInfo.content}
				</p>
				<div className="author-details mx-2 flex items-center gap-4">
					<MyAvatar />
					<div className="flex justify-center flex-col">
						<h4 className="font-bold">{blogInfo.author}</h4>
						<p className="text-sm font-medium text-gray-400">
							Created At: {blogInfo.date}
						</p>
					</div>
				</div>
			</CardBody>
		</Card>
	);
}
