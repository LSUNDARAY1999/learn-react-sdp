import React from "react";

const ListItem = React.memo(({ item }) => {
  console.log("Rendering item:", item);

  return (
    <div className="p-2 border-b">
      Item #{item}
    </div>
  );
});

export default ListItem;
