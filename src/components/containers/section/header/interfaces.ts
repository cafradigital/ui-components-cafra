import React from 'react';
import { IThemes } from '../../../../../GlobalInterfaces';
export interface IHeaderSectionStyled {
    theme?: IThemes;
}

export interface IHeaderSectionProps extends IHeaderSectionStyled {
    title: string;
    subTitle?: string;
    customStyleds?: React.CSSProperties;
}
