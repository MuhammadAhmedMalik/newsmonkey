import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    static defaultProps = {
        country: 'us',
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }

    capital = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            pageSize: 15,
            totalResults: 0
        }
        document.title = `NewsMonkey - ${this.capital(this.props.category)}`;
    }

    async updateNews(){
        this.props.setProgress(10); 
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=479fdc4102a94c15b5c23851802cade1&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json();
        this.props.setProgress(75);
        this.setState({
            totalResults: parsedData.totalResults,
            articles: parsedData.articles,
            loading: false
        })
        this.props.setProgress(100);
    }

    async componentDidMount(){
        this.updateNews();
    }

    fetchMoreData = async() => {
        this.setState({page: this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=479fdc4102a94c15b5c23851802cade1&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            totalResults: parsedData.totalResults,
            articles: this.state.articles.concat(parsedData.articles)
        })
  }

    render() {
        return (
            <>
                <h1 className="text-center" style={{margin: '35px 0px'}}>NewsMonkey's Top {this.capital(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                    >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element)=>{
                                return <div className="col-md-4 my-3" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                            </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News
