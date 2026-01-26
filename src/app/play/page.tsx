import Link from "next/link";

export default function HomePage() {
	return (
		<main className="">
			<div>
				<div className="bg-[#424e63ff] container pt-5 justify-center m-auto">

					<h1 className="p-2 text-center text-4xl">
						Sets
					</h1>
				</div>

				<div className="bg-[#424e63ff] container p-8 justify-center m-auto min-h-screen">

					<div className="bg-[#4F5D75] p-8 rounded-lg text-center text-3xl">
						<div className="p-1">
                            <button className="btn btn-xl w-300 p-5 whitespace-nowrap bg-[#FFFFFF] text-[#2D3142] border-1 border-[#BFC0C0] rounded-lg">
                                [Name] Quotes: [Amount]
                            </button>

                            
                        </div>

                        <div className="p-1">
                            <button className="btn btn-xl w-300 p-5 whitespace-nowrap bg-[#EF8354] text-[#FFFFFF] border-1 border-[#BFC0C0] rounded-lg">
                                [Name] Quotes: [Amount]
                            </button>
                        </div>
					</div>

                    <div className=" text-center p-6 m-auto">
                        <button className="btn btn-xl bg-[#EF8354] border-1 border-[#BFC0C0] rounded-lg">Play</button>  
                    </div>
				</div>
			</div>
		</main>
	);
}