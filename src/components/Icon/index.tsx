import { IconProps } from './interface';
import { IconContainer } from './styled';

export const Icon = ({
    customStyleds,
    icon,
    handleClick,
    size,
    color,
    cursor,
}: IconProps) => {
    return (
        <IconContainer
            style={customStyleds}
            onClick={handleClick}
            styled={{ color, cursor, size }}
            className={`fas fa-${icon}`}
        />
    );
};
