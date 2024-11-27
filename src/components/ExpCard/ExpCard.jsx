import React from "react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function ExpCard({ job, company, date, file, job_type, description }) {
  const [numPages, setNumPages] = React.useState(0);
  const pdfContainerRef = React.useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <div className="font-poppins text-white bg-sky-800 rounded-lg py-5 md:py-7 px-10 my-5 shadow-slate-500 shadow-xl animate-fade-up animate-duration-700">
        <h1 className="text-bold md:text-3xl text-xl text-sky-200 underline">
          {job}
        </h1>
        <p className="text-bold">{company}</p>
        <p className="text-xs italic pb-3">{date}</p>
        <div className="flex flex-row gap-x-16">
          <div
            ref={pdfContainerRef}
            className="md:block hidden my-5 overflow-y-auto bg-transparent content-center"
          >
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.apply(null, Array(numPages))
                .map((x, i) => i + 1)
                .map((page) => {
                  return (
                    <Page
                      scale={1}
                      pageNumber={page}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      width={350}
                    />
                  );
                })}
            </Document>
            <p
              onClick={() => window.open(file,"_blank")}
              className="cursor-pointer tracking-wide my-1 text-sm"
              href={file}
            >
              [Open Certificate]
            </p>
          </div>
          <div className="md:w-2/4">
            <p className="pb-2 font-semibold text-green-300" href={file}>{job_type}</p>
            <div className="text-xs md:text-sm w-full md:w-11/12">{description}</div>
            <p onClick={()=> window.open(file,"_blank")} className="md:hidden flex text-green-500 text-sm font-bold underline pt-5">Open Certificate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpCard;
