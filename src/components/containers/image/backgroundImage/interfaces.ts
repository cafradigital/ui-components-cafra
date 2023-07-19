import React from 'react';
import { IStyledsContainer } from '../../interfaces';

export interface IBackgroundImageStyled extends IStyledsContainer {
    borderRadius?: {
        topLeft?: string;
        topRight?: string;
        bottomLeft?: string;
        bottomRight?: string;
    };
    typeAdaptation?: 'contain' | 'cover' | 'auto';
    imageRepeat?: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';
}

export interface IBackgroundImageProps extends IBackgroundImageStyled {
    children?: React.ReactNode;
    customStyled?: React.CSSProperties;
    img: {
        url: string;
        label: string;
    };
}
