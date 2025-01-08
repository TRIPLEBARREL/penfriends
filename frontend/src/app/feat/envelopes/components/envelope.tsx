import Image from "next/image";

interface Props {
  zindex: number;
}

export default function Envelope({ zindex }: Props) {
  return (
    <div
      className={`bg-gradient-to-b from-white to-stone-100 rounded-lg shadow-xl hover:scale-105 transform transition ease-out duration-200 -rotate-1 z-${zindex} font-sans aspect-video select-none w-[40vw] h-[20vw]`}
    >
      <div className={`p-20 text-[1.15vw]`}>
        <h3 className="font-bold">This is a cool letter title</h3>
        <Image
          className={`drop-shadow-sm rotate-12`}
          src="/stickers/smiley.png"
          width={100}
          height={100}
          alt=""
        />
      </div>
    </div>
  );
}
