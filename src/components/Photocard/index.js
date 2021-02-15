import React, { Fragment, useEffect, useRef, useState } from "react";
import { Article, ImgWrapper, Img } from "./styles";

import { FavButton } from '../FavButton';
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';

import { Link } from '@reach/router';

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_hamsters.jpg";


export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null);
  const [show, setShow] = useState(false);
  const key = `like-${id}`;
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key);
      return like;
    } catch (e) {
      return false;
    }
  });

  useEffect(
    function () {
      Promise.resolve(
        typeof window.IntersectionObserver !== "undefined"
          ? window.IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0];
          if (isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        });
        observer.observe(element.current);
      });
    },
    [element]
  );

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, value);
      setLiked(value);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  !liked && toggleLike({
                    variables: {
                      input: { id }
                    }
                  });
                  setLiked(!liked);
                }

                return (
                  <FavButton
                    liked={liked}
                    likes={likes}
                    onClick={handleFavClick}
                  />
                );
              }
            }
          </ToggleLikeMutation>

        </Fragment>
      )}
    </Article>
  );
};
