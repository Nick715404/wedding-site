import Image from "next/image";
import { MotionBox } from "./MotionBox";

export const Flowers = () => {
  return (
    <>
      <MotionBox delay={0.1} className="absolute -top-[37rem] -left-[10rem] scale-[1.7]  md:hidden">
        <Image src="/images/flowers/1.png" priority alt="Цветок" width={908} height={1160}></Image>
      </MotionBox>
      <div className="absolute top-[12rem] -left-[28rem] scale-[1.8]  2xl:scale-[1.5] 2xl:top-[8rem] md:-left-[27rem] md:-top-[17rem] md:scale-[0.55]">
        <Image src="/images/flowers/2.png" priority alt="Цветок" width={800} height={1020}></Image>
      </div>
      <div className="absolute top-[54rem] -left-[20rem] scale-[2.4] z-50  2xl:-left-[28rem] md:scale-[0.8] md:top-[3rem] md:-left-[31rem]">
        <Image src="/images/flowers/3.png" priority alt="Цветок" width={752} height={1935}></Image>
      </div>
      <div className="absolute bottom-[32rem] -left-[10rem] scale-[1.4] z-50  2xl:-left-[20rem] md:scale-[0.6] md:top-[45rem] md:-left-[22rem]">
        <Image src="/images/flowers/4.png" alt="Цветок" width={960} height={984}></Image>
      </div>
      <div className="absolute bottom-0 left-0 scale-[1] z-20  2xl:scale-[0.7] 2xl:-bottom-[8rem] md:scale-[0.55] md:-bottom-[8.2rem] md:-left-[16rem] sm:-bottom-[7.6rem]">
        <Image src="/images/flowers/5.png" alt="Цветок" width={860} height={900}></Image>
      </div>
      <div className="absolute -top-[32rem] -right-[26rem] scale-[1.2] md:-top-[22rem] md:-right-[25rem] md:scale-[0.40]">
        <Image src="/images/flowers/6.png" alt="Цветок" width={1088} height={1130}></Image>
      </div>
      <div className="absolute top-[43rem] -right-[18rem] scale-[2] z-50  2xl:-right-[25rem] md:scale-[0.6] md:top-[41rem] md:-right-[20rem]">
        <Image src="/images/flowers/7.png" alt="Цветок" width={850} height={2186}></Image>
      </div>
      <div className="absolute -bottom-[2rem] -right-[28rem] scale-[1.3] z-50  2xl:scale-[0.5] md:scale-[0.5] md:-top-[26rem] md:-right-[34rem]">
        <Image src="/images/flowers/8.png" alt="Цветок" width={1108} height={1344}></Image>
      </div>
    </>
  )
}