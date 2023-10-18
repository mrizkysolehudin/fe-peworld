import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<nav className="flex justify-between py-7 px-20 w-screen shadow-md">
			<Link href="/">
				<Image src="/assets/icons/logo-indigo.svg" width={127} height={35} />
			</Link>

			<div className="gap-5 flex">
				<button
					type="button"
					className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-[#5E50A1] shadow-sm ring-1 ring-inset ring-[#5E50A1] hover:bg-gray-50">
					Masuk
				</button>
				<button
					type="button"
					className="rounded-md bg-[#5E50A1] px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#5E50A1]/90">
					Daftar
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
