import React from "react";

function Overview() {
  return (
    <form>
      <label>
        Task:
        <input type="text" name="task" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Overview;
