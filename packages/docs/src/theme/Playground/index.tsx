import type { Props } from '@theme/Playground';
import React from 'react';
import styled from '@emotion/styled';

import BrowserOnly from '@docusaurus/BrowserOnly';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { usePrismTheme } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { LiveProvider, LiveEditor as OriginalLiveEditor, LiveError, LivePreview } from 'react-live';

import { type ThemeConfig } from '@docusaurus/theme-live-codeblock';
import { PlaygroundContainer, PlaygroundEditor, PlaygroundHeader } from './styles';

import Panel from '@overcast-ui/core/Panel';


const LivePreviewLoader: React.FC = () => (
    <div>Loading...</div>
);

const Result: React.FC = ({}) => (
    <PlaygroundEditor>
        <BrowserOnly fallback={<LivePreviewLoader />}>
            {() => (
                <>
                    <LivePreview />
                    <LiveError />
                </>
            )}
        </BrowserOnly>
    </PlaygroundEditor>
);


export const LiveEditor: React.FC<{}> = ({}) => {
    const isBrowser = useIsBrowser();
    return (
        <OriginalLiveEditor
            // We force remount the editor on hydration,
            // otherwise dark prism theme is not applied
            key={String(isBrowser)}
            className="LiveEditor"
        />
    );
}

function EditorWithHeader() {
    return (
        <Panel>
            <PlaygroundHeader>
                <h3>Live Editor</h3>
            </PlaygroundHeader>
            <LiveEditor />
        </Panel>
    );
}

export default function Playground({
    children,
    transformCode,
    ...props
}: Props): JSX.Element {
    const {
        siteConfig: { themeConfig },
    } = useDocusaurusContext();
    const {
        liveCodeBlock: { playgroundPosition },
    } = themeConfig as ThemeConfig;
    const prismTheme = usePrismTheme();

    const noInline = props.metastring?.includes('noInline') ?? false;

    return (
        <PlaygroundContainer>
            {/* @ts-expect-error: type incompatibility with refs */}
            <LiveProvider
                code={children.replace(/\n$/, '')}
                noInline={noInline}
                transformCode={transformCode ?? ((code) => `${code};`)}
                theme={prismTheme}
                {...props}>
                {playgroundPosition === 'top' ? (
                    <>
                        <Result />
                        <EditorWithHeader />
                    </>
                ) : (
                    <>
                        <EditorWithHeader />
                        <Result />
                    </>
                )}
            </LiveProvider>
        </PlaygroundContainer>
    );
}
