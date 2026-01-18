import Link from "next/link";

export default function Card({ title, text, linkText }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="p-5 flex-grow">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-900">{title}</h5>
        <p className="mb-3 font-normal text-gray-700">{text}</p>
      </div>
      <div className="p-5 pt-0">
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
          {linkText || "Leer más"}
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>
      </div>
    </div>
  );
}