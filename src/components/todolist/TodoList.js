import React from "react";

export default function TodoList(props) {
  return (
    <div>
      {props.todoList.map((post, i) => (
        <div key={i}>
          <div className="row text-white">
            <div className="col-lg-7">
              <div className="bg-white p-5 rounded my-5 shadow-sm">
                <p className="lead font-italic mb-0 text-muted">
                  {post.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
