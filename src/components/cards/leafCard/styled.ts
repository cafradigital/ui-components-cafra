import styled from 'styled-components';
import { IGlobalTheme } from '../../../../GlobalInterfaces';
import { ILeafCardStyleds } from './interfaces';

export const ContainerLeafCard = styled.div<{
    styled: ILeafCardStyleds;
    theme?: IGlobalTheme;
}>`
    max-width: ${({ styled }) => {
        switch (styled.size) {
            case 'small':
                return '200px';
            case 'medium':
                return '250px';
            case 'large':
                return '300px';
        }
    }};

    max-height: ${({ styled }) => {
        switch (styled.size) {
            case 'small':
                return '250px';
            case 'medium':
                return '300px';
            case 'large':
                return '350px';
        }
    }};

    min-width: ${({ styled }) => {
        switch (styled.size) {
            case 'small':
                return '150px';
            case 'medium':
                return '200px';
            case 'large':
                return '250px';
        }
    }};

    min-height: ${({ styled }) => {
        switch (styled.size) {
            case 'small':
                return '200px';
            case 'medium':
                return '250px';
            case 'large':
                return '300px';
        }
    }};

    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    box-shadow: 2px 2px 4px 0.5px
        ${({ styled }) => (styled.colorShadown ? styled.colorShadown : 'black')};

    background-color: ${({ styled, theme }) => {
        switch (styled.theme) {
            case 'second':
                return theme.sections.second.cards.background;
            case 'third':
                return theme.sections.third.cards.background;
            case 'fourth':
                return theme.sections.fourth.cards.background;
            case 'fifth':
                return theme.sections.fifth.cards.background;
            case 'sixth':
                return theme.sections.sixth.cards.background;
            default:
                return 'black';
        }
    }};

    border-top-right-radius: 30%;
    border-bottom-left-radius: 30%;

    h2 {
        color: ${({ styled, theme }) => {
            switch (styled.theme) {
                case 'second':
                    return theme.sections.second.cards.title?.color;
                case 'third':
                    return theme.sections.third.cards.title?.color;
                case 'fourth':
                    return theme.sections.fourth.cards.title?.color;
                case 'fifth':
                    return theme.sections.fifth.cards.title?.color;
                case 'sixth':
                    return theme.sections.sixth.cards.title?.color;
                default:
                    return 'black';
            }
        }};

        text-shadow: ${({ styled, theme }) => {
            switch (styled.theme) {
                case 'second':
                    if (theme.sections.second.cards.title?.textShadown)
                        return '0.5px 0.5px 1.5px #00000080';
                    break;
                case 'third':
                    if (theme.sections.third.cards.title?.textShadown)
                        return '0.5px 0.5px 1.5px #00000080';
                    break;
                case 'fourth':
                    if (theme.sections.fourth.cards.title?.textShadown)
                        return '0.5px 0.5px 1.5px #00000080';
                    break;
                case 'fifth':
                    if (theme.sections.fifth.cards.title?.textShadown)
                        return '0.5px 0.5px 1.5px #00000080';
                    break;
                case 'sixth':
                    if (theme.sections.sixth.cards.title?.textShadown)
                        return '0.5px 0.5px 1.5px #00000080';
                    break;
            }
        }};

        margin-top: -25px;
        margin-left: 10px;
        font-size: 1.4rem;
    }
`;
