import React from 'react';
import { IContainerImageProps } from './interface';
import { ContainerImageStyled } from './styled';

export const ContainerImage: React.FC<IContainerImageProps> = ({
    customStyleds,
    label,
    size,
    borderRadius,
    url,
}) => {
    return (
        <ContainerImageStyled
            styled={{ size, borderRadius }}
            style={customStyleds}
        >
            <img src={url} alt={label} />
        </ContainerImageStyled>
    );
};
