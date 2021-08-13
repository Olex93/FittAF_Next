import React from "react";

const query = `
{
    memberTestimonialCollection{
      items {
        beforeAfterImage {
          title
          description
          url
        }
        captionText
        customerName
      }
    }
  }
  `;

export default function MemberTransformations() {
  React.useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_TRANSFORMATIONS_SPACE_ID}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer [IZ6gS-rluhf5SYOWm-Me6SS-9To1ctkWnhk507HiQV8]",
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        console.log(data)
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 ">
          <h1 className="signupHeading">Member Transformations</h1>
          <p className="standFirst">Get inspired by the success of our clients!</p>
          <div className="row" id="masonry-grid">
            <p>test</p>
          </div>
        </div>
      </div>
    </div>
  );
}
