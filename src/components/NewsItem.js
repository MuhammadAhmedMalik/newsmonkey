import React from 'react'

const NewsItem = (props)=> {
    let {title, description, imgUrl, newsUrl, author, date, source} = props;
    return (
        <div>
            <div className="card">
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-dark" style={{zIndex:'1'}}>{source}</span>
                <img src={!imgUrl?"https://t3.ftcdn.net/jpg/03/35/13/14/240_F_335131435_DrHIQjlOKlu3GCXtpFkIG1v0cGgM9vJC.jpg":imgUrl} className="card-img-top" alt="..."/>
                <div className="card-body">""
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
