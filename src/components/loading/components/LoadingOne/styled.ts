import styled from 'styled-components';
import { IGlobalTheme } from '../../../../../GlobalInterfaces';
import { ILoadingStyleds } from '../../intefaces';

export const Loading = styled.div<{
    styled: ILoadingStyleds;
    theme: IGlobalTheme;
}>`
    z-index: 9999;
    &,
    &:before,
    &:after {
        background: ${({ styled, theme }) =>
            styled.color ? styled.color : theme.loading.color};

        -webkit-animation: load1 1s infinite ease-in-out;
        animation: load1 1s infinite ease-in-out;
        width: ${({ styled: { size } }) => {
            switch (size) {
                case 'big':
                    return '1rem';
                case 'medium':
                    return '.95rem';
                case 'small':
                    return '.9rem';
            }
        }};
        height: ${({ styled: { size } }) => {
            switch (size) {
                case 'big':
                    return '3rem';
                case 'medium':
                    return '2rem';
                case 'small':
                    return '1rem';
            }
        }};
    }
    & {
        color: ${({ styled: { color }, theme }) => color || theme.mainColor};
        text-indent: -9999rem;
        position: relative;
        font-size: 11px;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }
    &:before,
    &:after {
        position: absolute;
        top: 0;
        content: '';
    }
    &:before {
        left: -1.5rem;
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }
    &:after {
        left: 1.5rem;
    }
    @-webkit-keyframes load1 {
        0%,
        80%,
        100% {
            box-shadow: 0 0;
            height: ${({ styled: { size } }) => {
                switch (size) {
                    case 'big':
                        return '3rem';
                    case 'medium':
                        return '2rem';
                    case 'small':
                        return '1rem';
                }
            }};
        }
        40% {
            box-shadow: 0 -2rem;
            height: ${({ styled: { size } }) => {
                switch (size) {
                    case 'big':
                        return '4rem';
                    case 'medium':
                        return '3rem';
                    case 'small':
                        return '2rem';
                }
            }};
        }
    }
    @keyframes load1 {
        0%,
        80%,
        100% {
            box-shadow: 0 0;
            height: ${({ styled: { size } }) => {
                switch (size) {
                    case 'big':
                        return '3rem';
                    case 'medium':
                        return '2rem';
                    case 'small':
                        return '1rem';
                }
            }};
        }
        40% {
            box-shadow: 0 -2rem;
            height: ${({ styled: { size } }) => {
                switch (size) {
                    case 'big':
                        return '4rem';
                    case 'medium':
                        return '3rem';
                    case 'small':
                        return '2rem';
                }
            }};
        }
    }
`;
