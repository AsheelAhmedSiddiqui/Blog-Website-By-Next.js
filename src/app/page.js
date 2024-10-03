"use client";

import Blogs from "@/components/Blogs";
import Loader from "@/components/Loader";
export default async function Home() {
	let blogData = await fetch("https://api.vercel.app/blog");
	let blogs = await blogData.json();
	return (
		<div className=" container w-[1100px] my-10 mx-auto flex items-center justify-between">
			<div className="left w-[800px] h-screen">
				{blogs ? (
					blogs.map((data) => <Blogs key={data.id} blogInfo={data} />)
				) : (
					<Loader />
				)}
			</div>
			<div className="right w-[300px] h-screen border border-black">
				hello
			  </div>
		</div>
	);
}
