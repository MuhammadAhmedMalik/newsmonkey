import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [pageSize, setPageSize] = useState(15);
    const [totalResults, setTotalResults] = useState(0);

    const capital = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews= async ()=>{
        props.setProgress(10); 
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=479fdc4102a94c15b5c23851802cade1&page=${page}&pageSize=${pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(75);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `NewsMonkey - ${capital(props.category)}`;
        updateNews(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchMoreData = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=479fdc4102a94c15b5c23851802cade1&page=${page+1}&pageSize=${pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
  };

    return (
        <>
            <h1 className="text-center" style={{margin: '90px 0px'}}>NewsMonkey's Top {capital(props.category)} Headlines</h1>
            {loading && <Spinner/>}
            <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Spinner/>} >
                <div className="container">
                    <div className="row">
                        {articles.map((element)=>{
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

    News.defaultProps = {
        country: 'us',
        category: 'general'
    }
    News.propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }

export default News
