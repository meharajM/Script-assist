import React, {useState} from 'react';
import {PageHeader, Descriptions, Select, Typography, Button, Modal} from 'antd';
import TextField from '@material-ui/core/TextField';
import set from 'lodash/set';
import './style.scss';
const {Option} = Select;
const {Title} = Typography;
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
class Logline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            logline: {
                character: "",
                crisis: "",
                response: "",
            },
            theme: "",
            genre: genreOptions[0],
            subGanre: subGenreOptions[0],
            title: "",
            isEdit: true,
        }
    }
    
    setVisible = (value) => {
        this.setState({visible: value})
    }
    setFieldValue = (path, value) => {
        this.setState((prev) => {
            const newState = set(prev, path, value);
            debugger
            return newState
        });
    }
    getShortLogline = () => {
        const {logline} = this.state;
        return `${logline.character} ${logline.crisis} ${logline.response}`
    }
    onSave = () => {
        this.setState({isEdit: false})
    }
    onEdit = () => {
        this.setState({isEdit: true})
    }
    render() {
    const {logline, visible, theme, genre, subGanre, title, isEdit} = this.state;
    const {setVisible, setFieldValue} = this;
    debugger
    return (<div className="logline-container">
        <Button type="link" onClick={() => setVisible(true)}>
            How to write a logline
        </Button>
        {isEdit ? 
            <div className="logline-create">
            <div>
                <PageHeader
                    title={"1. Your Story Idea"}
                    subTitle="These three questions will get at the guts of your story. Sentence length is limited - if you find you can't add more letters, use fewer or shorter words.">
                        <Descriptions  column={1}>
                            <Descriptions.Item label="a. Your main character (use adjectives, emotional state) who wants x (a basic desire)">
                                <TextField value={logline.character} onChange={(ev) => setFieldValue('logline.character', ev.target.value)} fullWidth label="....E.g., A shy young suburban boy who wants to be noticed..."/>
                            </Descriptions.Item>
                            <Descriptions.Item label="b. What CRISIS is he/she/are they facing? Hint: Start with an ACTIVE VERB.">
                                <TextField value={logline.crisis} onChange={(ev) => setFieldValue('logline.crisis', ev.target.value)} fullWidth label="...... discovers a strange but friendly alien living in his shed..."/>
                            </Descriptions.Item>
                            <Descriptions.Item label="c. How does he/she/do they respond to try and deal with it? Hint: Not too much detail.">
                                <TextField value={logline.response} onChange={(ev) => setFieldValue('logline.response', ev.target.value)} fullWidth label="...... and tries to help him get home while keeping his existence a secret. (E.T., The Extra Terrestrial)"/>
                            </Descriptions.Item>
                        </Descriptions>
                </PageHeader>

                
            </div>
            <div>
            <PageHeader
                    title={"2. Your Theme"}
                    subTitle={`THEME is what people want to know when they ask that annoying question, "So what's it about?"`}
            >
                <Descriptions  column={1}>
                            <Descriptions.Item label="Make it a one word answer, as corny as it may sound, like Love, Betrayal, or Prejudice. Philadelphia, for example is a story about prejudice; Star Wars is a story about heroism.">
                                <TextField value={theme} onChange={(ev) => setFieldValue('theme', ev.target.value)} fullWidth label="Your theme:....."/>
                            </Descriptions.Item>
                </Descriptions>
            </PageHeader>
                

                </div>

                
            <div>
            <PageHeader
                    title={"3. Your Title"}
            >
                <Descriptions  column={1}>
                            <Descriptions.Item label="Based on your theme, choose a title (for now).">
                                <TextField value={title} onChange={(ev) => setFieldValue('title', ev.target.value)} fullWidth label="Your title:........."/>
                            </Descriptions.Item>
                </Descriptions>
            </PageHeader>
            </div>
                <div>
                <PageHeader
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
            </PageHeader>
        </div>
        
            {/* <EditableDiv placeholder="describe the story" {...props} value={props.content[props.id]}/> */}
        </div>
        : 
            <div className='logline-view'>
                <PageHeader
                    ghost={false}
                    title={title}
                    extra={[
                        
                        <Button key="2">Print</Button>,
                        <Button key="1" type="primary" onClick={this.onEdit}>
                        Edit
                        </Button>,
                    ]}
                    >
            <Descriptions size="small" column={1}>
                <Descriptions.Item label="Logline (elivator pitch)">
                    {this.getShortLogline()}
                </Descriptions.Item>
                <Descriptions.Item label="Theme">
                    {theme}
                </Descriptions.Item>
                <Descriptions.Item label="Genre">
                    {genre}, {subGanre}
                </Descriptions.Item>
            </Descriptions>
            <Descriptions size="small" column={2}>
                <Descriptions.Item label="Writer(s)">name of user</Descriptions.Item>
                <Descriptions.Item label="Last modified">2017-01-10</Descriptions.Item>
                
            </Descriptions>
            </PageHeader>
            </div>
    }
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
    </div>)

    }
}
export default Logline;