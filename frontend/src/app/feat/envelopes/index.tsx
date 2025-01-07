import Envelope from "./components/envelope";

export default function Envelopes() {
  return (
    <div className={`flex flex-wrap relative`}>
      <div className={`absolute hover:mb-10 z-10 w-full`}>
        <Envelope />
      </div>
      <div className={`absolute top-48 hover:z-20 w-full rotate-3`}>
        <Envelope />
      </div>
    </div>
  );
}
