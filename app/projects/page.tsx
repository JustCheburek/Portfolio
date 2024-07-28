import { Columns, LinkArticle, Main, Section } from "@components/basic";
import { H1, H1Box, H2, P, Small } from "@components/text";
import Link from "next/link";
import { CATCHCAM_URL, HH_URL, JARVIS_URL, MB_URL, TVOK_URL } from "@/consts";
import { MinebridgeSvg } from "@ui/SVGS";
import Image from "next/image";

export default function Projects() {
  return (
    <Main>
      <H1Box>
        Проекты
      </H1Box>

      <Columns>
        <Section>
          <H2 className="text-center">
            Сайты
          </H2>

          <LinkArticle href={MB_URL}>
            <MinebridgeSvg size="3em" />
            <div>
              <H2 className="text-mb">
                MineBridge
              </H2>
              <P>
                майнкрафт сервер
              </P>
            </div>
          </LinkArticle>

          <LinkArticle href={HH_URL} frozen>
            <div className="w-[3.3em] h-[3.3em] relative">
              <Image src="/hh.jpeg" alt="Лого HH - hands of help" className="rounded-full" fill />
            </div>
            <div>
              <H2 className="text-hh">
                Руки помощи
              </H2>
              <P>
                самопомощь онлайн
              </P>
            </div>
          </LinkArticle>

          <LinkArticle href={TVOK_URL} frozen>
            <div className="w-[3.3em] h-[3.3em] relative">
              <Image src="/tvok.png" alt="Лого HH - hands of help" className="rounded-full" fill />
            </div>
            <div>
              <H2 className="text-tvok">
                TVOK
              </H2>
              <P>
                творческая коалиция
              </P>
            </div>
          </LinkArticle>
        </Section>

        <Section className="text-center">
          <H2>
            Другое
          </H2>

          <LinkArticle href={JARVIS_URL}>
            <div>
              <H2 className="text-fuchsia-600/80">
                Jarvis
              </H2>
              <P>
                умный помощник
              </P>
            </div>
          </LinkArticle>

          <LinkArticle href={CATCHCAM_URL}>
            <div>
              <H2 className="text-orange-500">
                CatchCam
              </H2>
              <P>
                AR игра
              </P>
              <Small>
                нужна камера
              </Small>
            </div>
          </LinkArticle>
        </Section>
      </Columns>
    </Main>
  );
}