import React from 'react';
import styles from './Mission.module.css';

const Mission = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our Mission & Vision</h2>
      <div className={styles.content}>
        <p><strong>Mission:</strong> To deliver authentic Indian goods globally and empower local artisans.</p>
        <p><strong>Vision:</strong> To be a globally recognized exporter of quality Indian products.</p>
      </div>
    </section>
  );
};

export default Mission;
