import styled from 'styled-components';
import { IBackgroundImageStyled } from './interfaces';

export const ImageContainer = styled.div<{
    styled: IBackgroundImageStyled;
    imageUrl: string;
}>`
    width: 100%;
    height: 100%;

    text-align: ${({ styled }) =>
        styled.align?.textAlign ? styled.align?.textAlign : 'initial'};

    border-top-left-radius: ${({ styled }) =>
        styled.borderRadius?.topLeft ? styled.borderRadius?.topLeft : '0'};

    border-top-right-radius: ${({ styled }) =>
        styled.borderRadius?.topRight ? styled.borderRadius?.topRight : '0'};

    border-bottom-left-radius: ${({ styled }) =>
        styled.borderRadius?.bottomLeft
            ? styled.borderRadius?.bottomLeft
            : '0'};

    border-bottom-right-radius: ${({ styled }) =>
        styled.borderRadius?.bottomRight
            ? styled.borderRadius?.bottomRight
            : '0'};

    display: flex;

    gap: ${({ styled }) => (styled.align?.gap ? styled.align?.gap : '')};

    flex-wrap: ${({ styled }) =>
        styled.align?.wrap ? styled.align?.wrap : 'wrap'};

    flex-direction: ${({ styled }) =>
        styled.align?.direction ? styled.align?.direction : 'row'};

    align-items: ${({ styled }) =>
        styled.align?.['align-items']
            ? styled.align?.['align-items']
            : 'initial'};

    justify-content: ${({ styled }) =>
        styled.align?.['justify-content']
            ? styled.align?.['justify-content']
            : 'initial'};

    background-image: ${({ imageUrl }) => (imageUrl ? `url(${imageUrl})` : '')};
    background-position: center;
    background-size: ${({ styled }) =>
        styled.typeAdaptation ? styled.typeAdaptation : 'contain'};
    background-repeat: ${({ styled }) =>
        styled.imageRepeat ? styled.imageRepeat : 'no-repeat'};
`;
