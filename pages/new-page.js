import React from 'react';
import styles from '../styles/NewPage.module.css';

const NewPage = props => (
  <div className={styles.newPageWrapper}>
    <h1>Howdy All!</h1>
    <p>
      <i class="fal fa-hand-rock"></i> You are awesome today!
    </p>
    <p>
      That is all.
    </p>
  </div>
)

export default NewPage;