import React from 'react';
import { IHeaderSectionProps } from './interfaces';
import { ContainerTextHeaderSection } from './styled';

export const HeaderSection: React.FC<IHeaderSectionProps> = ({
    title,
    subTitle,
    theme,
    customStyleds,
}) => {
    return (
        <ContainerTextHeaderSection style={customStyleds} styled={{ theme }}>
            <h1>{title}</h1>
            {subTitle ? <p>{subTitle}</p> : ''}
        </ContainerTextHeaderSection>
    );
};
