import React from 'react';
import { IContainerProps, IStyledsContainer } from '../interfaces';

export interface IContainerComponentStyled extends IStyledsContainer {
    height?:
        | 'full'
        | 'auto'
        | '0.5x'
        | '1x'
        | '1.5x'
        | '2x'
        | '2.5x'
        | '3x'
        | '3.5x'
        | '4x'
        | '4.5x'
        | '5x'
        | '5.5x'
        | '6x'
        | '6.5x'
        | '7x'
        | '7.5x'
        | '8x'
        | '8.5x'
        | '9x'
        | '9.5x';
}

export interface IContainerComponentProps
    extends IContainerProps,
        IContainerComponentStyled {
    customStyleds?: React.CSSProperties;
}
