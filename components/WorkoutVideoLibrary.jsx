import React from "react";

const query = `
{
    workoutVideosCollection{ 
      items {
        title
        videoFile {
          url
        }
      }
    }
  }
  `;

function WorkoutVideoLibrary({ data }) {
  console.log(data);
  const [imagesLoaded, setImagesLoaded] = React.useState(false);

  const token = process.env.NEXT_PUBLIC_contentful_access_token

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
        console.log(data);
      })
      .then(setImagesLoaded(true));
  }, []);

  return (
    <ul>
      <li>test</li>
    </ul>
  );
}

export default WorkoutVideoLibrary;
