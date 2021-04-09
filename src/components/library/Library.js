import React, { useEffect, useState } from "react";
import "./Library.css";
import data from "../../data.json";
import NewModal from "../newModal/NewModal";
const Library = (props) => {
  // console.log(props.type, "library");
  const [filterdata, setfilterData] = useState(data);

  const searchJobs = (searchWord) => {
    console.log("searchWord", searchWord);
    if (searchWord !== "") {
      // console.log(searchWord);

      const newData = data.filter((item) => {
        const author = item.author
          ? item.author.toUpperCase()
          : "".toUpperCase();
        const desc = item.desc ? item.desc.toUpperCase() : "".toUpperCase();

        const searchWordData = searchWord.toUpperCase();

        if (author.indexOf(searchWordData) > -1) {
          return author.indexOf(searchWordData) > -1;
        } else if (desc.indexOf(searchWordData) > -1) {
          return desc.indexOf(searchWordData) > -1;
        }
      });
      setfilterData(newData);
    } else {
      // console.log("null");
      setfilterData(data);
    }
  };
  useEffect(() => {
    searchJobs(props.text);
  }, [props.text]);

  return (
    <>
      {/* <div>
        <input
          type="text"
          placeholder="Enter item to be searched"
          onChange={(e) => searchJobs(e.target.value)}
        />
      </div> */}

      {props.type === "grid" ? (
        <div className="books-container">
          {filterdata.map((post, index) => {
            return (
              <div className="library-container">
                <img src={post.image} />
                <label className="desc">{post.desc}</label>
                {/* <label className="author">{post.author}</label> */}
                {/* <button>{post.title} <NewModal/></button> */}
                <NewModal post={post} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="list-view">
          <div className="list-header">
           
          </div>
          {filterdata.map((post, index) => {
            return (
              <div className="list-container">
                <div className="list-img">
                  <img src={post.image} />
                  <label className="desc-list">{post.desc}</label>
                  <div className="list-section">
                  <NewModal post={post} />
                    {/* <label className="author">{post.author}</label> */}
                  </div>
                
                </div>

          
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Library;
