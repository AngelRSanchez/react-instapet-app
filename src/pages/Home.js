import React, { Fragment } from 'react';

import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';

export const Home = ({ categoryID }) => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryID} />
    </Fragment>
  )
}
