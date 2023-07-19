import { FC } from 'react';
import { ISectionProps } from './interfaces';
import { SectionContainer } from './styled';

export * from './header';

export const Section: FC<ISectionProps> = ({
    children,
    customStyleds,
    align,
    height,
    padding,
    theme,
}) => {
    return (
        <SectionContainer
            style={customStyleds}
            styled={{ align, height, padding, theme }}
        >
            {children}
        </SectionContainer>
    );
};
