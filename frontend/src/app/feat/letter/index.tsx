export default function Letter() {
  return (
    <div className={`relative`}>
      <div className={`grid grid-cols-1 shadow-xl`}>
        <div className={`h-80 bg-gradient-to-b from-white to-stone-100`}></div>
        <div className={`h-80 bg-gradient-to-b from-white to-stone-100`}></div>
        <div className={`h-80 bg-gradient-to-b from-white to-stone-100`}></div>
      </div>
      <div className={`absolute top-0 left-0 p-20 font-sans opacity-95 w-full h-full text-lg`}>
        <h3><b>This is a cool letter title</b></h3>
        <br></br>
        <p>This is a letter,</p>
        <br></br>
        <p>This is a letter. How many words can I fit in this letter? The quick brown fox jumped over the lazy dog. This is a paragraph of text for the letter.</p>
        <br></br>
        <p>How many paragraphs can I fit in this letter?</p>
        <br></br>
        <p><b>The alphabet is made of multiple letters.</b></p>
      </div>
    </div>
  );
}
