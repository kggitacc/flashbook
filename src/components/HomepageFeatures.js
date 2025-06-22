import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Forget the algorithm',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Connect with your audience, grow your mailing list, 
        drop exclusive flash, display countdowns to upcoming drops, 
        and send automated messages to your followers.
      </>
    ),
  },
  {
    title: 'Clients tell you what they want',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        No more lengthy back and forth, clients can pick flash, schedule an appointment, 
        and pay their deposit without you answering a single question.
      </>
    ),
  },
  {
    title: 'Showcase your work',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Clients can browse your available flash or answer personalized questions to request custom work. And so much more ..........
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
