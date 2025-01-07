import Envelopes from "@/app/feat/envelopes";
import Image from "next/image";

export default function Home() {
  return (
    <div className={`container mx-auto`}>
      <div className={`mt-10`}>
        <h1 className={`title text-center font-extrabold text-2xl`}>
          PENFRIENDS
        </h1>
      </div>
      <div className={`grid grid-cols-2 gap-10 mt-10`}>
        <div className={`inbox`}>
          <h2 className={`text-center font-extrabold m-5 mb-10`}>INBOX</h2>
          <Envelopes />
        </div>
        <div className={`letter`}></div>
      </div>
    </div>
  );
}
