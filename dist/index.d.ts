import React, { InputHTMLAttributes } from 'react';

interface IOwnProps extends InputHTMLAttributes<HTMLButtonElement> {
}
declare const ButtonWrapper: React.FC<IOwnProps>;

export { ButtonWrapper as UIButton };
