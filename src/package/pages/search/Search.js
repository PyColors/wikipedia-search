import React, { Component } from 'react';
import axios from 'axios';

import Propositions from '../../components/molecules/Propositions';

class Search extends Component {
  state = {
    error: false,
    query: '',
    results: []
  }

  // Axios GET returns a promise, it does not block the rest of the application 
  getInfo = () => {
  axios.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages%7Cpageterms&generator=prefixsearch&redirects=1&formatversion=2&piprop=thumbnail&pithumbsize=250&pilimit=20&wbptterms=description&gpssearch=${this.state.query}&gpslimit=20`)
    .then(({ data }) => {
        this.setState({
          results: data.query.pages
        })
      })
      .catch(() => this.setState({ 
        error: true 
      }))
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
      
        if (this.state.query.length % 2 === 0) {
          // Call getInfo()
          this.getInfo()
        }
      } 
    })
  }

  render() {
    return (
      <div className="content-form">
      <form>
        <input
          placeholder="Search"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
          className="content-form__search"
        />

        <Propositions 
          results={this.state.results} 
          error={this.state.error} 
        />
      </form>
      </div>
    )
  }
}

export default Search;
