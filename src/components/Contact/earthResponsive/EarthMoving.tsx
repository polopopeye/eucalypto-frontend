import React from 'react';
import styles from './earth.module.css';

const EarthMoving = () => {
  return (
    <>
      <div
        id="earthMoving"
        style={{
          zoom: 2,
          zIndex: 1,
        }}
        className="mx-auto w-full"
      >
        <div id={styles.earth}>
          <div id={styles['earth-surface']}>
            <div id={styles['surface-1']} className={styles.surface}></div>
            <div id={styles['surface-2']} className={styles.surface}></div>
            <div id={styles['surface-3']} className={styles.surface}></div>
            <div id={styles['surface-4']} className={styles.surface}></div>
            <div id={styles['surface-5']} className={styles.surface}></div>
            <div id={styles['surface-6']} className={styles.surface}></div>
            <div id={styles['surface-7']} className={styles.surface}></div>
            <div id={styles['surface-8']} className={styles.surface}></div>
          </div>
          <div id={styles['earth-surface-end']}>
            <div id={styles['surface-end-1']} className={styles.surface}></div>
            <div id={styles['surface-end-2']} className={styles.surface}></div>
            <div id={styles['surface-end-3']} className={styles.surface}></div>
            <div id={styles['surface-end-4']} className={styles.surface}></div>
            <div id={styles['surface-end-5']} className={styles.surface}></div>
            <div id={styles['surface-end-6']} className={styles.surface}></div>
            <div id={styles['surface-end-7']} className={styles.surface}></div>
            <div id={styles['surface-end-8']} className={styles.surface}></div>
          </div>
          <div id={styles['earth-cloud']}>
            <div id={styles['cloud-1']} className={styles.cloud}></div>
            <div id={styles['cloud-2']} className={styles.cloud}></div>
            <div id={styles['cloud-3']} className={styles.cloud}></div>
            <div id={styles['cloud-4']} className={styles.cloud}></div>
            <div id={styles['cloud-5']} className={styles.cloud}></div>
            <div id={styles['cloud-6']} className={styles.cloud}></div>
          </div>
          <div id={styles['earth-cloud-end']}>
            <div id={styles['cloud-end-1']} className={styles.cloud}></div>
            <div id={styles['cloud-end-2']} className={styles.cloud}></div>
            <div id={styles['cloud-end-3']} className={styles.cloud}></div>
            <div id={styles['cloud-end-4']} className={styles.cloud}></div>
          </div>
          <div id={styles['mask']}></div>
        </div>
      </div>
    </>
  );
};

export default EarthMoving;
