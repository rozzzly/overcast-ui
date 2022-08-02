import React from 'react';
import styled from '@emotion/styled';
import palette, { CONTENT_BACKGROUND } from '@overcast-ui/theme/colors';
import { computeFont } from '@overcast-ui/theme/typography';

export const PlaygroundContainer = styled.div`
    margin-bottom: var(--ifm-leading);
    border-radius: var(--ifm-global-radius);
    /* box-shadow: var(--ifm-global-shadow-lw); */
    overflow: hidden;

    & .LiveEditor {
        font: var(--ifm-code-font-size) / var(--ifm-pre-line-height)
              var(--ifm-font-family-monospace) !important;
        /* rtl:ignore */
        direction: ltr;

        & > textarea {
            background: ${CONTENT_BACKGROUND} !important;
        }
    }
`;

export const PlaygroundHeader = styled.div`
    text-transform: uppercase;
    font-weight: bold;
    /* background: var(--ifm-color-emphasis-200); */
    color: var(--ifm-color-content);
    font-size: var(--ifm-code-font-size);

    margin: -8px -8px 0;
    display: flex;
    align-items: center;

    --height: 48px;
    height: var(--height);
    padding-left: calc((var(--height) - 12px) / 2);

    background: ${palette.GRAY[1]};

    & h3 {
        ${computeFont('roboto', 12)}
        letter-spacing: 1px;
        font-weight: 400;
        margin: 0;
    }


`;



export const PlaygroundEditor = styled.div`
    padding: 8px;
`;
