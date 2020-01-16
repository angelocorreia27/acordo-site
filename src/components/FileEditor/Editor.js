import CKEditor from 'react-ckeditor-component'
import React from 'react'
import request from 'request-promise-native'
import { css } from 'emotion'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import CKeditorInline from './CKEditorInline'
import $ from 'jquery'
import examples from './exapmples'
import Debug from 'debug'
import axios from 'axios'
import uuid from 'uuid/v4'
import { Left, Right } from 'react-bootstrap/lib/Media'

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

/*const buttonStyle = css`
  font-size: x-large;
  margin-top: 50px;
`*/

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

function sendDocumentAndGetLink (document) {
  try {
    return request.post({
      url: 'https://script.google.com/macros/s/AKfycbyu0p0OFLepWOk4mULxu-AMHjAkx_HXOyqGR4JfYAUTgD9RPoA/exec',
      followAllRedirects: true,
      form: document
    })
  } catch (err) {
    debug(err)
  }
}

export default class Editor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
            personInfo: {
              id: ''
            },
            negotiation:{
              id:uuid()
            }
          }
    this.submitCreate = this.submitCreate.bind(this)

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
    this.state = examples[0] // body footer header
    window.$ = $
  }

  submitCreate= () => {
    const paramHeaders = {hearders: {'Content-type': 'application/json'}}
    const paramBody = {
       id: uuid(),
       owner: uuid(), // id do utilizador em sessao
       title:"title",
       docType: "text",
       description:"description"
     }
     
     const url = "http://localhost:8000/negotiation/create";
     
     axios.post(url, paramBody, paramHeaders
       ).then(function(res){
          console.log(res.statusText);
   
       })
   }


  updateContent (newContent) {
    this.setState({
      body: newContent.body,
      header: newContent.header,
      footer: newContent.footer
    })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.content) {
      debug(nextProps.content)
      this.updateContent(nextProps.content)
      this.setEditorsContent(nextProps.content)
      debug(this)
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
    debug('call setEditorsContet', content)
    const editors = ['header', 'body', 'footer']
    editors.map(type => {
      if (content[type] !== undefined) {
        this.editor[type].setData(content[type])
      }
    })
  }

  async onButtonClick () {
    let result = await sendDocumentAndGetLink({
      document: htmlOptimization(this.editor.body.getData()),
      header: htmlOptimization(this.state.header),
      footer: htmlOptimization(this.state.footer)
    })
    window.location.href = result
  }

  onChange (evt) {
    const body = evt.editor.getData()
    this.setState({
      body: body
    })
  }

  onCreateEditor (section, evt) {
    debug('CREATE ' + section)
    debug(evt.editor)
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
    const noWarningMessagesRelatedToContentEditable = true
    return (
      <Grid className={editorBlock}>
        <Row>
          <Col mdOffset={2} md={8} sm={12}>
            <CKeditorInline // header

              activeClass={headerEditor}
              suppressContentEditableWarning={noWarningMessagesRelatedToContentEditable}
              events={{
                'change': this.onChangeHeader,
                'configLoaded': this.onCreateEditor.bind(this, 'header')
              }}

              
            >
              <p style={{'textAlign': 'right'}} >
                <span style={{'color': '#999999'}}>
                  Edit header here
                </span>
              </p>
            </CKeditorInline>
          </Col>
        </Row>
        <Row>
          <Col mdOffset={2} md={8} sm={12}>
            <CKEditor
                           
            />
          </Col>
        </Row>
        <Row activeClass={footer}>
          <Col mdOffset={2} md={8} sm={12}><br></br>
            <Button className="btn-warning" style= {{float: "Right"}}onClick={this.submitCreate} >Confirmar</Button>           
          </Col>
        </Row>
        <Row>
          <Col>
             
          </Col>
        </Row>
      </Grid>
    )
  }
}
