import Image from "next/image";

export interface Letter {
  title: string;
  date: string;
  body: string;
  stickers: string[];
}

export default function Letter() {
  return (
    <div className="relative selection:bg-orange-100 rotate-[-0.4deg] select-text bg-white aspect-[1/1.4] w-full h-[800px] shadow-xl scale-50 md:scale-[0.85] xl:scale-100">
      <div className="flex flex-col h-full">
        <div className="h-1/3 bg-gradient-to-b from-white to-stone-50 shadow-sm border-b-stone-100 border-b"></div>
        <div className="h-1/3 bg-gradient-to-b from-white to-zinc-50 shadow-2xl"></div>
        <div className="h-1/3 bg-gradient-to-b from-stone-100 to-white shadow-md border-t-stone-100 border-t"></div>
      </div>
      <div className="absolute top-0 left-0 font-sans w-full h-full letter-contents p-20 text-base space-y-5 aspect-[1/1.4] opacity-90 select-text">
        <h3 className="font-bold">This is a cool letter title</h3>
        <p>This is a letter,</p>
        <p>
          Here’s to the crazy ones, the misfits, the rebels, the troublemakers,
          the round pegs in the square holes… the ones who see things
          differently — they’re not fond of rules… You can quote them, disagree
          with them, glorify or vilify them, but the only thing you can’t do is
          ignore them because they change things… they push the human race
          forward, and while some may see them as the crazy ones, we see genius,
          because the ones who are crazy enough to think that they can change
          the world, are the ones who do.
        </p>
        <p>How many paragraphs can I fit in this letter?</p>
        <p>
          <b>The alphabet is made of multiple letters.</b>
        </p>
        <div className="stickers">
          <Image
            src="/stickers/smiley.png"
            className="absolute drop-shadow-lg hover:scale-110 transition-transform duration-5 -rotate-12 top-36 left-3/4"
            width={50}
            height={50}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

// export default function Letter() {
//   return (
//     <div
//       className={`relative selection:bg-orange-100 rotate-[-0.3deg] select-text w-fit max-h-fit`}
//     >
//       <div
//         className={`grid grid-cols-1 shadow-xl aspect-[1/1.294] bg-white w-[40vw]`}
//       >
//         <div
//           className={`h-[20vw] bg-gradient-to-b from-white to-stone-100`}
//         ></div>
//         <div
//           className={`h-[20vw] bg-gradient-to-b from-white to-stone-100`}
//         ></div>
//         <div
//           className={`h-[20vw] bg-gradient-to-b from-white to-stone-100`}
//         ></div>
//       </div>
//       <div
//         className={`absolute top-0 left-0 font-sans opacity-90 w-[40vw] h-full text-[1.15vw] p-[5vw] letter-contents`}
//       >
//         <h3 className={`font-bold letter-title`}>
//           This is a cool letter title
//         </h3>
//         <div className={`letter-body`}>
//           <br></br>
//           <p>This is a letter,</p>
//           <br></br>
//           <p>
//             This is a letter. How many words can I fit in this letter? The quick
//             brown fox jumped over the lazy dog. This is a paragraph of text for
//             the letter.
//           </p>
//           <br></br>
//           <p>How many paragraphs can I fit in this letter?</p>
//           <br></br>
//           <p>
//             <b>The alphabet is made of multiple letters.</b>
//           </p>
//         </div>
//         <div className={`absolute letter-stickers`}>
//           <Image
//             src="/stickers/smiley.png"
//             className={`relative top-20 left-48 drop-shadow-md w-[4vw] hover:scale-110 transition-transform duration-50 -rotate-12`}
//             width={100}
//             height={100}
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
