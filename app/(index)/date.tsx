"use client";

import {useEffect, useState} from "react";
import dayjs from "dayjs";
import "dayjs/locale/ru";

dayjs.locale("ru")

export function TimeBox() {
	const [date, setDate] = useState(dayjs());

	useEffect(() => {
		setInterval(() => setDate(dayjs()), 1000);
	}, []);

	return (
			<>
				<p className="text-neutral-200/95" suppressHydrationWarning>
					{date.format("H a")}
				</p>
				<small className="text-neutral-400">
					UTC+10
				</small>
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
				<p className="text-neutral-200/95" suppressHydrationWarning>
					{date.format("D MMMM")}
				</p>
				<small className="text-neutral-400">
					{date.year()} г.
				</small>
			</>
	)
}