import React from 'react';
import styled from '@emotion/styled';
import { BLUE } from '@overcast-ui/theme/colors';
import { FooBar } from './fooBar';

const StyledButton = styled.button`
    button {
        background: ${BLUE[5]};
    }
`;

export interface ButtonProps extends FooBar {

    /** what the hell */
    bizbaz: FooBar;
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * A button
 */
export const Button = ({ label }: ButtonProps) => {
    return (
        <StyledButton>{label}</StyledButton>
    );
};

export default Button;