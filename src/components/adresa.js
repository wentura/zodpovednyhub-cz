import Image from "next/image";
import Link from "next/link";

export default function Adresa() {
  return (
    <div>
      <div className="mx-4 md:mx-2 text-center">
        <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis">
          ZODPOVĚDNÝ HUB
        </h3>
        <Link
          href="https://www.google.com/maps/place/Legion%C3%A1%C5%99%C5%AF+64%2F4,+276+01+M%C4%9Bln%C3%ADk/@50.3523219,14.4730207,17.83z/data=!4m6!3m5!1s0x470bddf957aace29:0x85a034ab59bc61a0!8m2!3d50.3524273!4d14.4736485!16s%2Fg%2F11c24zjfsp"
          target="_blank"
          className="underline"
        >
          <Image
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685539371/zodpovedny_hub/mapa_eaqebf.webp"
            width={800}
            height={500}
            alt="mapa"
            className="w-full lg:w-2/3 shadow-md mb-4 mx-auto"
          />
          <span className="text-xl">Legionářů 64, Mělník</span>
        </Link>
      </div>
    </div>
  );
}
