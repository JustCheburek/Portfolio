import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import {PropsWithChildren} from "react";

const inter = Montserrat({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Портфолио | JustCheburek",
	description: "Fullstack разработчик, пишу сайты на заказ",
};

export default function Layout(
		{
			children,
		}: PropsWithChildren) {
	return (
			<html lang="ru">
			<body className={inter.className}>{children}</body>
			</html>
	);
}
