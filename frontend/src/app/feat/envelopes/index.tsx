import Envelope from "./components/envelope";

export default function Envelopes() {
  return (
    <div className={`flex flex-col w-min mt-20`}>
      <Envelope />
      <Envelope />
      <Envelope />
      <Envelope />
    </div>
  );
}
