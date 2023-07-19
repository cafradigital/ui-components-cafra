import styled from 'styled-components';
import { IContainerImageStyleds } from './interface';

export const ContainerImageStyled = styled.div<{
    styled: IContainerImageStyleds;
}>`
    width: ${({ styled }) => styled.size.width};
    height: ${({ styled }) => styled.size.height};

    object-fit: contain;

    img {
        border-top-right-radius: ${({ styled }) =>
            styled.borderRadius?.topRight
                ? styled.borderRadius?.topRight
                : '0'};

        border-bottom-right-radius: ${({ styled }) =>
            styled.borderRadius?.bottomRight
                ? styled.borderRadius?.bottomRight
                : '0'};

        border-top-left-radius: ${({ styled }) =>
            styled.borderRadius?.topLeft ? styled.borderRadius?.topLeft : '0'};

        border-bottom-left-radius: ${({ styled }) =>
            styled.borderRadius?.bottomLeft
                ? styled.borderRadius?.bottomLeft
                : '0'};

        width: 100%;
        height: 100%;
    }
`;
