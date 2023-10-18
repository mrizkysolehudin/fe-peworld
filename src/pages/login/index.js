import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
	return (
		<>
			<Head>
				<title>Login | Peworld</title>
			</Head>

			<div className="px-20 py-5 flex w-[100vw] bg-[#E2E5ED] h-screen gap-16">
				<section className="relative w-1/2 bg-[#5E50A1]/60 text-white grid justify-center items-center h-[100%] ">
					<div className="absolute top-0 flex m-4">
						<Image src="/assets/icons/logo.svg" width={24} height={24} />
						<p className="ml-2">Peworld</p>
					</div>

					<h1 className="text-3xl w-7/12 mx-auto font-semibold">
						Temukan developer berbakat & terbaik di berbagai bidang keahlian
					</h1>
				</section>

				<section className="w-1/2 h-[100%] ">
					<h3 className="text-2xl font-semibold mt-20">Halo, Pewpeople</h3>

					<p className="mt-2 text-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum
						et dui rhoncus auctor.
					</p>

					<form className="mt-10">
						<div>
							<label className="block text-sm font-medium leading-6 text-gray-400">
								Email
							</label>

							<input
								name="email"
								type="text"
								required
								placeholder="Masukan alamat email"
								className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>

						<div className="mt-5">
							<label className="block text-sm font-medium leading-6 text-gray-400">
								Kata Sandi
							</label>

							<input
								name="password"
								type="password"
								autocomplete="current-password"
								required
								placeholder="Masukan kata sandi"
								className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>

						<button
							type="submit"
							className="flex w-full mt-16 justify-center rounded-md bg-[#FBB017] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FBB017]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
							Masuk
						</button>
					</form>

					<p className="text-center mt-6">
						Anda belum punya akun?{" "}
						<Link href="/register" className="text-[#FBB017] hover:text-[#FBB017]/80">
							Daftar disini
						</Link>
					</p>
				</section>
			</div>
		</>
	);
};

export default LoginPage;
