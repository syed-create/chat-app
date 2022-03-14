import React, { useState } from "react";

function Client() {
	const [clientInput, setClientInput] = useState("");

	return (
		<div className="h-screen flex justify-center items-center w-full bg-gradient-to-r from-indigo-500">
			<div className="flex justify-center items-center flex-col h-4/5 border-2 border-sky-500  rounded-lg m-5 w-3/6 gap-10 p-24 bg-white">
				<div className="flex items-center w-full gap-4">
					<div className="flex items-center gap-2 w-9/12">
						<h3 className="text-xl font-medium whitespace-nowrap">
							Port Number:{" "}
						</h3>
						<div className="border-2 border-r-2 p-2 px-4 rounded-lg border-sky-500 w-full">
							<input
								className="focus:outline-none w-full"
								type={"text"}
								onChange={e => {
									setClientInput(e.target.value);
								}}
							/>
						</div>
					</div>
					<button
						className="bg-sky-500 hover:bg-sky-600 font-medium rounded-lg p-2 text-white transition-all px-2 w-1/4"
						onClick={() => {}}
					>
						Start Listening
					</button>
				</div>

				<div className="h-3/5 bg-slate-400 opacity-25 w-full p-10 rounded-tr-3xl rounded-b-3xl ">
					{"Messages from server"}
				</div>
				<div className="flex flex-col justify-end items-end w-full h-full gap-4">
					<textarea
						className="w-full h-3/5	p-10 resize-none focus:outline-none rounded-lg focus:border-sky-500 focus:ring-1 focus:ring-sky-500  border-sky-500 border-2"
						placeholder="Enter your message here..."
					/>
					<button
						className=" bg-sky-500 rounded-lg p-2 text-white hover:bg-sky-600 transition-all w-max px-10 font-medium"
						onClick={() => {}}
					>
						Send
					</button>
				</div>
			</div>
		</div>
	);
}

export default Client;
