import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function MemberTransformationTile(props) {
  return (
    <>
    <Head>
        <script
          src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
          integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>
    <div className="col-xl-3 col-lg-4 col-md-6 col-12 masonry-item">
      <div className="transformationWrapper">
        <Image
          alt={props.description}
          className="transformationImage"
          src={props.imgUrl}
        />
        <p className="transformationName">{props.name}</p>
        <p className="transformationCaption">{props.caption}</p>
      </div>
    </div>
    </>
  );
}
