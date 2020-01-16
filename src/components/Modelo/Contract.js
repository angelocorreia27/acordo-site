import React from 'react'
//import { Form } from 'react-bootstrap'
import Footer from './Footer';
import MenuHeader from './MenuHeader';
import { Container, Header, Grid, Form } from 'semantic-ui-react';
import { Document, Page } from 'react-pdf';

class Contract extends React.Component {
      constructor(props){
          super(props);
         this.state = {
            numPages: null,
            pageNumber: 1,
         } 
  
    }
    onFileChange = (event) => {
      this.setState({
        file: event.target.files[0]
      });
    }

    onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
    }

    nextPage = () => {
 
      const currentPageNumber = this.state.pageNumber;
      let nextPageNumber;
   
      if (currentPageNumber + 1 > this.state.numPages) {
        nextPageNumber = 1;
      } else {
        nextPageNumber = currentPageNumber + 1;
      }
   
      this.setState({
        pageNumber: nextPageNumber
      });
       
  }
                  
   
    render(){
      const { pageNumber, numPages } = this.state;
        return (
            <div>
            <MenuHeader>   </MenuHeader>

   <body>
   <div>
   <Container>
       <br />
       <Header textAlign="center">PDF Preview</Header>
       <Form>
         <input type="file" onChange={this.onFileChange}>
         </input>
       </Form>
       <Grid centered columns={2}>
         <Grid.Column textAlign="center" onClick={this.nextPage}>
 
           <Document file={this.state.file} 
                     onLoadSuccess={this.onDocumentLoadSuccess} 
                     noData={<h4>Please select a file</h4>}>
             <Page pageNumber={pageNumber} />
           </Document>
 
           {this.state.file ? <p>Page {pageNumber} of {numPages}</p> : null}
         </Grid.Column>
       </Grid>
     </Container>
      </div>
   </body>
                <Footer></Footer>         
            </div>                 
                
            
        )        
}  

}export default Contract;
