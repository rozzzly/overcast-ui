import React from 'react';
import styled from '@emotion/styled';
import { RED } from '@overcast-ui/theme';

const StyledButton = styled.button`
    button {
        background: ${RED};
    }
`;

interface ButtonProps {
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

export const Button: React.FC<ButtonProps> = ({ label }) => {
    return (
        <StyledButton>{label}</StyledButton>
    );
};