import styled from 'styled-components';
import { IGlobalTheme } from '../../../../../../ftx-multimarcas/src/GlobalStyleds';
import { ILoadingStyleds } from '../../intefaces';

export const Loading = styled.div<{
    styled: ILoadingStyleds;
    theme: IGlobalTheme;
}>`
    & {
        color: ${({ styled: { color }, theme }) =>
            color || theme.primary.backgroundColor};
        font-size: ${({ styled: { size } }) => {
            switch (size) {
                case 'Big':
                    return '6px';
                case 'medium':
                    return '4.5px';
                case 'small':
                    return '3px';
            }
        }};
        width: 1em;
        height: 1em;
        border-radius: 50%;
        position: relative;
        text-indent: -9999em;
        -webkit-animation: load4 1.3s infinite linear;
        animation: load4 1.3s infinite linear;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
    }
    @-webkit-keyframes load4 {
        0%,
        100% {
            box-shadow:
                0 -3em 0 0.2em,
                2em -2em 0 0em,
                3em 0 0 -1em,
                2em 2em 0 -1em,
                0 3em 0 -1em,
                -2em 2em 0 -1em,
                -3em 0 0 -1em,
                -2em -2em 0 0;
        }
        12.5% {
            box-shadow:
                0 -3em 0 0,
                2em -2em 0 0.2em,
                3em 0 0 0,
                2em 2em 0 -1em,
                0 3em 0 -1em,
                -2em 2em 0 -1em,
                -3em 0 0 -1em,
                -2em -2em 0 -1em;
        }
        25% {
            box-shadow:
                0 -3em 0 -0.5em,
                2em -2em 0 0,
                3em 0 0 0.2em,
                2em 2em 0 0,
                0 3em 0 -1em,
                -2em 2em 0 -1em,
                -3em 0 0 -1em,
                -2em -2em 0 -1em;
        }
        37.5% {
            box-shadow:
                0 -3em 0 -1em,
                2em -2em 0 -1em,
                3em 0em 0 0,
                2em 2em 0 0.2em,
                0 3em 0 0em,
                -2em 2em 0 -1em,
                -3em 0em 0 -1em,
                -2em -2em 0 -1em;
        }
        50% {
            box-shadow:
                0 -3em 0 -1em,
                2em -2em 0 -1em,
                3em 0 0 -1em,
                2em 2em 0 0em,
                0 3em 0 0.2em,
                -2em 2em 0 0,
                -3em 0em 0 -1em,
                -2em -2em 0 -1em;
        }
        62.5% {
            box-shadow:
                0 -3em 0 -1em,
                2em -2em 0 -1em,
                3em 0 0 -1em,
                2em 2em 0 -1em,
                0 3em 0 0,
                -2em 2em 0 0.2em,
                -3em 0 0 0,
                -2em -2em 0 -1em;
        }
        75% {
            box-shadow:
                0em -3em 0 -1em,
                2em -2em 0 -1em,
                3em 0em 0 -1em,
                2em 2em 0 -1em,
                0 3em 0 -1em,
                -2em 2em 0 0,
                -3em 0em 0 0.2em,
                -2em -2em 0 0;
        }
        87.5% {
            box-shadow:
                0em -3em 0 0,
                2em -2em 0 -1em,
                3em 0 0 -1em,
                2em 2em 0 -1em,
                0 3em 0 -1em,
                -2em 2em 0 0,
                -3em 0em 0 0,
                -2em -2em 0 0.2em;
        }
    }
    @keyframes load4 {
        0%,
        100% {
            box-shadow:
                0 -3em 0 0.2em,
                2em -2em 0 0em,
                3em 0 0 -1em,
                2em 2em 0 -1em,
                0 3em 0 -1em,
                -2em 2em 0 -1em,
                -3em 0 0 -1em,
                -2em -2em 0 0;
        }
        12.5% {
            box-shadow:
                0 -3em 0 0,
                2em -2em 0 0.2em,
                3em 0 0 0,
                2em 2em 0 -1em,
                0 3em 0 -1em,
                -2em 2em 0 -1em,
                -3em 0 0 -1em,
                -2em -2em 0 -1em;
        }
        25% {
            box-shadow:
                0 -3em 0 -0.5em,
                2em -2em 0 0,
                3em 0 0 0.2em,
                2em 2em 0 0,
                0 3em 0 -1em,
                -2em 2em 0 -1em,
                -3em 0 0 -1em,
                -2em -2em 0 -1em;
        }
        37.5% {
            box-shadow:
                0 -3em 0 -1em,
                2em -2em 0 -1em,
                3em 0em 0 0,
                2em 2em 0 0.2em,
                0 3em 0 0em,
                -2em 2em 0 -1em,
                -3em 0em 0 -1em,
                -2em -2em 0 -1em;
        }
        50% {
            box-shadow:
                0 -3em 0 -1em,
                2em -2em 0 -1em,
                3em 0 0 -1em,
                2em 2em 0 0em,
                0 3em 0 0.2em,
                -2em 2em 0 0,
                -3em 0em 0 -1em,
                -2em -2em 0 -1em;
        }
        62.5% {
            box-shadow:
                0 -3em 0 -1em,
                2em -2em 0 -1em,
                3em 0 0 -1em,
                2em 2em 0 -1em,
                0 3em 0 0,
                -2em 2em 0 0.2em,
                -3em 0 0 0,
                -2em -2em 0 -1em;
        }
        75% {
            box-shadow:
                0em -3em 0 -1em,
                2em -2em 0 -1em,
                3em 0em 0 -1em,
                2em 2em 0 -1em,
                0 3em 0 -1em,
                -2em 2em 0 0,
                -3em 0em 0 0.2em,
                -2em -2em 0 0;
        }
        87.5% {
            box-shadow:
                0em -3em 0 0,
                2em -2em 0 -1em,
                3em 0 0 -1em,
                2em 2em 0 -1em,
                0 3em 0 -1em,
                -2em 2em 0 0,
                -3em 0em 0 0,
                -2em -2em 0 0.2em;
        }
    }
`;
