import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const HirePage = () => {
	const skillItems = [
		"Phyton",
		"Laravel",
		"Golang",
		"JavaScript",
		"PHP",
		"HTML",
		"C++",
		"Kotlin",
		"Swift",
	];

	return (
		<div>
			<Navbar />

			<main className="w-screen flex justify-center px-8 pt-8 bg-[#F6F7F8]">
				<section className="w-4/12 h-screen bg-white rounded-sm">
					<div className="p-10 ">
						<div className="relative w-[10vw] h-[10vw] mx-auto">
							<Image src="/assets/images/avatar3.png" alt="avatar" fill />
						</div>

						<div>
							<h4>Louis Tomlinson</h4>

							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat
								orci.
							</p>

							<h6 className="flex justify-center items-center gap-2 mt-3">
								<MapPinIcon className="w-3 h-3" /> Purwokerto, Jawa Tengah
							</h6>

							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat
								orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus
								fringilla, vestibulum risus at.
							</p>
						</div>

						<div>
							<h5>Skill</h5>

							<div className="text-white flex flex-wrap gap-3 pr-4">
								{skillItems.map((item, index) => (
									<span
										key={index}
										className="py-1 px-4 bg-[#fbb01799] border border-[#FBB017] rounded">
										{item}
									</span>
								))}
							</div>
						</div>
					</div>
				</section>
				<section className="w-7/12 h-screen bg-blue-100"></section>
			</main>

			<Footer />
		</div>
	);
};

export default HirePage;
