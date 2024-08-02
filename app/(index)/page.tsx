import Image from "next/image";
import { Weather } from "@server/weather";
import { Spotify } from "@server/spotify";
import { Article, Columns, Main, Section } from "@components/basic";
import { H1, H2, H3, ListHeading, P, Small } from "@components/text";
import { HH_URL, MB_URL, TG_URL, TVOK_URL } from "@/consts";
import dayjs from "dayjs";
import "dayjs/locale/ru";

dayjs.locale("ru");

function msRender(ms?: number) {
  if (!ms) return "00:00";

  const minutes = Math.floor(ms / 60000);
  const seconds = Number(((ms % 60000) / 1000).toFixed(0));
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

export default async function Portfolio() {
  const weather = await Weather();
  const spotify = await Spotify();

  return (
    <Main>
      <Columns>
        <Section>
          <Section className="lg:grid-cols-4">
            <Article>
              <P>
                {dayjs().format("H a")}
              </P>
              <Small>
                UTC+10
              </Small>
            </Article>

            <Article>
              <P>
                {dayjs().format("D MMMM")}
              </P>
              <Small>
                {dayjs().year()} г.
              </Small>
            </Article>

            <Article className="col-span-2">
              <P className="first-letter:uppercase">
                {weather.weather[0].description}
              </P>
              <Small>
                {weather.main.temp} °C
              </Small>
            </Article>
          </Section>

          <Article box>
            <div className="flex gap-6 items-center flex-wrap">
              <Image
                src="/me.png" alt="Голова скина лягушки"
                width={90} height={90}
                className="hover:scale-110 transition duration-1000"
              />
              <div className="flex flex-col gap-2">
                <H1 color={false}>
                  Привет! Я <span className="text-green-400 select-all">@JustCheburek</span>
                </H1>
                <ul role="list" className="flex gap-x-4 gap-y-2 flex-wrap text-neutral-300/85">
                  <li className="px-3 py-1 ring-1 ring-neutral-800 rounded-xl">
                    <P>
                      Веб-разработка
                    </P>
                  </li>
                  <li className="px-3 py-1 ring-1 ring-neutral-800 rounded-xl">
                    <P>
                      Разработка ботов
                    </P>
                  </li>
                </ul>
              </div>
            </div>

            <H3>
              Фуллстак-разработчик. Сделаю вам сайт на заказ
            </H3>

            <Section className="grid-cols-2 text-neutral-300/85 hover:text-neutral-200/95 duration-100">
              <Article href={TG_URL} className="p-3">
                <span className="icon-[logos--telegram] w-[1.2em] h-[1.2em]" />
                Написать
              </Article>
              {/* todo: миникнопки для других соцсетей */}
            </Section>
          </Article>

          <Article className="flex" box>
            {spotify?.item?.album?.images[1]?.url
              ? <Image
                alt="Плейлист"
                src={spotify?.item?.album?.images[1]?.url}
                width="100"
                height="100"
                className="aspect-square rounded"
              />
              : <span className="icon-[pepicons-pencil--play-off] w-[100px] h-[100px] text-neutral-300/85" />
            }
            <div className="grid gap-2">
              <div>
                <H3>
                  {spotify?.item?.name ?? "Сейчас ничего не играет"}
                </H3>
                <P>
                  {spotify?.item?.artists?.map(artist => artist.name).join(", ") ?? ""}
                </P>
              </div>
              <div className="flex fade items-center gap-4">
                <Small>
                  {msRender(spotify?.progress_ms || 0)}
                </Small>
                <progress
                  className="flex-1 w-40 sm:w-48 md:w-64 h-1 rounded-full"
                  value={spotify?.progress_ms || 0}
                  max={spotify?.item?.duration_ms || 0}
                />
                <Small>
                  {msRender(spotify?.item?.duration_ms || 0)}
                </Small>
              </div>
            </div>
          </Article>
        </Section>

        <Section>
          <Article box>
            <div>
              <H2>
                Все проекты
              </H2>
              <Small>
                Завершённые, в разработке или замороженные
              </Small>
            </div>

            <Section className="grid-cols-3">
              <Article href={MB_URL}>
                <P className="text-mb">
                  MineBridge
                </P>
              </Article>

              <Article href={HH_URL}>
                <P className="text-hh">
                  Руки помощи
                </P>
              </Article>

              <Article href={TVOK_URL}>
                <P className="text-tvok">
                  TVOK
                </P>
              </Article>

              <Article href={"/projects"} className="col-span-3">
                <ListHeading>
                  Все проекты
                </ListHeading>
              </Article>
            </Section>
          </Article>

          <Article box>
            <H2>
              Навыки
            </H2>
            <Section className="grid-cols-3 font-medium">
              <Article href="https://www.typescriptlang.org/">
                <span className="icon-[logos--typescript-icon] w-[1.2em] h-[1.2em]" />
                <P className="text-ts">TypeScript</P>
              </Article>

              <Article href="https://developer.mozilla.org/ru/docs/Web/JavaScript">
                <span className="icon-[logos--javascript] w-[1.2em] h-[1.2em]" />
                <P className="text-js">JavaScript</P>
              </Article>

              <Article href="https://www.python.org/">
                <span className="icon-[logos--python] w-[1.2em] h-[1.2em]"></span>
                <P>Python</P>
              </Article>

              <Article href={"/skills"} className="col-span-3">
                <ListHeading>
                  Все навыки
                </ListHeading>
              </Article>
            </Section>
          </Article>
        </Section>
      </Columns>
    </Main>
  );
}