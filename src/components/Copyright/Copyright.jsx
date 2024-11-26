export default function () {
  return (
    <div className="bg-slate-300 mt-5">
      <hr className="border-slate-500" />
      <p className="px-5 md:px-20 py-4 md:py-5 text-start text-sm md:text-base">
        © Copyright{" " + new Date().getFullYear() + " "}
        Samuel I. H. Sibuea | <span><a href="samuelsibuea-dev.vercel.app">samuelsibuea-dev.vercel.app</a></span>
      </p>
    </div>
  );
}
