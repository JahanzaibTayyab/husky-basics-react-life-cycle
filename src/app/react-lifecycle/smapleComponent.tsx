import React, { useState } from "react";

function SampleComponent({ id }: { id: number }) {
  const [initialId, setInitialId] = useState(id);
  console.log("🚀 ~ SampleComponent ~ initialId:", initialId);

  return (
    <div>
      SampleComponent
      <h1>This is the content of the SampleComponent component</h1>
    </div>
  );
}

export default SampleComponent;
