import styled from 'styled-components';
import { IGlobalTheme } from '../../../../../GlobalInterfaces';
import { ILoadingStyleds } from '../../intefaces';

export const Loading = styled.div<{
    styled: ILoadingStyleds;
    theme: IGlobalTheme;
}>`
    z-index: 9999;
    & {
        font-size: ${({ styled: { size } }) => {
            switch (size) {
                case 'big':
                    return '12px';
                case 'medium':
                    return '6px';
                case 'small':
                    return '3.5px';
            }
        }};
        width: 1em;
        height: 1em;
        border-radius: 50%;
        position: relative;
        text-indent: -9999em;
        -webkit-animation: load5 1.1s infinite ease;
        animation: load5 1.1s infinite ease;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
    }
    @-webkit-keyframes load5 {
        0%,
        100% {
            box-shadow:
                0em -2.6em 0em 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)},
                1.8em -1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                2.5em 0em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                1.75em 1.75em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                0em 2.5em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                -1.8em 1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                -2.6em 0em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}50,
                -1.8em -1.8em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}70;
        }
        12.5% {
            box-shadow:
                0em -2.6em 0em 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}70,
                1.8em -1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)},
                2.5em 0em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                1.75em 1.75em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                0em 2.5em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                -1.8em 1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                -2.6em 0em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                -1.8em -1.8em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}50;
        }
        25% {
            box-shadow:
                0em -2.6em 0em 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}50,
                1.8em -1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}70,
                2.5em 0em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor},
                1.75em 1.75em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                0em 2.5em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                -1.8em 1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                -2.6em 0em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                -1.8em -1.8em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20;
        }
        37.5% {
            box-shadow:
                0em -2.6em 0em 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                1.8em -1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}50,
                2.5em 0em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}70,
                1.75em 1.75em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor},
                0em 2.5em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                -1.8em 1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                -2.6em 0em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                -1.8em -1.8em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20;
        }
        50% {
            box-shadow:
                0em -2.6em 0em 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                1.8em -1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                2.5em 0em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}50,
                1.75em 1.75em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}70,
                0em 2.5em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor},
                -1.8em 1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                -2.6em 0em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                -1.8em -1.8em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20;
        }
        62.5% {
            box-shadow:
                0em -2.6em 0em 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                1.8em -1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                2.5em 0em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                1.75em 1.75em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}50,
                0em 2.5em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}70,
                -1.8em 1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)},
                -2.6em 0em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                -1.8em -1.8em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20;
        }
        75% {
            box-shadow:
                0em -2.6em 0em 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                1.8em -1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                2.5em 0em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                1.75em 1.75em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                0em 2.5em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}50,
                -1.8em 1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}70,
                -2.6em 0em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)},
                -1.8em -1.8em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20;
        }
        87.5% {
            box-shadow:
                0em -2.6em 0em 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                1.8em -1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                2.5em 0em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                1.75em 1.75em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                0em 2.5em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                -1.8em 1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}50,
                -2.6em 0em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}70,
                -1.8em -1.8em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor};
        }
    }
    @keyframes load5 {
        0%,
        100% {
            box-shadow:
                0em -2.6em 0em 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)},
                1.8em -1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                2.5em 0em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                1.75em 1.75em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                0em 2.5em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                -1.8em 1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                -2.6em 0em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}50,
                -1.8em -1.8em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}70;
        }
        12.5% {
            box-shadow:
                0em -2.6em 0em 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}70,
                1.8em -1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)},
                2.5em 0em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                1.75em 1.75em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                0em 2.5em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                -1.8em 1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                -2.6em 0em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                -1.8em -1.8em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}50;
        }
        25% {
            box-shadow:
                0em -2.6em 0em 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}50,
                1.8em -1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}70,
                2.5em 0em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor},
                1.75em 1.75em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                0em 2.5em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                -1.8em 1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                -2.6em 0em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                -1.8em -1.8em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20;
        }
        37.5% {
            box-shadow:
                0em -2.6em 0em 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                1.8em -1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}50,
                2.5em 0em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}70,
                1.75em 1.75em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor},
                0em 2.5em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                -1.8em 1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                -2.6em 0em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                -1.8em -1.8em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20;
        }
        50% {
            box-shadow:
                0em -2.6em 0em 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                1.8em -1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                2.5em 0em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}50,
                1.75em 1.75em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}70,
                0em 2.5em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor},
                -1.8em 1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                -2.6em 0em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                -1.8em -1.8em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20;
        }
        62.5% {
            box-shadow:
                0em -2.6em 0em 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                1.8em -1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                2.5em 0em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                1.75em 1.75em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}50,
                0em 2.5em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}70,
                -1.8em 1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)},
                -2.6em 0em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                -1.8em -1.8em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20;
        }
        75% {
            box-shadow:
                0em -2.6em 0em 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                1.8em -1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                2.5em 0em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                1.75em 1.75em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                0em 2.5em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}50,
                -1.8em 1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}70,
                -2.6em 0em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)},
                -1.8em -1.8em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20;
        }
        87.5% {
            box-shadow:
                0em -2.6em 0em 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                1.8em -1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}20,
                2.5em 0em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                1.75em 1.75em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                0em 2.5em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor}20,
                -1.8em 1.8em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}50,
                -2.6em 0em 0 0em ${({ styled, theme }) => (styled.color ? styled.color : theme.loading.color)}70,
                -1.8em -1.8em 0 0em
                    ${({ styled: { color }, theme }) =>
                        color || theme.mainColor};
        }
    }
`;
