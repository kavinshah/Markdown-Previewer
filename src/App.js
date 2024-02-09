import React, {useState, useEffect} from 'react';
import './App.css';
import {marked} from 'marked';

function MarkdownPreviewer(){
	const [editorText, setEditorText] = useState('# Welcome to my React Markdown Previewer!\n ## This is a sub-heading...\n### And here\'s some other cool stuff:\n\nHere\'s some code, `<div></div>`, between 2 backticks.\n```\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == \'```\' && lastLine == \'```\') {\n    return multiLineCode;\\\n  }\n}\n```\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere\'s also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n\t- Some are bulleted.\n\t\t- With different indentation levels.\n\t\t\t- That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let\'s not forget embedded images:\n![Github Logo](https://cdn.pixabay.com/photo/2014/07/15/23/36/github-394322_1280.png)');
	const handleEditorChange = (event) => {
		//console.log(event.target.value);
		setEditorText(event.target.value);
		marked.use({
		  breaks: true,
		});
	}
	
	useEffect(()=> {
		document.getElementById('preview').innerHTML=marked.parse(editorText);
	}, [editorText]);
	
	return (
		<div class='row'>
			<div class='col-xs-6'>
				<Editor handleEditorChange={handleEditorChange} content={editorText} />
			</div>
			<div class='col-xs-6'>
				<Previewer />
			</div>
		</div>
    );
}

function Editor({handleEditorChange, content}){
	return(
      <div>
        <p>Editor:</p>
        <textarea id='editor' className='textarea' onChange={handleEditorChange} value={content} />
      </div>
    );
}

function Previewer(props){
	return (
      <div>
        <p>Preview:</p>
        <div id='preview' className='textarea' />
      </div>
    );
}

export default MarkdownPreviewer;
