import React from "react";

const ToDo = () => {
  return (
    <div>
      <div class="card w-96 bg-base-100 m-auto shadow-xl">
        <div class="card-body">
          <h2 class="card-title">TODO LIST</h2>
          <input type="text" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />
          <button class="btn btn-primary">Enter Now</button>

          <p>choose?</p>
          <div class="card-actions justify-end">
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
