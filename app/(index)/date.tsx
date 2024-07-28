"use client";

import {useEffect, useState} from "react";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { P, Small } from "@components/text";

dayjs.locale("ru")

export function TimeBox() {
	const [date, setDate] = useState(dayjs());

	useEffect(() => {
		setInterval(() => setDate(dayjs()), 1000);
	}, []);

	return (
			<>
				<P suppressHydrationWarning>
					{date.format("H a")}
				</P>
				<Small>
					UTC+10
				</Small>
			</>
	)
}

export function DateBox() {
	const [date, setDate] = useState(dayjs());

	useEffect(() => {
		setInterval(() => setDate(dayjs()), 10000);
	}, []);

	return (
			<>
				<P suppressHydrationWarning>
					{date.format("D MMMM")}
				</P>
				<Small>
					{date.year()} г.
				</Small>
			</>
	)
}