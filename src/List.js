import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { channels } from './mockData';
import { Card, MDBCol,CardTitle, MDBRow } from 'mdbreact';
import {  Container } from 'react-bootstrap';

export class List extends Component {
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
        const {search} = this.state
        const filteredChannel = channels.filter(
            (channel) =>{
                return channel.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
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
                            filteredChannel.map((dynamicData, i) =>
                                <div align="center" className="col-md-3" style={{ marginTop : '20px' }}>
                                <MDBCol>
                                <Card style={{ width: "12rem", marginTop: "1rem"}}>
                                <img class="card-img-top" alt="" src={dynamicData.img} width="20px" height="180px" ></img>
                                <CardTitle><Link to={`/list/${dynamicData.id}`}>{dynamicData.name}</Link></CardTitle>
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
