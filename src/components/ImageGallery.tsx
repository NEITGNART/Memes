import React, {useState} from 'react';
import styled from "styled-components";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Blurhash} from "react-blurhash";
import CustomImage from "./CustomImage";

type Images = {
    urls: string[],
}

const ImageGallery = (props: Images) => {

    return (
        <Wrapper>
            {props.urls.map((url: string) => {
                return (
                    <CustomImage key={url} url={url}/>
                );
            })}
        </Wrapper>
    );
};


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 2em;
  column-gap: 10px;
  content-visibility: visible;

  margin: 0 auto;
  justify-content: center;
  align-content: center;

`

export default ImageGallery;