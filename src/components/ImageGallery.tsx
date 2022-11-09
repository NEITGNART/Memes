import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';

import CustomImage from "./CustomImage";

type Images = {
    urls: string[],
}

const ImageGallery = (props: Images) => {
    return (
        <Grid2 container display="flex" justifyContent="center" alignItems="center" spacing={2}>
            {props.urls.map((url: string) => {
                return (
                    <Grid2 key={url}>
                        <CustomImage url={url}/>
                    </Grid2>
                );
            })}
        </Grid2>
    );
};

export default ImageGallery;