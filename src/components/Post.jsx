import React from "react";

const Post = ({posts}) => {

  return (
    <>
      <div className="container">
        <div className="row">
          {posts.map((item, index) => {
            return (
              <div className="col-md-6">
                <div className="card mt-2">
                  <img
                    className="card-img-top "
                    src={item?.img}
                    alt={item?.img}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item?.title}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Post;
