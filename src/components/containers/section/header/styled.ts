import styled from 'styled-components';
import { IGlobalTheme } from '../../../../../GlobalInterfaces';
import { IHeaderSectionStyled } from './interfaces';

export const ContainerTextHeaderSection = styled.div<{
    styled: Omit<IHeaderSectionStyled, 'customStyleds'>;
    theme?: IGlobalTheme;
}>`
    width: 100%;
    max-width: 70rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 10px;

    text-align: center;

    h1 {
        white-space: pre-line;

        font-size: 3rem;
        font-weight: bold;

        color: ${({ styled, theme }) => {
            switch (styled.theme) {
                case 'primary':
                    return theme.sections.primary.text.title.color;
                case 'second':
                    return theme.sections.second.text.title.color;
                case 'third':
                    return theme.sections.third.text.title.color;
                case 'fourth':
                    return theme.sections.fourth.text.title.color;
                case 'fifth':
                    return theme.sections.fifth.text.title.color;
                case 'sixth':
                    return theme.sections.sixth.text.title.color;
                default:
                    return 'black';
            }
        }};

        text-shadow: ${({ styled, theme }) => {
            switch (styled.theme) {
                case 'primary':
                    if (theme.sections.primary.text.title.textShadown)
                        return '.8px .8px 1.5px black';
                    break;
                case 'second':
                    if (theme.sections.second.text.title.textShadown)
                        return '.8px .8px 1.5px black';
                    break;
                case 'third':
                    if (theme.sections.third.text.title.textShadown)
                        return '.8px .8px 1.5px black';
                    break;
                case 'fourth':
                    if (theme.sections.fourth.text.title.textShadown)
                        return '.8px .8px 1.5px black';
                    break;
                case 'fifth':
                    if (theme.sections.fifth.text.title.textShadown)
                        return '.8px .8px 1.5px black';
                    break;
                case 'sixth':
                    if (theme.sections.sixth.text.title.textShadown)
                        return '.8px .8px 1.5px black';
                    break;
            }
        }};

        letter-spacing: ${({ styled, theme }) => {
            switch (styled.theme) {
                case 'primary':
                    return theme.sections.primary.text.title?.letterSpacing;
                case 'second':
                    return theme.sections.second.text.title?.letterSpacing;
                case 'third':
                    return theme.sections.third.text.title?.letterSpacing;
                case 'fourth':
                    return theme.sections.fourth.text.title?.letterSpacing;
                case 'fifth':
                    return theme.sections.fifth.text.title?.letterSpacing;
                case 'sixth':
                    return theme.sections.sixth.text.title?.letterSpacing;
            }
        }};
    }

    p {
        white-space: pre-line;
        letter-spacing: ${({ styled, theme }) => {
            switch (styled.theme) {
                case 'primary':
                    return theme.sections.primary.text.subTitle?.letterSpacing;
                case 'second':
                    return theme.sections.second.text.subTitle?.letterSpacing;
                case 'third':
                    return theme.sections.third.text.subTitle?.letterSpacing;
                case 'fourth':
                    return theme.sections.fourth.text.subTitle?.letterSpacing;
                case 'fifth':
                    return theme.sections.fifth.text.subTitle?.letterSpacing;
                case 'sixth':
                    return theme.sections.sixth.text.subTitle?.letterSpacing;
            }
        }};

        font-size: 2rem;
        color: ${({ styled, theme }) => {
            switch (styled.theme) {
                case 'primary':
                    return theme.sections.primary.text.subTitle?.color;
                case 'second':
                    return theme.sections.second.text.subTitle?.color;
                case 'third':
                    return theme.sections.third.text.subTitle?.color;
                case 'fourth':
                    return theme.sections.fourth.text.subTitle?.color;
                case 'fifth':
                    return theme.sections.fifth.text.subTitle?.color;
                case 'sixth':
                    return theme.sections.sixth.text.subTitle?.color;
                default:
                    return 'black';
            }
        }};

        text-shadow: ${({ styled, theme }) => {
            switch (styled.theme) {
                case 'primary':
                    if (theme.sections.primary.text.subTitle?.textShadown)
                        return '.8px .8px 1.5px black';
                    break;
                case 'second':
                    if (theme.sections.second.text.subTitle?.textShadown)
                        return '.8px .8px 1.5px black';
                    break;
                case 'third':
                    if (theme.sections.third.text.subTitle?.textShadown)
                        return '.8px .8px 1.5px black';
                    break;
                case 'fourth':
                    if (theme.sections.fourth.text.subTitle?.textShadown)
                        return '.8px .8px 1.5px black';
                    break;
                case 'fifth':
                    if (theme.sections.fifth.text.subTitle?.textShadown)
                        return '.8px .8px 1.5px black';
                    break;
                case 'sixth':
                    if (theme.sections.sixth.text.subTitle?.textShadown)
                        return '.8px .8px 1.5px black';
                    break;
            }
        }};
    }

    @media (max-width: 992px) {
        h1 {
            font-size: 2.8rem;
        }

        p {
            font-size: 1.8rem;
        }
    }

    @media (max-width: 520px) {
        h1 {
            font-size: 2.6rem;
        }
        p {
            font-size: 1.6rem;
        }
    }
`;
