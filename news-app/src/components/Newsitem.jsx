import React, { Component } from 'react';

class Newsitem extends Component {
    // constructor(){
    //     super();
    //     console.log("hello contact newitem")
    // }
    render() {
        let {title, description, imageurl, newsUrl} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageurl?"https://www.newsclick.in/sites/default/files/2023-05/Human%20genome.jpg":imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} className="btn btn-primary" target='_blank'>Go somewhere</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newsitem;