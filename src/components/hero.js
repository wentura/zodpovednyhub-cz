import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-tmavaCta via-svetlaCta to-tmavaCta w-full">
      <div className="container mx-auto flex items-center h-24 md:h-44 justify-between">
        <div className="font-mono md:pl-4 flex align-middle content-center">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685539374/zodpovedny_hub/zh_logo_qlt1uv.webp"
              width={250}
              height={100}
              alt="logo Zodpovedny hub"
            />
          </Link>
          {/* <span class="nadpis text-2xl align-middle">zodpovědný HUB</span> */}
        </div>
        <div className="flex-1 ml-20 md:ml-44 font-light hidden md:flex md:flex-col">
          <ul className="flex uppercase justify-between pr-2 md:pr-4">
            {/* <li>HUB</li> */}
            <li>
              <Link href="https://www.zodpovednavyuka.cz/">e-shop</Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/groups/785835472952121"
                target="_blank"
              >
                kalendář akcí (Facebook)
              </Link>
            </li>
            {/* <li>
              <Link href="/minuleAkce">minulé akce</Link>
            </li> */}
            <li>
              {" "}
              <Link href="/#kontakt">kontakt</Link>
            </li>
          </ul>
          <div className="pt-4 flex justify-end items-center">
            <div className="flex flex-col flex-1 ">
              <div>&nbsp;</div>
              <div className="border-0 border-t border-neutral-800 mr-8">
                &nbsp;
              </div>
            </div>
            <ul className="flex uppercase justify-between gap-8 pr-2 md:pr-4">
              <li>
                <a
                  href="https://www.facebook.com/zodpovednavyuka"
                  target="_blank"
                >
                  <Image
                    src="/icons8-facebook.svg"
                    alt="FB"
                    width={30}
                    height={30}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/zodpovednavyuka/"
                  target="_blank"
                >
                  <Image
                    src="/icons8-instagram.svg"
                    alt="FB"
                    width={30}
                    height={30}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@zodpovednavyuka9474"
                  target="_blank"
                >
                  <Image
                    src="/icons8-youtube-logo.svg"
                    alt="FB"
                    width={30}
                    height={30}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-1 w-full mr-2 font-light md:hidden align-end text-end flex-col">
          <ul className="uppercase text-xs">
            <li>
              <Link href="https://www.zodpovednavyuka.cz/">e-shop</Link>
            </li>
            <li className="py-2">
              <Link href="/#akce">akce</Link>
            </li>
            {/* <li>YT</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
