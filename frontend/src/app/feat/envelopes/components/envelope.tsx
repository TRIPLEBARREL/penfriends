interface Props {
  zindex: number;
}

export default function Envelope({ zindex }: Props) {
  return (
    <div
      className={`h-80 bg-gradient-to-b from-white to-slate-50 rounded-lg shadow-xl hover:scale-105 transform transition ease-out duration-200 -rotate-1 z-${zindex} w-full`}
    ></div>
  );
}
