import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styled from '@emotion/styled';

const CallToAction = styled.section`
    padding: 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    & img {
        width: 50vw;
    }
`;

export const Home = ({ }) => {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
            >
            <CallToAction>
                <img src="/img/logo.svg" />
            </CallToAction>
        </Layout>
    );
}

export default Home;