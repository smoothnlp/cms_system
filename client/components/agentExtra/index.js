import styles from './styles.module.css';

const AgentBlock = ({ agentData, data }) => {
  const AgentCardList = () => {
    return data.list.map((item, index) => {
      return (
        <>
          <div className={styles['reason_card']}>
            {/* <img
              src="https://a.storyblok.com/f/159374/48x49/a067987bbd/notta-feature-ai-summary.svg"
              alt="AI summary"
              className={styles['reason_icon']}
            /> */}
            <h4 className={styles.h4}>{item.title}</h4>
            <p className={styles.paragraph}>{item.text}</p>
          </div>
        </>
      );
    });
  };
  return (
    <>
      <div
        className={styles.newCommonEnLayout}
        style={{
          background:
            'linear-gradient(104deg, #22A1FD 0.55%, #51B4FC 50%, #7BC8FF 101.55%)',
        }}
      >
        <div className={`${styles.commonContainer} ${styles.undefined}`}>
          <div
            className={`${styles.commonTitleDescContainer} ${styles.undefined}`}
          >
            <h2 className={styles.h2} style={{ color: '#fff' }}>
              {data.title}
            </h2>
          </div>
          <div className={styles.commonChildren}>
            <div className={styles.wrapper}>
              <AgentCardList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentBlock;
