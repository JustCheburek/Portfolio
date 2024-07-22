import Image from "next/image";
import Link from "next/link";
import {ComponentPropsWithoutRef, PropsWithChildren} from "react";
import {DateBox, TimeBox} from "./date";
import {Weather} from "@/server/weather";
import {cn} from "@/server/cn";

export const MaxSize = ({children, className, ...props}: PropsWithChildren<ComponentPropsWithoutRef<"div">>) => (
		<div className={cn("container grid items-start justify-center gap-4 lg:grid-cols-2 m-16", className)} {...props}>
			{children}
		</div>
)

export const Section = ({children, className, ...props}: PropsWithChildren<ComponentPropsWithoutRef<"section">>) => (
		<section className={cn("grid gap-4", className)} {...props}>
			{children}
		</section>
)

export const MiniArticle = ({children, className}: PropsWithChildren) => (
		<article className={cn("grid items-center justify-center p-6 ring-2 ring-neutral-800/80 rounded-xl hover:scale-[102%] transition duration-500", className)}>
			{children}
		</article>
)

export const Article = ({children, className}: PropsWithChildren) => (
		<MiniArticle className={cn("justify-start gap-4", className)}>
			{children}
		</MiniArticle>
)

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export default async function Portfolio() {
	const weather = await Weather()

	return (
			<main className="grid items-center justify-center text-balance font-medium">
				<MaxSize>
					<Section>
						<div className="grid lg:grid-cols-4 gap-4">
							<MiniArticle className="col-span-2">
								<TimeBox/>
							</MiniArticle>

							<MiniArticle>
								<DateBox/>
							</MiniArticle>

							<MiniArticle>
								<p className="text-neutral-200/95" suppressHydrationWarning>
									{capitalizeFirstLetter(weather.description)}
								</p>
								<small className="text-neutral-400">
									{weather.temp} °C
								</small>
							</MiniArticle>
						</div>

						<Article>
							<div className="flex gap-4 items-center flex-wrap">
								<Image src="/me.png" alt="Голова скина лягушки" width={90} height={90}/>
								<div className="flex flex-col gap-2">
									<h1 className="text-3xl font-semibold">
										Привет! Я <span className="text-green-400 select-all">@JustCheburek</span>
									</h1>
									<ul role="list" className="flex gap-x-4 gap-y-2 flex-wrap text-neutral-200/95">
										<li className="px-3 py-1 ring-1 ring-neutral-800 rounded-xl">
											Веб-разработка
										</li>
										<li className="px-3 py-1 ring-1 ring-neutral-800 rounded-xl">
											Разработка ботов
										</li>
									</ul>
								</div>
							</div>

							<div className="grid gap-0.5 text-xl text-neutral-200/95">
								<h3>
									Фуллстак-разработчик.
									Веду проект{" "}
									<Link href="https://майнбридж.рф" className="text-cyan-500/80" target="_blank">
										MineBridge
									</Link>.<br/>
									Пишу сайты на заказ
								</h3>
							</div>
						</Article>
					</Section>

					<Section>
						<Article>
							<Link href={"/projects"} className="flex flex-col gap-2">
								<h2 className="text-2xl">
									Все проекты
								</h2>
								<p className="text-neutral-200/80">
									Завершённые, в разработке или заброшенные
								</p>
							</Link>
						</Article>

						<Article>
							<Link href={"/skills"} className="flex flex-col gap-2">
								<h2 className="text-2xl">
									Языки программирования
								</h2>
								{/*<div>
									<p>
										TypeScript
									</p>
								</div>*/}
							</Link>
						</Article>
					</Section>
				</MaxSize>
			</main>
	)
}

