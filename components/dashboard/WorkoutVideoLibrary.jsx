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

function WorkoutVideoLibrary({ videoData }) {
  const videoArray = videoData.data.workoutVideosCollection.items;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="signupHeading">Nutrition info</h1>
          {videoArray.map((video, index) => (
            <video
              controls
              key={index}
              style={{ width: "100%", height: "100%" }}
            >
              <source src={video.videoFile.url} />
            </video>
          ))}
        </div>
      </div>
    </div>
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

export default WorkoutVideoLibrary;
