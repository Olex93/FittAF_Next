import React from "react";
import ReactPlayer from 'react-player';

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
  const videoArray = videoData.data.workoutVideosCollection.items;

  return (
    <div>
      {videoArray.map((video, index) => (
        <video key={index}>
          <source src={video.videoFile.url} style={{width: '100%', height: '100%'}}/>
        </video>
      ))}
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

export default TestVideoPage;
