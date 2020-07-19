import React, {useState} from 'react';
import {PageHeader, Descriptions, Input, Select, Typography, Button, Modal} from 'antd';
import EditableDiv from '../EditableDiv';
import './style.scss';
const {Option} = Select;
const {Title} = Typography;
const genre = ['Action Adventure',
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
const subGenre = ['None',
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
function Logline(props) {
    const [visible, setVisible] = useState(false);
    return (<div className="logline-container">
        <Button type="link" onClick={() => setVisible(true)}>
            How to write a logline
        </Button>
        <div className="logline">
            <div>
                <PageHeader
                    title={"1. Your Story Idea"}
                    subTitle="These three questions will get at the guts of your story. Sentence length is limited - if you find you can't add more letters, use fewer or shorter words.">
                        <Descriptions size="small" column={1}>
                            <Descriptions.Item label="a. Your main character (use adjectives, emotional state) who wants x (a basic desire)">
                                <Input placeholder="....E.g., A shy young suburban boy who wants to be noticed..."/>
                            </Descriptions.Item>
                            <Descriptions.Item label="b. What CRISIS is he/she/are they facing? Hint: Start with an ACTIVE VERB.">
                                <Input placeholder="...... discovers a strange but friendly alien living in his shed..."/>
                            </Descriptions.Item>
                            <Descriptions.Item label="c. How does he/she/do they respond to try and deal with it? Hint: Not too much detail.">
                                <Input placeholder="...... and tries to help him get home while keeping his existence a secret. (E.T., The Extra Terrestrial)"/>
                            </Descriptions.Item>
                        </Descriptions>
                </PageHeader>

                
            </div>
            <div>
            <PageHeader
                    title={"2. Your Theme"}
                    subTitle={`THEME is what people want to know when they ask that annoying question, "So what's it about?"`}
            >
                <Descriptions size="small" column={1}>
                            <Descriptions.Item label="Make it a one word answer, as corny as it may sound, like Love, Betrayal, or Prejudice. Philadelphia, for example is a story about prejudice; Star Wars is a story about heroism.">
                                <Input placeholder="Your theme:....."/>
                            </Descriptions.Item>
                </Descriptions>
            </PageHeader>
                

                </div>

                
            <div>
            <PageHeader
                    title={"3. Your Title"}
            >
                <Descriptions size="small" column={1}>
                            <Descriptions.Item label="Based on your theme, choose a title (for now).">
                                <Input placeholder="Your title:........."/>
                            </Descriptions.Item>
                </Descriptions>
            </PageHeader>
            </div>
                <div>
                <PageHeader
                    title={"4. What type of film is it?"}
            >
                <Descriptions size="small" column={1}>
                    <Descriptions.Item label="Genre">
                            <Select name="Genre" defaultValue={genre[0]} style={{ width: 200 }} >
                                {genre.map(g => <Option value={g}>{g}</Option>)}
	                        </Select>           
                    </Descriptions.Item>
                    <Descriptions.Item label="Sub-Genre">
                        <Select name="Sub-Genre" defaultValue={subGenre[0]} style={{ width: 200 }}>
                            {subGenre.map(s => <Option value={s}>{s}</Option>)}
                        </Select>
                    </Descriptions.Item>

                </Descriptions>
            </PageHeader>
        </div>
        <Title level={5}>Now put the three answers together as a sentence, and you have your logline! You will probably have to work on it some more.</Title>
        <Modal
          title="How to write log line"
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={600}
          footer={null}
        >
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/r0Fj_H9Q73k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </Modal>
            {/* <EditableDiv placeholder="describe the story" {...props} value={props.content[props.id]}/> */}
        </div>
    </div>)
}
export default Logline;