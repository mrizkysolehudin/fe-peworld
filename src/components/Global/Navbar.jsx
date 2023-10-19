import { BellIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Navbar = () => {
	const router = useRouter();
	const currentUrl = router.asPath;
	const [isLogin, setIsLogin] = useState(false);
	console.log("saat ini ooooooo", isLogin);

	useEffect(() => {
		if (currentUrl !== "/") {
			setIsLogin(true);
		} else {
			setIsLogin(false);
		}
	}, []);

	return (
		<nav className="flex justify-between py-7 px-20 w-screen shadow-lg">
			<Link href="/">
				<Image src="/assets/icons/logo-indigo.svg" alt="" width={127} height={35} />
			</Link>

			{isLogin ? (
				<div className="gap-9 flex text-gray-400">
					<button className="hover:bg-gray-50 px-1 rounded">
						<BellIcon className="w-[1.8vw] h-[1.8vw]" />
					</button>
					<button className="hover:bg-gray-50 px-1 rounded">
						<EnvelopeIcon className="w-[1.8vw] h-[1.8vw]" />
					</button>
					<Link href="/profile/worker/1" className="rounded-full">
						<Image src="/assets/images/avatar3.png" alt="" width={35} height={35} />
					</Link>
				</div>
			) : (
				<div className="gap-5 flex">
					<Link
						href="/login"
						className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-[#5E50A1] shadow-sm ring-1 ring-inset ring-[#5E50A1] hover:bg-gray-50">
						Masuk
					</Link>
					<Link
						href="/register/worker"
						className="rounded-md bg-[#5E50A1] px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#5E50A1]/90">
						Daftar
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
