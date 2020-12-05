import { GET_PHOTOS } from "../hoc/withPhotos";
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards';

export const ListOfPhotoCards = GET_PHOTOS(ListOfPhotoCardsComponent);
