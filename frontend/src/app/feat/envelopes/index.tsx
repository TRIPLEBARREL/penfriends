import Envelope from "./components/envelope";

export default function Envelopes() {
  return (
    <div
      className={`grid grid-cols-1 relative justify-items-center lg:scale-80`}
    >
      <Envelope />
      <Envelope />
      <Envelope />
      <Envelope />
    </div>
  );
}
