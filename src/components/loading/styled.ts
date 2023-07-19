import styled from 'styled-components';
import { IGlobalTheme } from '../../../GlobalInterfaces';
import { ILoadingStyleds } from './intefaces';

export const ContainerLoading = styled.div<{
    styled: Omit<ILoadingStyleds, 'color' | 'size'>;
    theme: IGlobalTheme;
}>`
    background-color: ${({ styled, theme }) =>
        styled.backgroundColor
            ? styled.backgroundColor
            : theme.loading.background};

    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    z-index: 999;
`;
