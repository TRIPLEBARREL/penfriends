import Envelope from "./components/envelope";

export default function Envelopes() {
  return (
    <div
      className={`grid grid-cols-1 relative justify-items-center lg:scale-80`}
    >
      <div className={` hover:mb-10 z-30 hover:z-40`}>
        <Envelope />
      </div>
      <div className={` top-20 left-3 z-20 hover:z-40 rotate-3`}>
        <Envelope />
      </div>
      <div className={` top-40 z-10 hover:z-40 -rotate-3`}>
        <Envelope />
      </div>
    </div>
  );
}
