import Image from "next/image";

export interface Envelope {
  id: string;
  title: string;
  content: string;
}

export default function Envelope() {
  return (
    <div
      className={`
        rotate-[0.4deg]
        [&:nth-child(3n-1)]:-rotate-2
        [&:nth-child(3n-1)]:-mx-3
        [&:nth-child(3n)]:rotate-2
        [&:nth-child(3n)]:mx-3
        hover:mb-24
        hover:scale-105
        hover:z-10
        transform
        ease-out
        duration-200
        -my-14`}
    >
      <div
        className={`bg-gradient-to-b from-white to-stone-100 shadow-xl transform ease-out duration-100 font-sans select-none max-w-xl h-72 aspect-[2/1] p-10`}
      >
        <div className={`h-full content-center opacity-95`}>
          <div className={`grid col-span-1 font-slab opacity-90`}>
            <h3 className="font-bold">This is an anonymous letter for you</h3>
            <h3 className="mt-3">This is a cool letter title</h3>
          </div>
        </div>
        <div
          className={`absolute top-3 right-3 flex items-center w-full justify-end pointer-events-none`}
        >
          <Image
            src={`/stamps/1.png`}
            alt={``}
            width={200}
            height={50}
            className={`opacity-50 h-12 absolute right-11 rotate-3 z-10`}
          />
          <Image
            src={`/stamps/airmail.png`}
            alt={``}
            width={100}
            height={100}
            className={`absolute -rotate-2 z-10 top-12 opacity-50`}
          />
          <Image
            src={`/stamps/flower.png`}
            alt={``}
            width={70}
            height={70}
            className={`-rotate-2`}
          />
        </div>
      </div>
    </div>
  );
}
