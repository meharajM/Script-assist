import React from 'react';
import { Layout, Steps, Button, message, PageHeader, Descriptions, Input, Typography, Select } from 'antd';
import Logline from '../../components/Logline'
import './style.css';

const { Header, Content, Footer } = Layout;
const {Step} = Steps;
const { Paragraph } = Typography;
const {Option} = Select;
const genreOptions = ['Action Adventure',
    'Thriller',
   'Romantic Comedy',
    'Horror',
    'Drama',
    'Romantic Drama',
    'Mystery',
    'Science Fiction',
    'Horror',
    'Love Story',
    'Family',
    'Fantasy',
    'Animation',
    'Western',
    'Period',
    'Historical',
    'Musical'];
const subGenreOptions = ['None',
    'Comedy',
    'Horror',
    'Drama',
    'Thriller',
    'Family',
    'Psychological',
    'Political',
    'Parody',
    'Farce',
    'Slapstick',
    'Dark',
    'Epic',
    'True Story',
    'Suspense',
    'Erotic',
    'Fish-out-of water',
    'Coming-of-age'];
const steps = [
  {
    title: 'Story Idea',
    content: (logline, setFieldValue) => <PageHeader
    title={"Your Story Idea"}>
        <Paragraph>
                        These three questions will get at the guts of your story. Sentence length is limited - if you find you can't add more letters, use fewer or shorter words.
        </Paragraph>
        <Descriptions  column={1}>
            <Descriptions.Item label="a. Your main character (use adjectives, emotional state) who wants x (a basic desire)">
                <Input value={logline.character} onChange={(ev) => setFieldValue('logline.character', ev.target.value)} fullWidth placeholder="....E.g., A shy young suburban boy who wants to be noticed..."/>
            </Descriptions.Item>
            <Descriptions.Item label="b. What CRISIS is he/she/are they facing? Hint: Start with an ACTIVE VERB.">
                <Input value={logline.crisis} onChange={(ev) => setFieldValue('logline.crisis', ev.target.value)} fullWidth placeholder="...... discovers a strange but friendly alien living in his shed..."/>
            </Descriptions.Item>
            <Descriptions.Item label="c. How does he/she/do they respond to try and deal with it? Hint: Not too much detail.">
                <Input value={logline.response} onChange={(ev) => setFieldValue('logline.response', ev.target.value)} fullWidth placeholder="...... and tries to help him get home while keeping his existence a secret. (E.T., The Extra Terrestrial)"/>
            </Descriptions.Item>
        </Descriptions>
</PageHeader>
,
  },
  {
    title: 'Theme',
    content: (theme, setFieldValue) => <PageHeader
    title={"Your Theme"}
    subTitle={`THEME is what people want to know when they ask that annoying question, "So what's it about?"`}
>
<Descriptions  column={1}>
            <Descriptions.Item label="Make it a one word answer, as corny as it may sound, like Love, Betrayal, or Prejudice. Philadelphia, for example is a story about prejudice; Star Wars is a story about heroism.">
                <Input value={theme} onChange={(ev) => setFieldValue('theme', ev.target.value)} fullWidth placeholder="Your theme:....."/>
            </Descriptions.Item>
</Descriptions>
</PageHeader>,
  },
  {
    title: 'Title',
    content: (title, setFieldValue) => <PageHeader
    title={"Your Title"}
>
<Descriptions  column={1}>
            <Descriptions.Item label="Based on your theme, choose a title (for now).">
                <Input value={title} onChange={(ev) => setFieldValue('title', ev.target.value)} fullWidth placeholder="Your title:........."/>
            </Descriptions.Item>
</Descriptions>
</PageHeader>,
  },
  {
    title: 'Type of film',
    content: (genre, subGanre, setFieldValue) => <PageHeader
                    title={"4. What type of film is it?"}
            >
                <Descriptions  column={1}>
                    <Descriptions.Item label="Genre">
                            <Select name="Genre" value={genre} style={{ width: 200 }} onChange={(value) => setFieldValue('genre', value)} >
                                {genreOptions.map((g,i )=> <Option key={`genre-${i}`} value={g}>{g}</Option>)}
	                        </Select>           
                    </Descriptions.Item>
                    <Descriptions.Item label="Sub-Genre">
                        <Select name="Sub-Genre" value={subGanre} style={{ width: 200 }} onChange={(value) => setFieldValue('subGanre', value)} >
                            {subGenreOptions.map((s,i) => <Option key={`sub-genre-${i}`} value={s}>{s}</Option>)}
                        </Select>
                    </Descriptions.Item>
                    <Descriptions.Item>
                        <Button onClick={this.onSave} type="primary">Save</Button>
                    </Descriptions.Item>
                </Descriptions>
            </PageHeader>,
  },
];
export default function StoryLine() {
  const [current, setCurrent] = React.useState(0);

 const onChange = current => {
    console.log('onChange:', current);
    setCurrent( current );
  };
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const Component = steps[current].content;
    return <div>
      <Layout className="layout">
    <Header>
      <div className='section-name'>Storyline</div>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
        <Steps current={current} onChange={onChange}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content"><Component/></div>
        <div className="steps-action">
        
       
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
         {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
      </div>
      </div>
      {/* <Logline/> */}
    </Content>
    <Footer style={{ textAlign: 'center' }}>Movie PreProduction ©2021</Footer>
  </Layout></div>
}



