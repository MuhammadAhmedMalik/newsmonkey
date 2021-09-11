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

    capital = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pageSize: 15
        }
        document.title = `NewsMonkey - ${this.capital(this.props.category)}`;
    }

    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9e2f112ff9924702ade1c8c4c94c9046&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            totalResults: parsedData.totalResults,
            articles: parsedData.articles,
            loading: false
        })
    }

    async componentDidMount(){
        this.updateNews();
    }

    handlePrevClick = async ()=>{
        await this.setState({page: this.state.page - 1})
        this.updateNews();
    }

    handleNextClick = async ()=>{
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize))){
            await this.setState({page: this.state.page + 1})
            this.updateNews();
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{margin: '35px 0px'}}>NewsMonkey's Top {this.capital(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4 my-3" key={element.url}>
                        <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
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
