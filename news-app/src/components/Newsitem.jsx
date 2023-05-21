import React, { Component } from 'react';

class Newsitem extends Component {
    // constructor(){
    //     super();
    //     console.log("hello contact newitem")
    // }
    render() {
        let { title, description, imageurl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card">
                    <img src={!imageurl ? "https://www.newsclick.in/sites/default/files/2023-05/Human%20genome.jpg" : imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{top:"2%", right:"-15%"}}>
                            {source}
                        </span>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className='text-muted'>Author: {!author ? "Unknow" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-primary" target='_blank'>Go somewhere</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newsitem;