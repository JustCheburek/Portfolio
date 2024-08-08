import { Article, Columns, Main, Section } from "@components/basic";
import { H1Box, H2, H3, P } from "@components/text";
import Image from "next/image";
import type { Metadata } from "next";

const SkillsURL = new URL("/skills", process.env.NEXT_PUBLIC_URL!);

export const metadata: Metadata = {
  title: "Навыки",
  description: "Знаю 3 языка и много всего другого!",
  alternates: {
    canonical: SkillsURL
  },
  openGraph: {
    title: "Навыки",
    description: 'Знаю 3 языка и много всего другого!',
    url: SkillsURL
  },
};

export default function Skills() {
  return (
    <Main>
      <H1Box>
        Навыки
      </H1Box>

      <Columns>
        <Section>
          <H2 className="text-center">
            Языки программирования
          </H2>

          <Section>
            <Article href="https://www.typescriptlang.org">
              <span className="icon-[logos--typescript-icon] size-[2em]" />
              <div>
                <H2 className="text-ts">
                  TypeScript
                </H2>
                <P>
                  JavaScript с динамической типизацией
                </P>
              </div>
            </Article>

            <Article href="https://developer.mozilla.org/ru/docs/Web/JavaScript">
              <span className="icon-[logos--javascript] size-[2em]" />
              <div>
                <H2 className="text-js">
                  JavaScript
                </H2>
                <P>
                  Браузерный язык программирования
                </P>
              </div>
            </Article>

            <Article href="https://www.python.org">
              <span className="icon-[logos--python] size-[2em]" />
              <div>
                <H2 className="text-py">
                  Python
                </H2>
                <P>
                  Язык для входа в программирование
                </P>
              </div>
            </Article>
          </Section>

          <H2 className="text-center">
            Боты на python
          </H2>

          <Section className="grid-cols-2">
            <Article href="https://python-telegram-bot.org/">
              <div className="size-[2em] relative">
                <Image
                  src="https://raw.githubusercontent.com/python-telegram-bot/logos/master/logo/png/ptb-logo_240.png"
                  alt="Python telegram bot"
                  fill
                />
              </div>
              <div>
                <H3 className="text-telegram">
                  Telegram
                </H3>
              </div>
            </Article>

            <Article href="https://discordpy.readthedocs.io/en/latest/index.html">
              <span className="icon-[logos--discord-icon] size-[2em]" />
              <div>
                <H3 className="text-discord">
                  Discord.py
                </H3>
              </div>
            </Article>
          </Section>
        </Section>
        <Section>
          <H2 className="text-center">
            Утилиты
          </H2>

          <Section className="grid-cols-2">
            <Article href="https://nextjs.org">
              <span className="icon-[logos--nextjs-icon] size-[2em]" />
              <div>
                <H2 className="text-nextjs">
                  Next.js
                </H2>
                <P>
                  <span className="text-react">React</span>-фреймворк
                </P>
              </div>
            </Article>

            <Article href="https://reactjs.org">
              <span className="icon-[logos--react] size-[2em]" />
              <div>
                <H2 className="text-react">
                  React
                </H2>
                <P>
                  UI библиотека
                </P>
              </div>
            </Article>
          </Section>

          <H2 className="text-center">
            Дизайн
          </H2>
          <Section className="grid-cols-2">
            <Article href="https://tailwindcss.com" className="col-span-2">
              <span className="icon-[logos--tailwindcss-icon] size-[2em]" />
              <div>
                <H2 className="text-tailwind">
                  Tailwind
                </H2>
                <P>
                  CSS фреймворк
                </P>
              </div>
            </Article>

            <Article href="https://sass-lang.com">
              <span className="icon-[logos--sass] size-[2em]" />
              <div>
                <H2 className="text-sass">
                  Sass
                </H2>
                <P>
                  CSS препроцессор
                </P>
              </div>
            </Article>

            <Article href="https://www.figma.com">
              <span className="icon-[logos--figma] size-[2em]" />
              <div>
                <H2 className="text-figma">
                  Figma
                </H2>
              </div>
            </Article>
          </Section>

          <H2 className="text-center">
            Базы данных
          </H2>
          <Section className="grid-cols-2">
            <Article href="https://mongodb.com/">
              <span className="icon-[logos--mongodb-icon] size-[2em]" />
              <div>
                <H2 className="text-mongodb">
                  MongoDB
                </H2>
                <P>
                  ORM База данных
                </P>
              </div>
            </Article>

            <Article href="https://typegoose.github.io/typegoose/">
              <div>
                <H2 className="text-typegoose">
                  Typegoose
                </H2>
                <P>
                  Для работы с MongoDB
                </P>
              </div>
            </Article>
          </Section>
        </Section>
      </Columns>
    </Main>
  );
}