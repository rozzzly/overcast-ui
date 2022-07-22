import React from 'react';
import { rgba } from 'polished';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import palette, { Intent, INTENT_BG_ALT, INTENT_COLORS } from '@overcast-ui/theme/colors';
import { BORDER_RADIUS, ControlHeight } from '@overcast-ui/theme/constants';
import { computeFont } from '@overcast-ui/theme/typography';
import { borderShadow } from '@overcast-ui/theme/shadows';

export const IconContainer = styled.span<{ intent?: Intent }>`
    flex: 0 1 0;
    width: 100%;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    background: ${ p => p.intent ? rgba(INTENT_BG_ALT[p.intent], 1) : rgba(palette.LIGHT_GRAY[5], 0.075) };

    transition: box-shadow 200ms ease-in-out, background 200ms ease-in-out;

    &:first-child {
        box-shadow: ${ p => ((p.intent)
            ? `inset 0 0 0 1px ${rgba(0, 0, 0, 0.4)}, inset -1px 0 2px 0px ${rgba(0, 0, 0, 0.2)}`
            : `inset 0 0 0 1px ${rgba('#000', 0.2)}, inset -2px 0 2px 0px ${rgba('#000', 0.2)}`
        )};
        border-top-left-radius: ${BORDER_RADIUS};
        border-bottom-left-radius: ${BORDER_RADIUS};
    }
    &:last-child {
        box-shadow: ${ p => ((p.intent)
            ? `inset 0 0 0 1px ${rgba(0, 0, 0, 0.4)}, inset 1px 0 2px 0px ${rgba(0, 0, 0, 0.2)}`
            : `inset 0 0 0 1px ${rgba('#000', 0.2)}, inset 2px 0 2px 0px ${rgba('#000', 0.2)}`
        )};
        border-top-right-radius: ${BORDER_RADIUS};
        border-bottom-right-radius: ${BORDER_RADIUS};
    }

    & svg {
        align-self: center;
    }
`;

export const inputShadow = (color: string, isFocused: boolean) => (isFocused
    ? `
        ${borderShadow(1, color, 1)},
        ${borderShadow(1, color, 1)}, // duplicated to minimize browser antialiasing in dark mode
        ${borderShadow(0.3, color, 3)}
    ` : `
        ${borderShadow(0.5, color, 0.5)},
        ${borderShadow(0.3, color, 2)},
        0px 0px 0px 0px rgba(0, 0, 0, 0)
    `
);

export interface TextInputContainerProps {
    intent?: Intent
    disabled: boolean;
    isFocused: boolean;
}

export const TextInputContainer = styled.div<TextInputContainerProps>`
    outline: none;
    height: ${ControlHeight.normal}px;
    border-radius: ${BORDER_RADIUS};
    overflow: hidden;
    background: ${p => p.disabled ? rgba(palette.DARK_GRAY[5], 0.5) : '#27343e'};
    color: ${palette.LIGHT_GRAY[5]};
    transition: box-shadow 300ms ease-in-out, background 250ms ease-in-out;
    user-select: ${p => p.disabled ? 'none' : 'inherit'};
    box-shadow: ${ p => (p.disabled
        ? css`
            inset 0 0 0 1px ${rgba(palette.BLACK, 0.3)},
            0px 0px 0px 0px rgba(0, 0, 0, 0),
            0px 0px 0px 0px rgba(0, 0, 0, 0),
            0px 0px 0px 0px rgba(0, 0, 0, 0),
            0px 0px 0px 0px rgba(0, 0, 0, 0)
        `
        : `
            inset 0 0 0 1px ${rgba(palette.BLACK, 0.3)},
            ${((p.intent || p.isFocused)
                ? `${inputShadow((p.intent && INTENT_COLORS[p.intent]) || INTENT_COLORS.primary, p.isFocused)},`
                : '0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0),'
            )}
            inset 0 0 0 1px ${rgba(palette.BLACK, 0.4)}
        `
    )};

    display: flex;
    align-items: center;

    ${IconContainer} {
        height: ${ControlHeight.normal}px;
    }

    & input {
        padding: 0 8px;
        flex: 1 1;
        border: none;
        outline: none;
        background: none;
        color: ${p => p.disabled ? rgba(palette.GRAY[4], 0.5) : palette.LIGHT_GRAY[5]};
        transition: color 200ms ease-in-out;
        height: ${ControlHeight.normal}px;
        ${computeFont('robotoMono', 9)}
    }
`;
