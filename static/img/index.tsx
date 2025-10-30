import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Hybrid AI Approach',
    Svg: require('@site/static/img/undraw_artificial_intelligence.svg').default,
    description: (
      <>
        Following Phase 1 R&D, we're implementing a hybrid model using GitHub Copilot 
        for high-level documentation generation and AI agents for intelligent questioning 
        against verified documentation.
      </>
    ),
  },
  {
    title: 'Human-Readable Documentation',
    Svg: require('@site/static/img/undraw_file_manager.svg').default,
    description: (
      <>
        Copilot generates <strong>high-level, inline documentation</strong> that is 
        human readable, quick to verify, and provides consistency across repositories. 
        Focus on quality and maintainability.
      </>
    ),
  },
  {
    title: 'Smart Knowledge Sharing',
    Svg: require('@site/static/img/undraw_team_collaboration.svg').default,
    description: (
      <>
        Building toward organization-wide knowledge sharing with AI-optimized processes, 
        exploring <strong>RAG vs MCP</strong> approaches, and creating forums for 
        cross-team collaboration.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
