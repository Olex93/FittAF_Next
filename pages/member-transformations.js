import Head from "next/head";
import React from "react";
import MemberTransformationTile from "../components/MemberTransformationTile";

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
  const [transformationData, setTransformationData] = React.useState(null);
  const [imagesLoaded, setImagesLoaded] = React.useState(false);

  React.useEffect(() => {
    window
      .fetch(
        "https://graphql.contentful.com/content/v1/spaces/" +
          process.env.contentful_space_id +
          "/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ` + process.env.contentful_access_token,
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        setTransformationData(data);
      })
      .then(setImagesLoaded(true));
  }, []);

  return (
    <>
      <Head>
        <title>Fitt AF - Member Transformations</title>
        <meta name="description" content="Fitness transformation photos of Fitt AF clients." />
      </Head>
      <div className="signupBg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 ">
              <h1 className="signupHeading">Member Transformations</h1>
              <p className="standFirst">
                Get inspired by the success of our clients!
              </p>

              <div class="row" data-masonry='{"percentPosition": true }'>
                {transformationData !== null &&
                  imagesLoaded &&
                  transformationData.memberTestimonialCollection.items.map(
                    (item, index) => (
                      <MemberTransformationTile
                        key={index}
                        description={item.beforeAfterImage.description}
                        imgUrl={item.beforeAfterImage.url}
                        name={item.customerName}
                        caption={item.captionText}
                      />
                    )
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
