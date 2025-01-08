export default function Letter() {
  return (
    <div
      className={`relative h-full 2xl:scale-[0.8] flex flex-col justify-items-center`}
    >
      <div
        className={`grid grid-cols-1 shadow-xl aspect-[1.294/1] bg-white w-[40vw]`}
      >
        <div
          className={`h-[20vw] bg-gradient-to-b from-white to-stone-100`}
        ></div>
        <div
          className={`h-[20vw] bg-gradient-to-b from-white to-stone-100`}
        ></div>
        <div
          className={`h-[20vw] bg-gradient-to-b from-white to-stone-100`}
        ></div>
      </div>
      <div
        className={`absolute top-0 left-0 font-sans opacity-95 w-[40vw] h-full text-[1.15vw] p-[5vw]`}
      >
        <h3>
          <b>This is a cool letter title</b>
        </h3>
        <br></br>
        <p>This is a letter,</p>
        <br></br>
        <p>
          This is a letter. How many words can I fit in this letter? The quick
          brown fox jumped over the lazy dog. This is a paragraph of text for
          the letter.
        </p>
        <br></br>
        <p>How many paragraphs can I fit in this letter?</p>
        <br></br>
        <p>
          <b>The alphabet is made of multiple letters.</b>
        </p>
      </div>
    </div>
  );
}
