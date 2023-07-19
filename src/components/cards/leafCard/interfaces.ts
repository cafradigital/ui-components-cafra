import React from 'react';
import { IThemes } from '../../../../GlobalInterfaces';

export interface ILeafCardStyleds {
    theme?: IThemes;
    size: 'small' | 'medium' | 'large';
    colorShadown?: string;
}

export interface ICardLeafProps extends ILeafCardStyleds {
    img: {
        url: string;
        label: string;
        customStyleds?: React.CSSProperties;
    };
    title: string;
    customStyleds?: React.CSSProperties;
}
