import ReactMarkdown from 'react-markdown';
import styles from './styles.module.css';

const AgentBlock = ({ agentData }) => {
  return (
    <>
      <div className={styles.mainLayout}>
        <div className={styles.leftColumn}>
          <div className={styles.coverPart}>
            <div
              style={{ paddingTop: 'calc(100% * (0.6666666666666666))' }}
              className={styles.wrapper}
            >
              <img
                className={`${styles.imageMedia} false`}
                style={{ objectFit: 'fill' }}
                data-src={agentData.background_url}
                data-object-fit="fill"
                src={agentData.background_url}
                alt="Seamlessly generate translations and summaries"
              />
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.contentPart}>
            <h4 className={styles.h4}>AI Summarization</h4>
            <div className={styles.blogFont}>
              <ReactMarkdown
                children={agentData.introduction}
                linkTarget="_blank"
              ></ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentBlock;
