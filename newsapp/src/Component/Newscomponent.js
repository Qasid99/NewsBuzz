import React, { Component } from 'react'
import Newsitems from './Newsitems';
import Spinner from './Spinner'


export default class Newscomponent extends Component {
nextpage = () => {
    // e.preventdefault();
    console.log("hello");
  }

  constructor(props) {

    super(props);
    this.state = {
      articles: [],
      loading: false,
      temp: props.categories
      // categories : 'general'
    }
    console.log(props.categories);
  }

  async componentDidMount() {
    //console.log(this.props.categories);
    let temp = this.props.categories;
    console.log(temp);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${temp}&apiKey=955c9a03435b4c30a57808e21f90d027`;
    this.setState({ loading: true })
    let data = await fetch(url);
    console.log(data);

    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      loading: false

    });
    //this.setState({ articles= parseddata.articles });
    console.log(parseddata);

  }

  render() {

    return (
      <div className="container my-3">
        < div className="row">

          {
            this.state.loading && <Spinner />

          }

          {this.state.articles.map((element) => {

            return <div className="col-md-4" key={element.url}>

              <Newsitems title={element.title} description={element.description} imageurl={element.urlToImage} urlto={element.url} />

            </div>
          }

          )}

          <div className="container d-flex justify-content-between my-3" >
            <button type="button" className="btn btn-dark" onClick={this.nextpage}>Previous</button>
            <button type="button" className="btn btn-dark">Next</button>
          </div>
        </div>
      </div >
    )
  }
}
