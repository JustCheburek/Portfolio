import Image from "next/image";
import { DateBox, TimeBox } from "./date";
import { Weather } from "@server/weather";
import { Spotify } from "@server/spotify";
import { Article, Columns, LinkArticle, Main, MiniArticle, Section } from "@components/basic";
import { H1, H2, H3, ListHeading, P, Small } from "@components/text";
import { HH_URL, MB_URL, TG_URL, TVOK_URL } from "@/consts";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function msRender(ms?: number) {
  if (!ms) return "00:00";

  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
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
            <MiniArticle>
              <TimeBox />
            </MiniArticle>

            <MiniArticle>
              <DateBox />
            </MiniArticle>

            <MiniArticle className="col-span-2">
              <P suppressHydrationWarning>
                {capitalizeFirstLetter(weather.description)}
              </P>
              <Small>
                {weather.temp} °C
              </Small>
            </MiniArticle>
          </Section>

          <Article>
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
              <LinkArticle href={TG_URL} className="p-3">
                <span className="icon-[logos--telegram] w-[1.2em] h-[1.2em]" />
                Написать
              </LinkArticle>
            </Section>
          </Article>

          <Article className="flex">
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
                  {spotify.item?.name ?? "Сейчас ничего не играет"}
                </H3>
                <P>
                  {spotify.item?.artists?.map(artist => artist.name).join(", ") ?? ""}
                </P>
              </div>
              <div className="flex fade items-center gap-4">
                <Small>
                  {msRender(spotify?.progress_ms || 0)}
                </Small>
                <progress
                  className="flex-1 w-40 sm:w-48 md:w-64 h-1 rounded-full"
                  value={spotify?.progress_ms || 0}
                  max={spotify.item?.duration_ms || 0}
                />
                <Small>
                  {msRender(spotify.item?.duration_ms || 0)}
                </Small>
              </div>
            </div>
          </Article>
        </Section>

        <Section>
          <Article>
            <div>
              <H2>
                Все проекты
              </H2>
              <Small>
                Завершённые, в разработке или замороженные
              </Small>
            </div>

            <Section className="grid-cols-3">
              <LinkArticle href={MB_URL}>
                <P className="text-mb">
                  MineBridge
                </P>
              </LinkArticle>

              <LinkArticle href={HH_URL}>
                <P className="text-hh">
                  Руки помощи
                </P>
              </LinkArticle>

              <LinkArticle href={TVOK_URL}>
                <P className="text-tvok">
                  TVOK
                </P>
              </LinkArticle>

              <LinkArticle href={"/projects"} className="col-span-3">
                <ListHeading>
                  Все проекты
                </ListHeading>
              </LinkArticle>
            </Section>
          </Article>

          <Article>
            <H2>
              Навыки
            </H2>
            <Section className="grid-cols-3">
              <LinkArticle href="https://www.typescriptlang.org/">
                <span className="icon-[logos--typescript-icon] w-[1.2em] h-[1.2em]" />
                <P>TypeScript</P>
              </LinkArticle>

              <LinkArticle href="https://developer.mozilla.org/ru/docs/Web/JavaScript">
                <span className="icon-[logos--javascript] w-[1.2em] h-[1.2em]" />
                <P>JavaScript</P>
              </LinkArticle>

              <LinkArticle href="https://www.python.org/">
                <span className="icon-[logos--python] w-[1.2em] h-[1.2em]"></span>
                <P>Python</P>
              </LinkArticle>

              <LinkArticle href={"/skills"} className="col-span-3">
                <ListHeading>
                  Все навыки
                </ListHeading>
              </LinkArticle>
            </Section>
          </Article>
        </Section>
      </Columns>
    </Main>
  );
}