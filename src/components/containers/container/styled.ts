import styled from 'styled-components';
import { IContainerComponentStyled } from './interfaces';

export const StyledContainer = styled.div<{
    styled: IContainerComponentStyled;
}>`
    width: 100%;

    display: flex;

    text-align: ${({ styled }) =>
        styled.align?.textAlign ? styled.align?.textAlign : 'initial'};

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

    height: ${({ styled }) => {
        const heights = {
            full: '100vh',
            auto: 'auto',
            '0.5x': '5vh',
            '1x': '10vh',
            '1.5x': '15vh',
            '2x': '20vh',
            '2.5x': '25vh',
            '3x': '30vh',
            '3.5x': '35vh',
            '4x': '40vh',
            '4.5x': '45vh',
            '5x': '50vh',
            '5.5x': '55vh',
            '6x': '60vh',
            '6.5x': '65vh',
            '7x': '70vh',
            '7.5x': '75vh',
            '8x': '80vh',
            '8.5x': '85vh',
            '9x': '90vh',
            '9.5x': '95vh',
        };

        if (styled.height) return heights[styled.height];
        else return 'auto';
    }};
`;
