import Letter from "./feat/letter";

export default function Home() {
  return (
    <div
      className={`container mx-auto select-none h-dvh max-h-dvh p-10 overflow-auto`}
    >
      <div className={`flex flex-col h-full w-full`}>
        <div className={`h-fit`}>
          <h1
            className={`title text-center font-extrabold text-base sm:text-xl lg:text-2xl pb-10`}
          >
            PENFRIENDS
          </h1>
        </div>
        <div className={`h-screen`}>
          {/* <div className={`inbox`}>
            <h2 className={`text-center font-extrabold m-5 mb-10`}>INBOX</h2>
            <Envelopes />
          </div> */}
          <div className={`letter flex flex-col items-center`}>
            <div className={`letter-container`}>
              <Letter />
            </div>
          </div>
        </div>
      </div>
      {/* <div className={``}>
        <h1 className={`title text-center font-extrabold text-2xl pb-10`}>
          PENFRIENDS
        </h1>
      </div>
      <div className={`flex h-full`}>
        <div className={`inbox`}>
          <h2 className={`text-center font-extrabold m-5 mb-10`}>INBOX</h2>
          <Envelopes />
        </div>
        <div className={`letter grid grid-cols-1 justify-items-center`}>
          <Letter />
        </div>
      </div> */}
    </div>
  );
}
