import Image from "next/image";

interface Props {
  envelope: Envelope;
}

export interface Envelope {
  id: string;
  title: string;
  content: string;
}

export default function Envelope({ envelope }: Props) {
  return (
    <div
      className={`bg-gradient-to-b from-white to-stone-100 rounded-lg shadow-xl hover:scale-105 transform transition ease-out duration-200 -rotate-1 font-sans aspect-video select-none w-[40vw] h-[20vw] max-w-xl max-h-36`}
    >
      <div className={`p-[2vw] text-[1.15vw] h-full content-center opacity-95`}>
        <div className={`grid col-span-1`}>
          <h3 className="font-bold">This is a cool letter title</h3>
          <h3 className="mt-3">This is a cool letter title</h3>
        </div>
      </div>
    </div>
  );
}
