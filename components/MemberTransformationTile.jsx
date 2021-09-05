import React from "react";
import Head from "next/head";

export default function MemberTransformationTile(props) {
  return (
    <>
    <Head>
        <script
          src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
          integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
          crossorigin="anonymous"
          async
        ></script>
      </Head>
    <div class="col-xl-3 col-lg-4 col-md-6 col-12 masonry-item">
      <div class="transformationWrapper">
        <img
          alt={props.description}
          class="transformationImage"
          src={props.imgUrl}
        />
        <p class="transformationName">{props.name}</p>
        <p class="transformationCaption">{props.caption}</p>
      </div>
    </div>
    </>
  );
}
