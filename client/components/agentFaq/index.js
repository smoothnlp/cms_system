import ReactMarkdown from 'react-markdown';

import styles from './styles.module.css';

const AgentBlock = ({ agentData }) => {
  console.log('agentData ===>>> ', agentData);

  const AgentFaqList = () => {
    return agentData.faq.faq.map((item, index) => {
      return (
        <>
          <div key={item.question} className="index-module--collapse_container--c22f1">
            <div
              className={styles['index-module']}
              role="button"
              aria-label="button"
            >
              <h5
                className={styles['index-module--h5']}
                style={{ marginBottom: 0 }}
              >
                {item.question}
              </h5>
              <div className="index-module--collapse_arrow--9ecc7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.892 15.663a.9.9 0 001.272-.055L12 10.332l4.837 5.276a.9.9 0 101.326-1.216l-5.5-6a.9.9 0 00-1.326 0l-5.5 6a.9.9 0 00.055 1.271z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className={styles['index-module--content']}>
              <p>
                <span style={{ color: 'rgb(0, 0, 0)' }}>
                  {item.answer}
                </span>
              </p>
              {/* More paragraphs */}
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div className={styles['page-wrapper']}>
        <div className={`${styles.common_container}`}>
          <div className={`${styles.common_title_desc_container}`}>
            <h2 className={styles['page-title']}>{agentData.faq.title}</h2>
          </div>
          <div className={styles["index-module--faqs"]}>
            <AgentFaqList />
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentBlock;
