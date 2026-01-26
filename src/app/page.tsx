import Link from "next/link";

export default function HomePage() {
	return (
		<main className="">
			{/*
			<h1 className="">[Cool Game Title]</h1>
			<a className="" target="_blank" href="https://youtu.be/A3iJITlDtLI?si=vneVdD3wxtoMo2fM"
			style={{color: '#87CEFA'}}>This is A Link to Youtube</a>
			*/}
			<div>
				<div className="bg-[#424e63ff] container p-8 justify-center m-auto">
					<h1 className="bg-[#4F5D75] px-8 py-8 border-3 border-[#BFC0C0] rounded-lg text-center text-6xl">
						[Cool Game Title]
					</h1>
				</div>

				<div className="bg-[#424e63ff] container p-8 justify-center m-auto min-h-screen">
					<div className="bg-[#4F5D75] px-8 py-8 border-3 border-[#BFC0C0] rounded-lg text-center text-6xl">
						<h2>Login</h2>
						<p>WIP</p>

						<button className="btn">Default</button>
					</div>
				</div>
			</div>
		</main>
	);
}
/*
Link
https://youtu.be/A3iJITlDtLI?si=vneVdD3wxtoMo2fM

Embed
https://www.youtube.com/embed/A3iJITlDtLI?si=Owig9eZwWw6x53G

Embed
https://www.youtube.com/embed/A3iJITlDtLI

Video Url
https://youtu.be/A3iJITlDtLI
*/