function AuthFailPage() {
	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-[79.25vh] lg:py-0">
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-stone-800 dark:border-stone-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Authentication Failed
						</h1>
						<p>Did you forget your password, Ryan?</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AuthFailPage;
