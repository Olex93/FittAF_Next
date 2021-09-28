import React, { useState, useEffect } from "react";

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

function WorkoutVideoLibrary() {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_contentful_access_token;

    fetch(
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
      .then((res) => {
        console.log("Response from contentful: ", res);
        setVideoData(res);
      })
      .catch(() => {
        if (err) {
          console.log(err);
        }
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="signupHeading">Nutrition info</h1>
          {videoData !== null && (
            <>
              {videoData.data.workoutVideosCollection.items.map(
                (video, index) => (
                  <video controls key={index} style={{ width: "100%" }}>
                    <source src={video.videoFile.url} />
                  </video>
                )
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkoutVideoLibrary;
