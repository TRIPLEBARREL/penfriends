interface Props {
  zindex: number;
}

export default function Envelope({ zindex }: Props) {
  return (
    <div
      className={`h-80 bg-white rounded-lg shadow-xl hover:scale-105 transform transition ease-out duration-200 -rotate-1 z-${zindex} w-full`}
    >
      <h1>123test</h1>
    </div>
  );
}
