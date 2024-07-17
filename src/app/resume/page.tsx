"use client";
import React from "react";
import Iframe from "react-iframe";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Resume = () => {
  //   const handleDownload = async () => {
  //     try {
  //       const iframe = document.querySelector("iframe");
  //       const iframeDocument =
  //         iframe?.contentDocument || iframe.contentWindow.document;
  //       const iframeBody = iframeDocument.body;

  //       const canvas = await html2canvas(iframeBody);
  //       const imgData = canvas.toDataURL("image/png");
  //       const pdf = new jsPDF("p", "mm", "a4");
  //       const pdfWidth = pdf.internal.pageSize.getWidth();
  //       const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  //       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  //       pdf.save("resume.pdf");
  //     } catch (error) {
  //       console.error("Error generating PDF: ", error);
  //     }
  //   };

  return (
    <div className="bg-[#0e191e] py-10 px-8 lg:px-24 text-white">
      <h1 className="lg:text-6xl text-3xl font-extrabold text-center">
        Resume
      </h1>
      <div className="flex justify-center mt-10">
        <Iframe
          url="https://my-resume-wheat-zeta.vercel.app"
          title="Resume"
          className="w-full h-screen no-scrollbar"
        />
      </div>
      <div className="flex justify-center mt-4">
        <button
          //   onClick={handleDownload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default Resume;
