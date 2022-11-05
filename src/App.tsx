import React from 'react';
import ImageGallery from "./components/ImageGallery";
import styled from "styled-components";
import {useQuery} from "@tanstack/react-query";
import CONSTANT from "./Constant";
import axios from "axios";

export default function App() {

    const {isLoading, error, data, refetch, isFetching} = useQuery(
        ['repoData'],
        () => axios(CONSTANT.URL).then((res: any) => res.data)
    );

    if (isLoading) return <>Loading memes ...</>
    if (isFetching) return <>Reloading memes ....</>
    if (error) return <>Error while loading memes</>

    const urls: string[] = data.data.memes.map((meme: any) => {
        return meme.url;
    });

    return (
        <>
            <Wrapper>
                <WrapperButton>
                    <Button onClick={() =>
                        refetch()
                    }>Get Memes</Button>
                </WrapperButton>
                <ImageGallery urls={urls}/>
            </Wrapper>
        </>
    );
}

const Button = styled.button`
  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  padding: 12px 0;
  width: 200px;
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 30px 60px rgba(23, 0, 102, 0.5),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  }
`;

const Wrapper: any = styled.div``

const WrapperButton: any = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 10px;
`






