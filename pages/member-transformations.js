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
  const token = process.env.NEXT_PUBLIC_contentful_access_token
  console.log('token: ' + token)
  React.useEffect(() => {
    window
      .fetch(
        "https://graphql.contentful.com/content/v1/spaces/" +
          process.env.NEXT_PUBLIC_contentful_space_id +
          "/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ` + token,
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

              <div className="row" data-masonry='{"percentPosition": true }'>

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
