import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'us',
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pageSize: 15
        }
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9e2f112ff9924702ade1c8c4c94c9046&page=1&pageSize=${this.state.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false})
    }

    handlePrevClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9e2f112ff9924702ade1c8c4c94c9046&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    handleNextClick = async ()=>{
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9e2f112ff9924702ade1c8c4c94c9046&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{margin: '35px 0px'}}>NewsMonkey Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4 my-3" key={element.url}>
                        <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevClick} className="btn btn-dark">&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize)} onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
