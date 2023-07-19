import React from 'react';
import { IContainerComponentProps } from './interfaces';
import { StyledContainer } from './styled';

export const Container: React.FC<IContainerComponentProps> = ({
    children,
    customStyleds,
    align,
    height,
}) => {
    return (
        <StyledContainer style={customStyleds} styled={{ align, height }}>
            {children}
        </StyledContainer>
    );
};
