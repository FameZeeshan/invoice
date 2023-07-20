// PDF.js
import React, { useState } from "react";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import pdfFile from "./sample.pdf";

const PDF = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div>
      <div className="pdf-container">
        <div className="button">
          <button onClick={handlePreviousPage}>Previous</button>
          <button onClick={handleNextPage}>Next</button>
        </div>
        <p className="page-number">
          Page {pageNumber} of {numPages}
        </p>

        <div className="pdf">
          <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PDF;
