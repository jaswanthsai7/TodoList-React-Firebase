import React from "react";

export default function TodoList(props) {


const deleThePost=(deleteId)=>{
props.deletePost(deleteId)
}

  return (
    <div className="row">
      {props.todoList.map((post, i) => (
        <div key={i}>
          <div className="row text-white m-2">
            <div className="col-lg-12">
              <div className="bg-white p-5 rounded my-5 shadow-sm">
                <p className="lead  mb-0 text-muted">Text : {post.text}</p>
                <p className="lead  mb-0 text-muted">Date : {post.date}</p>

                {post.priority === "Low" && (
                  <>
                    <p className="lead  mb-0 text-muted">Priority Level :</p>
                    <div className="progress" style={{ width: "150px" }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </>
                )}
                {post.priority === "Medium" && (
                  <>
                    <p className="lead  mb-0 text-muted">Priority Level :</p>
                    <div className="progress" style={{ width: "150px" }}>
                      <div
                        className="progress-bar  bg-warning"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </>
                )}
                {post.priority === "High" && (
                  <>
                    <p className="lead  mb-0 text-muted">Priority Level :</p>

                    <div className="progress" style={{ width: "150px" }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </>
                )}

                <button
                  className="btn btn-danger p-1 mt-2"
                  onClick={()=>deleThePost(post.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
