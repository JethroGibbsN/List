import React, { Component } from 'react';
import { channels } from '../mockData';
import {  Container } from 'react-bootstrap';
import { Card, MDBCol,CardTitle, MDBRow, CardText} from 'mdbreact';
export class Channel extends Component {
    constructor(){
        super();
        this.state={
            search: ''
        };
    }
    updateSearch(event){
        this.setState({search: event.target.value.substr(0,20)});
    }
    render() {
        const { channelId } = this.props.match.params;
        const currentChannel = channels.filter(channel => channel.id === channelId)[0];
        const articles = currentChannel.articles;
        const {search} = this.state
        const filtersearch = articles.filter(
            (article) =>{
                return article.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
            }
        )
        return (
            <div className="flyout">
                <main style={{marginTop: '4rem'}}>
                <Container className="cont">
                <MDBRow>
                <MDBCol></MDBCol>
                <MDBCol><input className="form-control" type="text" placeholder="Search" onChange={this.updateSearch.bind(this)} aria-label="Search" /><hr /></MDBCol>
                <MDBCol></MDBCol> 
                </MDBRow>
                <MDBRow>
                {
                    filtersearch.map((article, i) =>
                    <div align="center" className="col-md-4" style={{ marginTop : '20px' }}>.
                            <MDBCol>
                            <Card style={{ width: "22rem", marginTop: "1rem"}}>
                            <div key={article.id}>
                                <img class="card-img-top" src={article.urlimg} alt="" ></img>
                                <CardTitle><h4>{article.title} </h4><h5>- {article.author}</h5></CardTitle>
                                <CardText><p>{article.id} - {article.description}</p></CardText>
                            </div>
                            </Card>
                            </MDBCol>
                    </div>   
                    )
                }
                </MDBRow>
                </Container>
                </main>
            </div>
        )
    }
}
