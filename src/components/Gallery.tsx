import Image from "next/image";
import Link from "next/link";

export const Gallery = () => {
  return (
    <section className="flex flex-col items-center ">
      <h2 className="text-[50px] leading-[100%] mb-[50px] md:mb-[40px] md:text-[30px]">
        Фотографии <br /> можно будет <br /> скачать здесь
      </h2>
      <div className="relative w-[250px] aspect-square bg-white rounded-full flex items-center justify-center">
        <Image width={117} height={117} src="/images/svg/camera.svg" alt="Иконка для ссылки на фотографии" />
        <Link className="absolute top-0 left-0 w-full h-full" href="#"></Link>
      </div>
    </section>
  );
};