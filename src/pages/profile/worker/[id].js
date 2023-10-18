import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
import React from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
	MapPinIcon,
	EnvelopeIcon,
	IdentificationIcon,
	ChatBubbleLeftIcon,
	UserCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const ProfileWorkerPage = () => {
	const skillTalents = [
		"Java",
		"Kotlin",
		"PHP",
		"JavaScript",
		"Golang",
		"C++",
		"Ruby",
		"Bahasa lainnya",
	];

	return (
		<div>
			<Navbar />

			<main className="bg-[#9EA0A5]/30 w-screen grid justify-center pt-20 pb-40">
				<div className="bg-[#5E50A1] w-[87vw] h-[20vw] grid justify-end items-end rounded-t-lg ">
					<button className="flex text-white items-center my-1 py-2 px-6 gap-2 font-semibold">
						<PencilIcon className="w-[1.3vw] h-[1.3vw]" /> Ubah Latar
					</button>
				</div>

				<div className="bg-white w-[87vw] pb-16">
					<section className="w-[50vw] mx-auto justify-center text-center grid  text-gray-400 -mt-[5vw] ">
						<div className="relative w-[10vw] h-[10vw] mx-auto">
							<Image src="/assets/images/avatar3.png" alt="avatar" fill />
						</div>

						<div>
							<h5 className="text-black font-semibold text-2xl mt-5">
								Louis Tomlinsoon
							</h5>

							<h6 className="text-black mt-2">Web developer</h6>
							<h6 className="flex justify-center items-center gap-2 mt-2">
								<MapPinIcon className="w-3 h-3" /> Purwokerto, Jawa Tengah
							</h6>

							<h6 className="gap-2 mt-2">Freelancer</h6>

							<p className="mt-5">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat
								orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus
								fringilla, vestibulum risus at.
							</p>

							<button
								type="button"
								className="mt-6 rounded bg-[#5E50A1] px-3.5 pt-2 pb-2.5 w-[22vw] text-sm font-semibold text-white shadow-sm hover:bg-[#5E50A1]/90">
								Edit profile
							</button>
						</div>

						<div className="mt-10">
							<h3 className="text-black font-semibold text-2xl">Skill</h3>

							<div className="text-white w-5/12 mx-auto justify-center flex flex-wrap gap-x-3 gap-y-4 text-sm mt-5">
								{skillTalents.map((item, index) => (
									<span
										key={index}
										className="py-1 px-4 bg-[#fbb01799] border border-[#FBB017] rounded">
										{item}
									</span>
								))}
							</div>
						</div>

						<ul className="grid justify-center items-center mt-9 gap-4 text-sm">
							<li className="flex gap-3 items-center">
								<EnvelopeIcon className="w-5 h-5" /> Louistommo@gmail.com
							</li>
							<li className="flex gap-3 items-center">
								<IdentificationIcon className="w-5 h-5" /> @Louist91
							</li>
							<li className="flex gap-3 items-center">
								<UserCircleIcon className="w-5 h-5" /> @Louistommo
							</li>
							<li className="flex gap-3 items-center">
								<ChatBubbleLeftIcon className="w-5 h-5" /> @Louistommo91
							</li>
						</ul>
					</section>

					<section className="mt-16 w-[80vw] mx-auto">
						<div className="flex gap-8 text-2xl">
							<button className="text-black font-semibold underline underline-offset-8 ">
								Portofolio
							</button>
							<button className="text-gray-400 font-semibold ">
								Pengalaman kerja
							</button>
						</div>

						<div className="flex mt-10 flex-wrap gap-x-4 gap-y-6">
							<article>
								<div className="relative w-[16vw] h-[10vw] mx-auto">
									<Image src="/assets/images/image-portfolio.png" alt="avatar" fill />
								</div>
								<p className="text-gray-800 text-center mt-1">Remainder app</p>
							</article>

							<article>
								<div className="relative w-[16vw] h-[10vw] mx-auto">
									<Image src="/assets/images/image-portfolio3.png" alt="avatar" fill />
								</div>
								<p className="text-gray-800 text-center mt-1">Social media app</p>
							</article>

							<article>
								<div className="relative w-[16vw] h-[10vw] mx-auto">
									<Image src="/assets/images/image-portfolio2.png" alt="avatar" fill />
								</div>
								<p className="text-gray-800 text-center mt-1">Project management web</p>
							</article>
						</div>
					</section>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default ProfileWorkerPage;
