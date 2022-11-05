import React, {useState} from 'react';
import styled from "styled-components";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Blurhash} from "react-blurhash";

type Images = {
    urls: string[],
}

const ImageGallery = (props: Images) => {


    const [isLoaded, setLoaded] = useState(false);
    const [isLoadStarted, setLoadStarted] = useState(false);

    const handleLoad = () => {
        setLoaded(true);
    };

    const handleLoadStarted = () => {
        setLoadStarted(true);
    };

    return (
        <Wrapper>
            {props.urls.map((image: string) => {
                return (
                    <>
                        <LazyLoadCustom effect="blur" key={image} src={image}
                                        placeholderSrc={image} onLoad={handleLoad} beforeLoad={handleLoadStarted}/>
                        {!isLoaded && isLoadStarted && (<StyledBlurhash
                            hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                            width={250}
                            height={250}
                            punch={1}
                        />)}
                    </>

                );
            })}
        </Wrapper>
    );
};

const LazyLoadCustom = styled(LazyLoadImage)`
  width: 250px;
  height: 250px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  border-radius: 10px;
  :hover {
    border-radius: 10px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 30px 60px rgba(23, 0, 102, 0.5),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  }
`

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

const StyledBlurhash = styled(Blurhash)`
  z-index: 20;
  position: absolute !important;
  top: 0;
  left: 0;
`;

export default ImageGallery;