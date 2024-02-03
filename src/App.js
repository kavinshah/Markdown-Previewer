import React from 'react';
import './App.css';
import {marked} from 'marked';

class MarkdownPreviewer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      editorText:'# Welcome to my React Markdown Previewer!\n ## This is a sub-heading...\n### And here\'s some other cool stuff:\n\nHere\'s some code, `<div></div>`, between 2 backticks.\n```\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == \'```\' && lastLine == \'```\') {\n    return multiLineCode;\\\n  }\n}\n```\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere\'s also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n\t- Some are bulleted.\n\t\t- With different indentation levels.\n\t\t\t- That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let\'s not forget embedded images:\n![Github Logo](https://cdn.pixabay.com/photo/2014/07/15/23/36/github-394322_1280.png)'
    };
      this.handleEditorChange=this.handleEditorChange.bind(this);
  }
  
  handleEditorChange(event){
    console.log(event.target.value);
    this.setState({
      editorText:event.target.value
    });
    marked.use({
      breaks: true,
    });
  }
  
  render(){
    return (
      <div>
        <Editor content={this.state.editorText} handleEditorChange={this.handleEditorChange} />
        <Previewer content={this.state.editorText}/>
      </div>
      
    );
  }
}

class Editor extends React.Component{
  render(){
    console.log('editor:', this.props.content);
    return(
      <div>
        <p>Editor:</p>
        <textarea id='editor' className='textarea' onChange={this.props.handleEditorChange} value={this.props.content} />
      </div>
    );
  }
}

class Previewer extends React.Component{  
  componentDidMount(){
    document.getElementById('preview').innerHTML=marked.parse(this.props.content);
  }
  render(){
    // console.log('previwer:', this.props.content);
    return (
      <div>
        <p>Preview:</p>
        <div id='preview' className='textarea'>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MarkdownPreviewer />, document.getElementById('root'));

export default MarkdownPreviewer;
