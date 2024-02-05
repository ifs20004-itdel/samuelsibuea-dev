import React from 'react'
import {pdfjs} from 'react-pdf'
import { Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function ExpCard({
    job,
    company,
    date,
    file,
    job_type,
    description
}) {
  const [numPages, setNumPages] = React.useState(0);
  const pdfContainerRef = React.useRef(null);

  function onDocumentLoadSuccess({
    numPages
  }) {
    setNumPages(numPages);
  }

  return (
    <div className='flex flex-col font-poppins text-white bg-slate-700 rounded-lg py-5 md:py-10 px-10 m-5 shadow-slate-500 shadow-xl animate-fade-up animate-duration-700 '>
        <h1 className='text-bold md:text-3xl text-xl text-amber-500 '>{job}</h1>
        <div className='md:w-2/6 w-5/6 h-1 bg-amber-300 rounded-full mb-3'/>
        <p className='text-bold'>{company}</p>
        <p className='text-xs italic pb-3'>{date}</p>
        <div
         ref={pdfContainerRef}
         className='md:block hidden my-5 overflow-y-auto text-black text-lg bg-white text-center'
         style={{ maxHeight: '800px' }}
        >
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess} >
            {Array.apply(null, Array(numPages))
            .map((x,i)=>i+1)
            .map((page)=>{
              return(
                  <Page scale={1} pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} width={1000} />
              )
            })}
          </Document>
        </div>
        <p className='pb-2 font-semibold text-green-300'>{job_type}</p>
        <div className='text-sm w-11/12'>
            {description}
        </div>
    </div>
  )
}

export default ExpCard