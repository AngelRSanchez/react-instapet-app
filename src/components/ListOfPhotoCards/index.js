import React from "react";
import { PhotoCard } from "../Photocard";

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5, 6].map((id) => <PhotoCard key={id} id={id} />)}
    </ul>
  );
};
