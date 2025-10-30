import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          BRS AI Automation Project
        </Heading>
        <p className="hero__subtitle">
          Hybrid AI Documentation & Automation for Golf Software Development
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overview">
            Get Started with Documentation 🚀
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/tags"
            style={{marginLeft: '1rem'}}>
            Browse by Tags 🏷️
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://golfnow.atlassian.net/browse/BRS-11809"
            target="_blank"
            rel="noopener noreferrer"
            style={{marginLeft: '1rem'}}>
            View Project on Jira 🔵
          </Link>
        </div>
      </div>
    </header>
  );
}

function ProjectPhases(): ReactNode {
  return (
    <section className={clsx('padding-vert--lg', styles.section)}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className="text--center margin-bottom--xl">
              <Heading as="h2">Project Roadmap</Heading>
              <p className="hero__subtitle">Our journey toward AI-enhanced documentation</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col--4">
            <div className="card margin-bottom--lg">
              <div className="card__header">
                <h3>✅ Phase 1: R&D Complete</h3>
              </div>
              <div className="card__body">
                <p>Initial research and development phase exploring AI documentation approaches. Hybrid model approach validated and agreed upon.</p>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className="card margin-bottom--lg">
              <div className="card__header">
                <h3>🚀 Current Phase: Implementation</h3>
              </div>
              <div className="card__body">
                <p>Using Copilot for high-level documentation generation. Exploring inline context and instructions for AI baseline context.</p>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className="card margin-bottom--lg">
              <div className="card__header">
                <h3>🎯 Future: Scale & Share</h3>
              </div>
              <div className="card__body">
                <p>Knowledge sharing across teams, RAG vs MCP research, and expanding proven processes to other areas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - AI Documentation & Automation`}
      description="Hybrid AI approach for golf software development documentation using GitHub Copilot and intelligent agents">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ProjectPhases />
      </main>
    </Layout>
  );
}
