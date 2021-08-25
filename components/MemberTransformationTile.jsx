import React from "react";

export default function MemberTransformationTile(props) {
  return (
    <div>
      <div class="col-xl-3 col-lg-4 col-md-6 col-12 masonry-item">
        <div class="transformationWrapper">
          <img
            alt={props.transformation.fields.beforeAfterImage.fields.description}
            class="transformationImage"
            src={`https:${props.transformation.fields.beforeAfterImage.fields.file.url}`}
          />
          <p class="transformationName">
            {props.transformation.fields.customerName}
          </p>
          <p class="transformationCaption">
            {props.transformation.fields.captionText}
          </p>
        </div>
      </div>
    </div>
  );
}