/*export default function Home() {
	return (
			<div
					className="opacity-100 -translate-y-2 scale-[100%] flex flex-col pt-12 sm:pt-24 xl:py-24 gap-20 lg:h-screen xl:justify-center px-8 smooth">
				<div className="w-full max-w-[85rem] mx-auto">
					<div className="grid lg:grid-cols-2 gap-8">
						<div className="hidden lg:grid items-start lg:grid-cols-3 gap-8 w-full">
							<div className="flex w-full lg:col-span-3 gap-6 justify-between">
								<div
										className="p-4 sm:p-5 grid gap-3 items-start rounded-xl ring-2 ring-neutral-200/60 dark:bg-neutral-900/10 dark:ring-neutral-800/30 hover:shadow-xl smooth hover:scale-[101%] hover:opacity-90 active:opacity-80">
									<div className="flex gap-4 items-center"><p
											className="font-[Zed-Icons] text-neutral-500 dark:text-neutral-400 text-[16px]"></p><p
											className="font-[Zed] text-neutral-500 dark:text-neutral-400 text-[14px]">time.ts</p></div>
									<p className="font-[Zed] text-neutral-500 dark:text-neutral-300 text-[14px] sm:text-base">07:41:27 <span
											className="text-[12px] sm:text-[14px] opacity-60"><br/>UTC+3</span></p></div>
								<div
										className="p-4 sm:p-5 grid gap-3 items-start rounded-xl ring-2 ring-neutral-200/60 dark:bg-neutral-900/10 dark:ring-neutral-800/30 hover:shadow-xl smooth hover:scale-[101%] hover:opacity-90 active:opacity-80">
									<div className="flex gap-4 items-center"><p
											className="font-[Zed-Icons] text-neutral-500 dark:text-neutral-400 text-[16px]"></p><p
											className="font-[Zed] text-neutral-500 dark:text-neutral-400 text-[14px]">date.ts</p></div>
									<p className="font-[Zed] text-neutral-500 dark:text-neutral-300 text-[14px] sm:text-base">21
										июля <span className="text-[12px] sm:text-[14px] opacity-60"><br/>2024 г.</span></p></div>
								<div
										className="p-5 grid gap-3 items-start rounded-xl ring-2 ring-neutral-200/60 dark:bg-neutral-900/10 dark:ring-neutral-800/30 hover:shadow-xl smooth hover:scale-[101%] hover:opacity-90 active:opacity-80 flex-1">
									<div className="flex gap-4 items-center"><p
											className="font-[Zed-Icons] text-neutral-500 dark:text-neutral-400 text-[16px]"></p><p
											className="font-[Zed] text-neutral-500 dark:text-neutral-400 text-[14px]">weather.json</p></div>
									<p className="font-[Zed] text-neutral-500 dark:text-neutral-300 fade">Дымка <br/> <span
											className="text-[12px] opacity-70">+12.3 °C</span></p></div>
							</div>
							<div
									className="grid items-start rounded-xl ring-2 ring-neutral-200/60 dark:bg-neutral-900/10 dark:ring-neutral-800/30 hover:shadow-xl smooth hover:scale-[101%] hover:opacity-90 active:opacity-80 gap-6 p-8 lg:col-span-3">
								<div className="flex gap-4 items-center"><p
										className="font-[Zed-Icons] text-neutral-500 dark:text-neutral-400 text-[20px]"></p><p
										className="font-[Zed] text-neutral-500 dark:text-neutral-400 text-[14px]">about.md</p></div>
								<div className="grid md:flex gap-6 items-center">
									<div className="grid gap-5 relative">
										<div className="ellipsis-animation absolute -top-8 left-36">
											<div className="size-24 rounded-full blur-[60px] opacity-20 bg-amber-500"></div>
										</div>
										<h1 className="font-[Onest] text-neutral-700 dark:text-neutral-200 font-semibold text-xl sm:text-2xl">Привет!
											Я <span className="gradient-text font-[Onest]">@ggskyone</span></h1>
										<div className="hidden md:flex flex-wrap gap-4">
											<div
													className="flex gap-4 items-center px-4 py-1.5 ring-2 rounded-full ring-neutral-200 dark:ring-neutral-900/80">
												<p className="font-[Zed-Icons] text-neutral-500 dark:text-neutral-300"></p><p
													className="font-[Raleway] text-[14px] font-medium text-neutral-500 dark:text-neutral-300">Веб-разработка</p>
											</div>
											<div
													className="flex gap-4 items-center px-4 py-1.5 ring-2 rounded-full ring-neutral-200 dark:ring-neutral-900/80">
												<p className="font-[Zed-Icons] text-neutral-500 dark:text-neutral-300"></p><p
													className="font-[Raleway] text-[14px] font-medium text-neutral-500 dark:text-neutral-300">Разработка
												ботов</p></div>
										</div>
									</div>
								</div>
								<p className="font-[Raleway] text-neutral-500 dark:text-neutral-300/80 font-medium py-2">
									Я <span className="text-[13px] opacity-70">(почти)</span> фуллстак-разработчик из России! Мне 16 лет.
									Пишу разные вещи на TypeScript, включая ботов, фронтенд и бекенд. Сделаю вам фронтенд на заказ или
									простой бекенд или бота. Если вы заинтересованы напишите мне!
								</p>
								<div className="grid lg:flex gap-4 md:gap-8 w-full">
									<button
											className="flex gap-4 items-center px-6 py-2 ring-2 rounded-xl bg-neutral-100/20 ring-neutral-200/40 dark:bg-neutral-900/20 dark:ring-neutral-800/40 hover:scale-[98%] active:scale-[96%] smooth">
                      <span
		                      className="icon-[mingcute--telegram-line] size-5 text-neutral-600 dark:text-neutral-300"></span>
										<p className="font-[Raleway] font-medium text-neutral-600 dark:text-neutral-300">Связаться со
											мной</p></button>
									<button
											className="flex gap-4 items-center text-neutral-600 dark:text-neutral-300 px-6 py-2 ring-2 rounded-xl bg-neutral-100/20 ring-neutral-200/40 dark:bg-neutral-900/20 dark:ring-neutral-800/40 hover:scale-[98%] active:scale-[96%] smooth">
										<span className="icon-[mingcute--moon-stars-line] size-5"></span><p
											className="font-[Raleway] font-medium">Сменить тему</p></button>
								</div>
							</div>
							<div
									className="p-6 grid gap-3 items-start rounded-xl ring-2 ring-neutral-200/60 dark:bg-neutral-900/10 dark:ring-neutral-800/30 hover:shadow-xl smooth hover:scale-[101%] hover:opacity-90 active:opacity-80 lg:col-span-3">
								<div className="flex gap-4 items-center"><p
										className="font-[Zed-Icons] text-neutral-500 dark:text-neutral-400 text-[20px]"></p><p
										className="font-[Zed] text-neutral-500 dark:text-neutral-400 text-[14px]">spotify.json</p></div>
								<div className="grid pt-4">
									<div className="grid md:flex gap-6 relative">
										<div
												className="flex justify-center items-center text-center size-20 rounded-xl bg-neutral-200/30 dark:bg-neutral-900/50 fade-appear smooth">
											<div className="flex justify-center"><p
													className="font-[Zed-Icons] text-neutral-500 dark:text-neutral-700 text-3xl"></p></div>
										</div>
										<div className="ellipsis-animation absolute -top-6 -left-6">
											<div className="size-32 rounded-full blur-[60px] opacity-50"></div>
										</div>
										<div className="flex flex-col gap-2 justify-start items-start text-left"><h1
												className="font-[Raleway] text-neutral-600 dark:text-neutral-100 fade font-semibold text-xl">Сейчас
											ничего не играет</h1><h1
												className="font-[Zed] text-neutral-500 dark:text-neutral-400 fade text-[14px]">Тут мог быть
											классный исполнитель</h1>
											<div className="flex fade items-center gap-4"><h1
													className="font-[Zed] text-neutral-400 dark:text-neutral-500 text-[12px]">0:00</h1>
												<progress className="flex-1 w-40 sm:w-48 md:w-64"></progress>
												<h1 className="font-[Zed] text-neutral-400 dark:text-neutral-500 text-[12px]">0:00</h1></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="grid items-start gap-8">
							<div
									className="p-6 grid gap-3 items-start rounded-xl ring-2 ring-neutral-200/60 dark:bg-neutral-900/10 dark:ring-neutral-800/30 hover:shadow-xl smooth hover:scale-[101%] hover:opacity-90 active:opacity-80 gap-6 p-6 md:p-8">
								<div className="flex gap-4 items-center"><p
										className="font-[Zed-Icons] text-neutral-500 dark:text-neutral-400 text-[20px]"></p><p
										className="font-[Zed] text-neutral-500 dark:text-neutral-400 text-[14px]">projects.json</p></div>
								<div className="flex w-full"><a href="/projects"
								                                className="grid gap-4 items-center p-6 ring-2 w-full rounded-xl ring-neutral-200/60 dark:ring-neutral-800/40 hover:scale-[98%] active:scale-[96%] hover:opacity-90 active:opacity-80 hover:shadow-xl smooth">
									<div className="grid sm:flex gap-3 items-center"><p
											className="font-[Zed-Icons] text-neutral-500 dark:text-neutral-200 text-[20px]"></p><p
											className="font-[Raleway] font-semibold text-neutral-500 dark:text-neutral-200">Просмотреть все
										проекты</p></div>
									<p className="font-[Zed] text-neutral-500 dark:text-neutral-400 text-[14px] text-pretty">Завершенные,
										в разработке, замороженные проекты! Здесь все мои проекты, включая личные и сайты на заказ.</p>
								</a></div>
							</div>
							<div
									className="p-6 grid gap-3 items-start rounded-xl ring-2 ring-neutral-200/60 dark:bg-neutral-900/10 dark:ring-neutral-800/30 hover:shadow-xl smooth hover:scale-[101%] hover:opacity-90 active:opacity-80 gap-6 p-6 md:p-8">
								<div className="flex gap-4 items-center"><p
										className="font-[Zed-Icons] text-neutral-500 dark:text-neutral-400 text-[20px]"></p><p
										className="font-[Zed] text-neutral-500 dark:text-neutral-400 text-[14px]">skills.md</p></div>
								<div className="grid items-start"><h1
										className="font-[Raleway] text-neutral-600 dark:text-neutral-200 font-semibold text-xl">Языки
									программирования </h1></div>
								<div className="flex w-full">
									<div className="grid gap-8 lg:grid-cols-3 w-full">
										<div
												className="grid gap-3 items-center p-5 ring-2 w-full rounded-xl ring-neutral-200/60 dark:ring-neutral-800/40 hover:scale-[102%] hover:shadow-xl hover:opacity-80 smooth">
											<div className="flex gap-3 items-center"><p
													className="font-[Zed-Icons] text-neutral-600 dark:text-neutral-200 text-[20px]"></p><p
													className="font-[Zed] text-neutral-600 dark:text-neutral-200">TypeScript</p></div>
											<div className="flex gap-4 items-center">
												<svg height="14" width="14" xmlns="http://www.w3.org/2000/svg">
													<circle r="3" cx="7" cy="7" style={{fill: "rgb(16, 185, 129);"}}></circle>
												</svg>
												<p className="font-[Zed] text-[13px]" style={{color: "rgb(16, 185, 129);"}}>Active</p>
												<div className="ellipsis-animation absolute">
													<div className="size-20 rounded-full blur-[60px] opacity-30 safari-fix"
													     style={{backgroundColor: "rgb(16, 185, 129);"}}></div>
												</div>
											</div>
										</div>
										<div
												className="grid gap-3 items-center p-5 ring-2 w-full rounded-xl ring-neutral-200/60 dark:ring-neutral-800/40 hover:scale-[102%] hover:shadow-xl hover:opacity-80 smooth">
											<div className="flex gap-3 items-center"><p
													className="font-[Zed-Icons] text-neutral-600 dark:text-neutral-200 text-[20px]"></p><p
													className="font-[Zed] text-neutral-600 dark:text-neutral-200">Java</p></div>
											<div className="flex gap-4 items-center">
												<svg height="14" width="14" xmlns="http://www.w3.org/2000/svg">
													<circle r="3" cx="7" cy="7" style={{fill: "rgb(245, 158, 11);"}}></circle>
												</svg>
												<p className="font-[Zed] text-[13px]" style={{color: "rgb(245, 158, 11);"}}>Plan to look</p>
												<div className="ellipsis-animation absolute">
													<div className="size-20 rounded-full blur-[60px] opacity-30 safari-fix"
													     style={{backgroundColor: "rgb(245, 158, 11);"}}></div>
												</div>
											</div>
										</div>
										<div
												className="grid gap-3 items-center p-5 ring-2 w-full rounded-xl ring-neutral-200/60 dark:ring-neutral-800/40 hover:scale-[102%] hover:shadow-xl hover:opacity-80 smooth">
											<div className="flex gap-3 items-center"><p
													className="font-[Zed-Icons] text-neutral-600 dark:text-neutral-200 text-[20px]"></p><p
													className="font-[Zed] text-neutral-600 dark:text-neutral-200">Rust</p></div>
											<div className="flex gap-4 items-center">
												<svg height="14" width="14" xmlns="http://www.w3.org/2000/svg">
													<circle r="3" cx="7" cy="7" style={{fill: "rgb(245, 158, 11);"}}></circle>
												</svg>
												<p className="font-[Zed] text-[13px]" style={{color: "rgb(245, 158, 11);"}}>Plan to look</p>
												<div className="ellipsis-animation absolute">
													<div className="size-20 rounded-full blur-[60px] opacity-30 safari-fix"
													     style={{backgroundColor: "rgb(245, 158, 11);"}}></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="grid items-start"><h1
										className="font-[Raleway] text-neutral-600 dark:text-neutral-200 font-semibold text-xl">Фреймворки,
									планы, прочие навыки, etc. </h1></div>
								<div className="flex w-full">
									<a href="/skills"
									   className="grid gap-4 items-center p-6 ring-2 w-full rounded-xl ring-neutral-200/60 dark:ring-neutral-800/40 hover:scale-[98%] active:scale-[96%] hover:opacity-90 active:opacity-80 hover:shadow-xl smooth">
										<div className="grid sm:flex gap-3 items-center"><p
												className="font-[Zed-Icons] text-neutral-500 dark:text-neutral-200 text-[20px]"></p><p
												className="font-[Raleway] font-semibold text-neutral-500 dark:text-neutral-200">Просмотреть все
											навыки</p></div>
										<p className="font-[Zed] text-neutral-500 dark:text-neutral-400 text-[14px] text-pretty">
											Языки, которые я хочу выучить, фреймворки, с которыми я работаю, и прочие классные штуки!
										</p></a></div>
							</div>
						</div>
					</div>
					<div className="absolute flex pt-8 pb-16"><p
							className="font-[Raleway] font-semibold text-neutral-300 dark:text-neutral-800 text-[15px] bottom-[70px]">Copyright
						© 2024 GGSkyOne. Все права защищены. Скачивание, копирование и <br
								className="flex md:hidden"/> редактирование не допускается</p></div>
				</div>
			</div>
	);
}*/
