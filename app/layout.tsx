import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import {PropsWithChildren} from "react";

const montserrat = Montserrat({subsets: ["latin"]});

export const metadata: Metadata = {
	title: { template: "%s • JustCheburek", default: "Портфолио • JustCheburek" },
	description: "Fullstack разработчик, пишу сайты на заказ!",
	authors: [{ name: "JustCheburek", url: new URL("https://t.me/JustCheburek") }],
	metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
	creator: "JustCheburek",
	alternates: {
		canonical: new URL(process.env.NEXT_PUBLIC_URL!)
	},
	openGraph: {
		type: 'profile',
		gender: "male",
		username: "JustCheburek",
		firstName: "Артём",
		title: { template: "%s • Портфолио • JustCheburek", default: "Портфолио • JustCheburek" },
		description: 'Fullstack разработчик, пишу сайты на заказ!',
		url: new URL(process.env.NEXT_PUBLIC_URL!),
		siteName: 'Портфолио • JustCheburek',
		images: { url: "/me.png", alt: "Аватарка" },
		locale: 'ru_RU',
		countryName: "Russia",
	},
};

export default function Layout(
		{
			children,
		}: PropsWithChildren) {
	return (
			<html lang="ru">
			<body className={`${montserrat.className} text-balance accent-green-400 caret-green-400 selection:bg-green-600/20 selection:text-green-400`}>
			{children}
			</body>
			</html>
	);
}
