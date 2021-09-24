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

function TestVideoPage({ videoData }) {
  // const [videosLoaded, setVideosLoaded] = React.useState(false);
  // const [videoData, setVideoData] = React.useState(null);

  // const token = process.env.NEXT_PUBLIC_contentful_access_token;

  // React.useEffect(() => {
  //   window
  //     .fetch(
  //       "https://graphql.contentful.com/content/v1/spaces/" +
  //         process.env.NEXT_PUBLIC_contentful_space_id +
  //         "/",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ` + token,
  //         },
  //         body: JSON.stringify({ query }),
  //       }
  //     )
  //     .then((response) => response.json())
  //     .then(({ data, errors }) => {
  //       if (errors) {
  //         console.error(errors);
  //       }
  //       setVideoData(data.workoutVideosCollection.items);
  //     })
  //     .then(console.log(videoData[0]))
  //     .then(setVideosLoaded(true));
  // }, []);

  const videoArray = videoData.data.workoutVideosCollection.items;

  return (
    <ul>
      {videoData !== null && (
        <>
          {console.log("video data: ", videoArray)}

          {videoArray.map((video) => {
            <>
              {console.log(video)}
              <video>
                <source src={video.videoFile.url} />
              </video>
            </>;
          })}
        </>
      )}
    </ul>
  );
}

export async function getStaticProps() {
  const token = process.env.NEXT_PUBLIC_contentful_access_token;

  const res = await fetch(
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
  );

  const videoData = await res.json();

  return {
    props: {
      videoData,
    },
  };
}

export default TestVideoPage;
