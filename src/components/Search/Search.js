import React, { Component } from "react";
import axios from "axios";
import ImageResults from './../ImageResults/ImageResults'
class Search extends Component {
    state = {
        searchtext: '',
        apiUrl: 'https://pixabay.com/api',
        apiKey: '39414043-ac4ef5dda1062b92023a20bdf',
        images: []
    };
    onTextChange=e=> {
        this.setState({[e.target.name]:e.target.value},()=>{
            axios
            .get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchtext}&image_type=photo&safesearch=true`)
            .then(res=>this.setState({images:res.data.hits}))
            .catch(err=>console.error(err));
        })
    }
    render() {
        console.log(this.state.images);
        return (
            <div>
                <input 
                type="text" 
                class="form-control" 
                style={{
                    backgroundColor: 'black',
                    color: 'white',
                    marginLeft: 570,
                    marginTop: 100,
                    paddingTop: 20,
                    paddingLeft: 70,
                    fontSize: 30,
                    borderTopStyle: 'hidden',
                    borderRightStyle: 'hidden',
                    borderLeftStyle: 'hidden',
                    outline: 'none',
                    borderBottomStyle: 'groove',
                }}
                placeholder="Search for images"
                name="searchtext"
                value={this.state.searchtext}
                onChange={this.onTextChange}
                />
                {this.state.images.length>0 ? (<ImageResults images={this.state.images} />) : null}
            </div>
        );
    }
}

export default Search;