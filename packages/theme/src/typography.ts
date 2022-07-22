import robotoMetrics from '@capsizecss/metrics/roboto';
import robotoMonoMetrics from '@capsizecss/metrics/robotoMono';
import notoSansMonoMetrics from '@capsizecss/metrics/notoSansMono';
import { createStyleObject } from '@capsizecss/core';
import { css } from '@emotion/react';

const fontData = {
    roboto: {
        family: `'Roboto', sans-serif`,
        metrics: robotoMetrics,
    },
    robotoMono: {
        family: `'Roboto Mono', monospace`,
        metrics: robotoMonoMetrics
    },
    notoSansMono: {
        family: `'Noto Sans Mono', monospace`,
        metrics: notoSansMonoMetrics
    },
} as const;



export const computeFont = <F extends keyof typeof fontData>(font: F, capHeight: number) => {
    const { '::before': before, '::after': after, fontSize, lineHeight } = createStyleObject({
        capHeight: capHeight,
        fontMetrics: fontData[font].metrics
    });

    return css`
        line-height: ${lineHeight};
        font-size: ${fontSize};
        font-family: ${fontData[font].family};
        &::before {
            ${css(before)}
        }
        &::after {
            ${css(after)}
        }
    `;
};