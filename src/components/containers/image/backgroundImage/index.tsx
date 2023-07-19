import React from 'react';
import { IBackgroundImageProps } from './interfaces';
import { ImageContainer } from './styled';

export const BackgroundImage: React.FC<IBackgroundImageProps> = ({
    children,
    borderRadius,
    customStyled,
    img,
    imageRepeat,
    typeAdaptation,
    align,
}) => {
    return (
        <ImageContainer
            imageUrl={img.url}
            style={customStyled}
            aria-label={img.label}
            styled={{
                borderRadius,
                imageRepeat,
                typeAdaptation,
                align,
            }}
        >
            {children}
        </ImageContainer>
    );
};
