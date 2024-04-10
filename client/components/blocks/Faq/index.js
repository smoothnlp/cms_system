import QuestionsAnswers from './questions-answers';

import classNames from 'classnames';

import sytles from './faq.module.css';

const Faq = ({ title, faq, theme, img_url }) => {
  console.log('img_url ===>>> ', img_url);
  return (
    <div
      className={classNames(
        `bg-${theme} py-40 px-4 flex justify-center items-center gap-10`,
        // sytles.bgMuted
      )}
    >
      {img_url && <img src={img_url} alt="FAQ" className="w-6/12" />}
      <div className="mx-auto max-w-6xl flex flex-col">
        {title && (
          <h2
            className={`mr-8 w-full my-16 text-3xl text-${theme}-text font-extrabold leading-9`}
          >
            {title}
          </h2>
        )}
        <QuestionsAnswers items={faq} theme={theme} />
      </div>
    </div>
  );
};

Faq.defaultProps = {};

export default Faq;
