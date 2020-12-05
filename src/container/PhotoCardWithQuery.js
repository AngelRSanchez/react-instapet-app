import React from "react";
import { PhotoCard } from "../components/Photocard";

import { GET_SINGLE_PHOTO } from "../hoc/withPhotoCards";
import { Query } from "react-apollo";

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!...</p>;

  const nonNullData = data || {};
  const dataWithPhotos = { photo: [], ...nonNullData };
  const { photo } = dataWithPhotos;
  if (photo.length == 0) {
    return <p>Respuesta vacia o algo similar</p>;
  }
  return <PhotoCard {...photo} />;
};

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {
      renderProp
    }
  </Query>
);
