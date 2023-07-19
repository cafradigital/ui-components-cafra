import React from 'react';
import { ContainerImage } from '../../containers/image';
import { ICardLeafProps } from './interfaces';
import { ContainerLeafCard } from './styled';

export const LeafCard: React.FC<ICardLeafProps> = ({
    img,
    size,
    theme,
    colorShadown,
    title,
    customStyleds,
}) => {
    let sizeImage = '170px';

    switch (size) {
        case 'small':
            sizeImage = '130px';
            break;
        case 'medium':
            sizeImage = '170px';
            break;
        case 'large':
            sizeImage = '220px';
            break;
    }

    return (
        <ContainerLeafCard
            style={customStyleds}
            styled={{ size, theme, colorShadown }}
        >
            <ContainerImage
                url={img.url}
                label={img.label}
                borderRadius={{
                    topRight: '30%',
                    bottomLeft: '20%',
                }}
                size={{ height: sizeImage, width: sizeImage }}
            />
            <h2 style={customStyleds}>{title}</h2>
        </ContainerLeafCard>
    );
};
