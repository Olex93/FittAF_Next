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

function TestVideoPage() {
  const [videosLoaded, setVideosLoaded] = React.useState(false);
  const [videos, setVideos] = React.useState('')

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

        setVideos(data.workoutVideosCollection.items)
        console.log(videos)
        console.log(videos[0].title)
      })
      .then(setVideosLoaded(true));
  }, []);

  return (
    <ul>
    {
      videosLoaded && 
      <video>
        <source src={videos[0].videoFile.url}></source>
      </video>
    }
    </ul>
  );
}

export default TestVideoPage;
