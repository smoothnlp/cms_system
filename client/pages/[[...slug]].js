import delve from 'dlv';
import ErrorPage from 'next/error';
import Layout from '../components/layout';
import dynamic from 'next/dynamic';
import { getData, getStrapiURL, handleRedirection } from '../utils';
import { getLocalizedParams } from '../utils/localize';

import ReactMarkdown from 'react-markdown';
import AgentBasic from '../components/agentBasic';
import AgentHowTo from '../components/agentHowTo';
import AgentFaq from '../components/agentFaq';
import AgentSummary from '../components/agentSummary';
import AgentExtra from '../components/agentExtra';
import Cta from '../components/blocks/Cta';

const BlockManager = dynamic(
  () => import('../components/shared/BlockManager'),
  { ssr: false }
);

const Universals = ({ global, pageData, agentData, preview }) => {
  if (!pageData) {
    return <ErrorPage statusCode={404} />;
  }

  console.log('agentData ===>>> ', agentData);

  const blocks = delve(pageData, 'attributes.blocks');

  return (
    <Layout global={global} pageData={pageData} type="pages" preview={preview}>
      {/* {blocks && (
        <BlockManager
          blocks={blocks}
          type="collectionType"
          contentType="page"
          pageData={pageData}
        />
      )} */}
      {/* agent 信息展示 */}
      <AgentBasic agentData={agentData} />
      <AgentHowTo agentData={agentData} />
      <AgentExtra agentData={agentData} data={agentData.recommended_section_1} />
      <AgentSummary agentData={agentData} />
      <AgentExtra agentData={agentData} data={agentData.recommended_section[0]} />
      <Cta {...agentData.cta} />
      <AgentFaq agentData={agentData} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { slug, locale } = getLocalizedParams(context.query);
  console.log('slug ===>>> ', slug);

  try {
    const data = getData(
      slug,
      locale,
      'page',
      'collectionType',
      context.preview
    );
    const res = await fetch(delve(data, 'data'));
    const json = await res.json();

    console.log('json.data ===>> ', json.data);

    if (!json.data.length) {
      return handleRedirection(context.preview, null);
    }

    const agentApiPath = getStrapiURL(
      `/agents/1?populate[0]=faq&populate[1]=faq.faq&populate[2]=how.faq&populate[3]=cta.buttons.link&populate[4]=recommended_section.list&populate[5]=recommended_section_1.list`
    );
    const agentRes = await fetch(agentApiPath, {
      headers: {
        Authorization:
          'bearer 4d68a1c097d394c4660052147a3f6732f4cdeeca2e485282c3fc95046960936b7035e16bca1ef77204d721281c4f43ae54ad589f2fb77bc212ec33d2b86d76f30498244ce55f5e6923aca64460b27fca3e2ff825d803f8dc81456463495b4f2aff4aa90fe8ebe9c2b424e27e598130e0d0e1f8df05fba3dd8065d3620fee75f0',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const agentJson = await agentRes.json();

    return {
      props: {
        pageData: json.data[0],
        agentData: agentJson.data.attributes,
        preview: context.preview || null,
      },
    };
  } catch (error) {
    return { props: { pageData: null } };
  }
}

export default Universals;
