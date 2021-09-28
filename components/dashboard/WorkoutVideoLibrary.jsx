import React, { useState, useEffect } from "react";
import styles from "../../scss/videogallery.module.scss";

const query = `
{
  workoutVideosCollection{ 
    items {
      contentfulMetadata {
        tags {
          name
        }
      }
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
  const [tagArray, setTagArray] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [totalVideos, setTotalVideos] = useState(10);

  const resetFilter = () => {
    setSelectedCategory("all");
  };

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
        res.data.workoutVideosCollection.items.forEach((videoItem) => {
          videoItem.contentfulMetadata.tags.forEach((tag) => {
            if (tagArray.indexOf(tag.name) == -1) {
              setTagArray([...tagArray, tag.name]);
            }
          });
        });
        setVideoData(res);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }, [tagArray]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="signupHeading">Exercise demos</h1>
          <ul className={styles.filterButtonList}>
            <li
              onClick={() => resetFilter()}
              className={`${styles.filterListItem} ${
                selectedCategory == "all" && styles.active
              }`}
            >
              <a className={styles.filterListAnchor}>All</a>
            </li>
            {tagArray.map((tag, index) => {
              return (
                <li
                  onClick={() => setSelectedCategory(tag)}
                  className={`${styles.filterListItem} ${
                    tag == selectedCategory && styles.active
                  }`}
                  key={index}
                >
                  <a className={styles.filterListAnchor}>{tag}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* If no filter is applied */}
        {videoData !== null && selectedCategory == "all" && (
          <>
            {videoData.data.workoutVideosCollection.items.map(
              (video, index) => {
                if (index < totalVideos) {
                  return (
                    <div key={index} className="col-12 col-lg-6">
                      <video
                        controls
                        style={{ width: "100%" }}
                        className={video.contentfulMetadata.tags.map(
                          (tag) => tag.name + " "
                        )}
                      >
                        <source src={video.videoFile.url} />
                      </video>
                    </div>
                  );
                }
              }
            )}
          </>
        )}

        {/* if a filter is applied */}
        {videoData !== null && selectedCategory !== "all" && (
          <>
            {videoData.data.workoutVideosCollection.items.map(
              (video, index) => {
                if (
                  video.contentfulMetadata.tags.filter(
                    (tag) => tag.name == selectedCategory
                  ).length > 0
                ) {
                  return (
                    <div key={index} className="col-12 col-lg-6">
                      <video
                        controls
                        style={{ width: "100%" }}
                        className={video.contentfulMetadata.tags.map(
                          (tag) => tag.name + " "
                        )}
                      >
                        <source src={video.videoFile.url} />
                      </video>
                    </div>
                  );
                }
              }
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default WorkoutVideoLibrary;
