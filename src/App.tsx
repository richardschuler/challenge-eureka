/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useApi } from "./api";
import logo from './logo.svg';
import avatar from './stevejobsavatar.jpeg';
import circleicon from './circleicon.svg';
import styles from './App.module.less';

export default function App() {
  const { getBackground } = useApi()
  const [ background, setBackground] = useState('')

  useEffect(() => {
    async function loadBg(){
      await getBackground().then(
        result => setBackground(result)
      )
    };

    loadBg()
  })

  return (
    <div className={styles.App}>
      <header>
        <img src={logo} alt="New Roots" />
      </header>
      <div className={styles.wrpContent} style={{ backgroundImage: `url(${background})` }}>
        <div className={styles.content}>
          <div className={styles.contentBlocks}>
            <ul className={styles.Blocks}>
              <li className={styles.Block}>
                <div className={styles.contentBlockLeft}>
                  <ul className={styles.contentBlockHeader}>
                    <li>
                      <span>Pos.</span>
                    </li>
                    <li>
                      <span>Member</span>
                    </li>
                    <li>
                      <span>Points</span>
                    </li>
                  </ul>
                </div>
                <div className={styles.contentBlockLeft}>
                  <ul className={styles.contentBlockInfo}>
                    <li>
                      <a href="#">
                        <span>1</span>
                        <span><img src={avatar} alt="Avatar" />Steve Jobs</span>
                        <span>100</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>2</span>
                        <span><img src={avatar} alt="Avatar" />Steve Jobs</span>
                        <span>100</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>3</span>
                        <span><img src={avatar} alt="Avatar" />Steve Jobs</span>
                        <span>100</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>4</span>
                        <span><img src={avatar} alt="Avatar" />Steve Jobs</span>
                        <span>100</span>
                      </a>
                    </li>
                    <li>
                      <a href="teste">
                        <span>5</span>
                        <span><img src={avatar} alt="Avatar" />Steve Jobs</span>
                        <span>100</span>
                      </a>
                    </li>
                    <li>
                      <a href="teste">
                        <span>6</span>
                        <span><img src={avatar} alt="Avatar" />Steve Jobs</span>
                        <span>100</span>
                      </a>
                    </li>
                    <li>
                      <a href="teste">
                        <span>7</span>
                        <span><img src={avatar} alt="Avatar" />Steve Jobs</span>
                        <span>100</span>
                      </a>
                    </li>
                    <li>
                      <a href="teste">
                        <span>8</span>
                        <span><img src={avatar} alt="Avatar" />Steve Jobs</span>
                        <span>100</span>
                      </a>
                    </li>
                    <li>
                      <a href="teste">
                        <span>9</span>
                        <span><img src={avatar} alt="Avatar" />Steve Jobs</span>
                        <span>100</span>
                      </a>
                    </li>
                    <li>
                      <a href="teste">
                        <span>10</span>
                        <span><img src={avatar} alt="Avatar" />Steve Jobs</span>
                        <span>100</span>
                      </a>
                    </li>
                    <li>
                      <a href="teste">
                        <span>11</span>
                        <span><img src={avatar} alt="Avatar" />Steve Jobs</span>
                        <span>100</span>
                      </a>
                    </li>
                    <li>
                      <a href="teste">
                        <span>12</span>
                        <span><img src={avatar} alt="Avatar" />Steve Jobs</span>
                        <span>100</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles.Block}>
                <div className={styles.contentBlockCenter}>
                  <div className={styles.contentBlockHeader}>
                    <img src={avatar} alt="Avatar" />
                    <p className={styles.userName}>
                      <span>Steve Jobs</span>
                    </p>
                    <p className={styles.userAttribution}>
                      <span>Sales Incentive Program Contributor</span>
                    </p>
                  </div>
                </div>
              </li>
              <li className={styles.Block}>
                <div className={styles.contentBlockRight}>
                  <div className={styles.contentBlockHeader}>
                    <p className={styles.mainTitle}>Activity Feed</p>
                    <a href="#" className={styles.subTitle}>Show Filters</a>
                  </div>
                </div>
                <div className={styles.contentBlockRight}>
                  <ul className={styles.contentBlockInfo}>
                    <li className={styles.listActivity}>
                      <div className={styles.icon}>
                        <img src={circleicon} alt="icon" />
                      </div>
                      <p>
                        <span>Yesterday</span>
                        <span>Received 100 points for completing the Incentive Imperdiet senectus sit.</span>
                      </p>
                    </li>
                    <li className={styles.listActivity}>
                      <div className={styles.icon}>
                        <img src={circleicon} alt="icon" />
                      </div>
                      <p>
                        <span>Yesterday</span>
                        <span>Received 100 points for completing the Incentive Imperdiet senectus sit.</span>
                      </p>
                    </li>
                    <li className={styles.listActivity}>
                      <div className={styles.icon}>
                        <img src={circleicon} alt="icon" />
                      </div>
                      <p>
                        <span>Yesterday</span>
                        <span>Received 100 points for completing the Incentive Imperdiet senectus sit.</span>
                      </p>
                    </li>
                    <li className={styles.listActivity}>
                      <div className={styles.icon}>
                        <img src={circleicon} alt="icon" />
                      </div>
                      <p>
                        <span>Yesterday</span>
                        <span>Received 100 points for completing the Incentive Imperdiet senectus sit.</span>
                      </p>
                    </li>
                    <li className={styles.listActivity}>
                      <div className={styles.icon}>
                        <img src={circleicon} alt="icon" />
                      </div>
                      <p>
                        <span>Yesterday</span>
                        <span>Received 100 points for completing the Incentive Imperdiet senectus sit.</span>
                      </p>
                    </li>
                    <li className={styles.listActivity}>
                      <div className={styles.icon}>
                        <img src={circleicon} alt="icon" />
                      </div>
                      <p>
                        <span>Yesterday</span>
                        <span>Received 100 points for completing the Incentive Imperdiet senectus sit.</span>
                      </p>
                    </li>
                    <li className={styles.listActivity}>
                      <div className={styles.icon}>
                        <img src={circleicon} alt="icon" />
                      </div>
                      <p>
                        <span>Yesterday</span>
                        <span>Received 100 points for completing the Incentive Imperdiet senectus sit.</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
