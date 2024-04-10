import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import styles from './styles.module.css';

const renderers = {
  text: (props) => <u>{props.children}</u>,
};

const AgentBlock = ({ agentData }) => {
  const elements = [];
  for (const key in agentData) {
    if (Object.hasOwnProperty.call(agentData, key)) {
      const element = agentData[key];
      console.log('element ===>>> ', element);
      elements.push(
        <div key={key}>
          <p>
            {key}:
            <ReactMarkdown linkTarget="_blank" rehypePlugins={[rehypeRaw]}>
              {agentData.description}
            </ReactMarkdown>
          </p>
        </div>
      );
    }
  }
  return (
    <>
      {/* {elements} */}
      <div className={styles['page-wrapper']}>
        <div className={styles['container']}>
          <div className={styles['content-container']}>
            <div className={styles['banner-wrapper']}>
              <div className={styles['content-part']}>
                <h1 className={styles['page-title']}>{agentData.name}</h1>
                <ReactMarkdown
                  children={agentData.description}
                  linkTarget="_blank"
                  escapeHtml={false}
                  rehypePlugins={[rehypeRaw]}
                ></ReactMarkdown>
                <p className={styles['page-description']}></p>
                <a
                  href="https://app.notta.ai/signup?language=en&amp;from=official"
                  target="_self"
                >
                  <button type="button" className={styles['transcribe-button']}>
                    <span className={styles['button-label']}>
                      定制你的运动计划
                    </span>
                  </button>
                </a>
              </div>
              <div className={styles['cover-part']}>
                <div className="image-wrapper">
                  <img
                    className="media-image"
                    data-src={agentData.background_url}
                    data-object-fit="contain"
                    src={agentData.background_url}
                    alt="Transcribe voice memos to text"
                  />
                </div>
              </div>
            </div>
            <div className={styles['logo-part']}>
              <div className={styles['logo-list-title']}>
                <span className="logo-list-title-content">
                  More than 2 Million Businesses and Individuals Choose Notta
                </span>
              </div>
              <div className={styles['logo-list']}>
                <img
                  className={styles['logo-image']}
                  src="https://www.notta.ai/pictures/Grammarly.png"
                  alt="Grammarly"
                />
                <img
                  className={styles['logo-image']}
                  src="https://www.notta.ai/pictures/BNI.png"
                  alt="BNI"
                />
                <img
                  className={styles['logo-image']}
                  src="https://www.notta.ai/pictures/Salesforce.png"
                  alt="Salesforce"
                />
                <img
                  className={styles['logo-image']}
                  src="https://www.notta.ai/pictures/Pwc.png"
                  alt="PwC"
                />
                <img
                  className={styles['logo-image']}
                  src="https://www.notta.ai/pictures/Procore.png"
                  alt="Procore"
                />
                <img
                  className={styles['logo-image']}
                  src="https://www.notta.ai/pictures/idexx.png"
                  alt="IDEXX"
                />
                <img
                  className={styles['logo-image']}
                  src="https://www.notta.ai/pictures/Feedvisor.png"
                  alt="Feedvisor"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentBlock;
