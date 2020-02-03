import CKEditor from 'react-ckeditor-component'
import React from 'react'
import request from 'request-promise-native'
import { css } from 'emotion'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import CKeditorInline from './CKEditorInline'
import $ from 'jquery'
import examples from './exapmples'
import Debug from 'debug'
import uuid from 'uuid/v4'
import axiosHelper from '../helper/axiosHelper';
import * as env from '../../env';
import axios from 'axios';
import { Base64 } from 'js-base64';

const debug = Debug('editor')
debug.enabled = true

const editorBlock = css`
  margin-right: auto;
  margin-left: auto;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
`

const headerEditor = css`
  border: 1px solid #aaa; 
  margin-top: 50px;
`

const footerEditor = css`
  border: 1px solid #aaa;
`

const footer = css`
  margin-top: 0px
`

const buttonStyle = css`
  font-size: x-large;
  margin-top: 50px;
`

let negotiationId;
function htmlOptimization (html) {
  html = html.replace(/&quot;/g, '')
  let bodyStyle = ''
  let match = html.match(/<body.*?style=\\?"(.*?)\\?"/)
  if (match) bodyStyle = match[1]
  let jq = $(`<div>${html}</div>`)
  jq.find('div[style="page-break-after: always"]').replaceWith('<div>[pageBreak]</div>')
  $('<br>').appendTo(jq.find('span.lineHeightSpan'))
  let result = `<body style="${bodyStyle}">${jq[0].outerHTML}</body>`
  while (/<\/span><br><\/span>/.test(result)) {
    result = result.replace('</span><br></span>', '</span></span>')
  }
  return result
}

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export default class Editor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        body: "",
        header: "",
        footer: "",
        loading: false,
        showPopup: false,
        title: "",
        description: ""
        
    }
    this.updateContent = this.updateContent.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onChangeHeader = this.onChangeHeader.bind(this)
    this.onChangeFooter = this.onChangeFooter.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    this.onCreateEditor = this.onCreateEditor.bind(this)
    this.setEditorsContent = this.setEditorsContent.bind(this)
    this.editor = {} // ?
    this.exampleNumber = this.props.exampleNumber
    // fill body with exemple
    this.state = examples[0] // body footer header
    window.$ = $
  
}


/* pupup */
  updateContent (newContent) {
    this.setState({
      body: newContent.body,
      header: newContent.header,
      footer: newContent.footer
    })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.content) {
      //debug(nextProps.content)
      this.updateContent(nextProps.content)
      this.setEditorsContent(nextProps.content)
      //debug(this)
      return
    }
    if (nextProps.file) {
      this.setState({
        file: nextProps.file,
        content: nextProps.file.content
      })
      this.editor['body'].setData(nextProps.file.content)
    }
    if (typeof nextProps.exampleNumber === 'number') {
      this.setState(examples[nextProps.exampleNumber])
      this.setEditorsContent(examples[nextProps.exampleNumber])
    }
  }

  setEditorsContent (content) {
    //debug('call setEditorsContet', content)
    const editors = ['header', 'body', 'footer']
    editors.map(type => {
      if (content[type] !== undefined) {
        this.editor[type].setData(content[type])
      }
    })
  }



    async onButtonClick () {
      /* Func Loading  confirmar acordo */
      this.setState({loading: true});
      setTimeout(()=> {
        this.setState({loading : false})
      }, 9000)
   
  
      // TODO popup a modal to enter description and title
  
      // fim do popup
  
      const paramHeaders = {headers: {'Accept': 'application/json',
                                     'Content-type': 'multipart/form-data'}
      , withCredentials: true
        }
      //console.log('document', htmlOptimization(this.editor.body.getData()));
      //console.log('header', htmlOptimization(this.state.header));
  
     
  
      const data = new FormData(); 
  
      data.append('title', this.state.title);
      data.append('description', this.state.description);
      data.append('dataType', 'html');
      data.append('data', htmlOptimization(this.editor.body.getData()));
  
      const url = env.httpProtocol
      +env.serverHost
      +':'+env.serverPort
      +'/negotiation/create';
  
       negotiationId = await axiosHelper.axiosPost(url,data, paramHeaders);
       window.location.href = '/rever?negotiationId='+negotiationId;
           
      console.log('negotiationId', negotiationId);
      //console.log('document', htmlOptimization(this.editor.body.getData()));
      //console.log('header', htmlOptimization(this.state.header));
     // console.log('footer', htmlOptimization(this.state.footer));
  
    }
  

  onChange (evt) {
    const body = evt.editor.getData()
    this.setState({
      body: body
    })
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onCreateEditor (section, evt) {
    //debug('CREATE ' + section)
    //debug(evt.editor)
    this.editor[section] = evt.editor
  }

  onChangeHeader (evt) {
    this.setState({
      header: evt.editor.getData()
    })
  }

  onChangeFooter (evt) {
    this.setState({
      footer: evt.editor.getData()
    })
  }

  onBlur (evt) {
    // console.log('onBlur event called with event info: ', evt)
  }

  afterPaste (evt) {
    // console.log('afterPaste event called with event info: ', evt)
  }

  render () {
    const {loading} = this.state;
    const { title, description } = this.state;

    const noWarningMessagesRelatedToContentEditable = true
    return (
      <div className="editorBlook">
        <Container className={editorBlock}>
        <Row>
          
         { /* <Col mdOffset={2} md={8} sm={12}>
            <CKeditorInline // header

              activeClass={headerEditor}
              suppressContentEditableWarning={noWarningMessagesRelatedToContentEditable}
              events={{
                'change': this.onChangeHeader,
                'configLoaded': this.onCreateEditor.bind(this, 'header')
              }}
            >
             /* <p style={{'textAlign': 'right'}} >
                <span style={{'color': '#999999'}}>
                  Edit header here
            </span> 
              </p>

            </CKeditorInline>
          </Col>
            */}
        </Row>
        <Row>
          <Col md={8} sm={12}>
            <CKEditor
              scriptUrl={'ckeditor/ckeditor.js'}
              suppressContentEditableWarning={noWarningMessagesRelatedToContentEditable}
              content={this.state.body}
              events={{
                'change': this.onChange,
                'configLoaded': this.onCreateEditor.bind(this, 'body')
              }} 
            
            />
          </Col>
        </Row>
        <Row activeClass={footer}>
          <Col mdOffset={2} md={8} sm={12}><br></br>
        
<Form onSubmit={this.submitHandler}>
  <Form.Group controlId="formBasicTitulo">
    <Form.Label>Titulo</Form.Label>
    <Form.Control type="titulo" placeholder="Entrar o titulo" name="title" value={title} onChange={this.changeHandler} />
    <Form.Text className="text-muted">
      titulo do documento.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicDescricao">
    <Form.Label>Descricao</Form.Label>
    <Form.Control type="Descricao" placeholder="Descricao" name="description" value={description} onChange={this.changeHandler}/>
  </Form.Group>
  <Button onClick={this.onButtonClick} 
            disabled={loading}
            style= {{float: "Right"}}
            > 
            {loading && <i className="fa fa-refresh fa-spin"></i>}
            Confirmar 
             </Button>
</Form>
           
         
         
          </Col>

        </Row>
       
      </Container>
      </div>

    )
  }

  
}
