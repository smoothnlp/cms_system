import styles from './styles.module.css';

const agentHowto = ({ agentData }) => {
  const AgentFaqList = () => {
    return agentData.how.faq.map((item, index) => {
      return (
        <>
          <div key={index} className={styles['stepItem']}>
            <p className={styles['subheading']}>
              {item.question}
            </p>
            <p className={styles['paragraph']}>
              {item.answer}
            </p>
          </div>
        </>
      );
    });
  };
  return (
    <>
      <div className={styles['newCommonLayout']}>
        <div className={styles['commonContainer']}>
          <div className={styles['titleDescContainer']}>
            <h2 className={styles['heading']}>
              How to do with {agentData.name}?
            </h2>
          </div>
          <div className={styles['commonChildren']}>
            <div className={styles['wrapper']}>
              <div className={styles['coverPart']}>
                <div className={styles['wrapper']}>
                  <img
                    className={styles['mediaImage']}
                    style={{ objectFit: 'cover' }}
                    data-src={agentData.background_url}
                    data-object-fit="cover"
                    src={agentData.background_url}
                    alt="voice memos to text steps"
                  />
                </div>
              </div>
              <div className={styles['contentPart']}>
                <div className={styles['stepListWrapper']}>
                  <AgentFaqList />
                </div>
                <a
                  href="https://app.notta.ai/signup?language=en&amp;from=official"
                  target="_self"
                  className={styles['innerCtaBtn']}
                >
                  <button
                    type="button"
                    className={styles['btnContainer']}
                    style={{ background: '#3089F0', color: '#fff' }}
                  >
                    <span className={styles['btnLabel']}>
                      Transcribe Voice Memos
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default agentHowto;
