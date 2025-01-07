import Envelope from "./components/envelope";

export default function Envelopes() {
  return (
    <div className={`flex flex-wrap relative`}>
      <div className={`absolute hover:mb-10 z-30 hover:z-40 w-full`}>
        <Envelope />
      </div>
      <div
        className={`absolute top-20 left-10 z-20 hover:z-40 w-full rotate-3`}
      >
        <Envelope />
      </div>
      <div className={`absolute top-40 z-10 hover:z-40 w-full -rotate-3`}>
        <Envelope />
      </div>
    </div>
  );
}
