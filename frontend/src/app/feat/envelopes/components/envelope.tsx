interface Props {
  zindex: number;
}

export default function Envelope({ zindex }: Props) {
  return (
    <div
      className={`bg-gradient-to-b from-white to-stone-100 rounded shadow-xl hover:scale-105 transform transition ease-out duration-200 -rotate-1 z-${zindex} w-full font-sans aspect-video`}
    >
      <div className={`text-lg`}>
        <canvas className={`aspect-video`}></canvas>
      </div>
    </div>
  );
}
