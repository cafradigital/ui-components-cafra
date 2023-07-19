import React from 'react';

export interface IStyledsContainer {
    align?: {
        direction?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
        'justify-content'?:
            | 'center'
            | 'space-between'
            | 'space-around'
            | 'flex-end'
            | 'flex-start';
        'align-items'?: 'center' | 'flex-end' | 'flex-start';
        gap?: string;
        textAlign?: 'center' | 'left' | 'right' | 'start' | 'end';
        wrap?: 'wrap' | 'wrap-reverse' | 'nowrap';
    };
}

export interface IContainerProps {
    children: React.ReactNode;
}
