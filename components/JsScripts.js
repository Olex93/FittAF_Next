import React from "react";
import Script from "next/script";

export default function JsScripts() {
  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        strategy="beforeInteractive"
      ></Script>
    </>
  );
}
