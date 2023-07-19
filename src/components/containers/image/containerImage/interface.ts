import React from 'react';

export interface IContainerImageStyleds {
    size: {
        width: string;
        height: string;
    };
    borderRadius?: {
        topRight?: string;
        bottomRight?: string;
        topLeft?: string;
        bottomLeft?: string;
    };
}

export interface IContainerImageProps extends IContainerImageStyleds {
    url: string;
    label: string;
    customStyleds?: React.CSSProperties;
}
