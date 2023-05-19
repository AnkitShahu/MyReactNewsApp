import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Newsitem from './Newsitem';
import Loading from './Loading';

class News extends Component {
    static defaultProps ={
        country: 'in',
        pageSize: 8,
        category: 'gereral',
    }

    static PropTypes ={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    articles = [
            {
            "source": {
            "id": "engadget",
            "name": "Engadget"
            },
            "author": "Igor Bonifacic",
            "title": "Apple’s M1 iPad Air drops to $500 at Amazon",
            "description": "If you’ve been eyeing Apple’s 5th-generation iPad Air\r\n for a while, now is a great time to purchase one. On Amazon, a handful of the 64GB WiFi models are $99 off at the moment. Specifically, you can get the Space Gray, Blue and Starlight colorways for $500. …",
            "url": "https://www.engadget.com/apples-m1-ipad-air-drops-to-500-at-amazon-153725318.html",
            "urlToImage": "https://s.yimg.com/uu/api/res/1.2/iKdP.khimqYdX4At2Peeyw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-03/de844380-a47d-11ec-b6be-9dd2ff775c4e.cf.jpg",
            "publishedAt": "2023-05-13T15:37:25Z",
            "content": "If youve been eyeing Apples 5th-generation iPad Air\r\n for a while, now is a great time to purchase one. On Amazon, a handful of the 64GB WiFi models are $99 off at the moment. Specifically, you can g… [+1143 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Android Central"
            },
            "author": "tips@androidcentral.com (Vishnu Sarangapurkar)",
            "title": "Modular Fairbuds XL bring ANC, 30-hour battery life, and easily repairable design",
            "description": "Fairphone is back with new modular headphones, which are environment-friendly like the company's phones, and yet have premium features.",
            "url": "https://www.androidcentral.com/accessories/audio/fairphone-fairbuds-xl-launch",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/o5fMEPoytjDt8twx3pozXe-1200-80.jpg",
            "publishedAt": "2023-05-13T16:23:58Z",
            "content": "<ul><li>Fairbuds XL are the new headphones designed by Fairphone.</li><li>Like its phones, these headphones are also modular, making them sustainable.</li><li>They come with ANC and other premium fea… [+2769 chars]"
            }
    ]

    constructor(props){
        super(props);
        console.log("hello contact News app")
        this.state = {
            articles:  [],
            loading: false,
            page: 1
            
        }
    }

  async componentDidMount(){
        console.log("CDM")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7e3d5d500d1a414687dfbc10f1d6e4e0&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading: true});
        let data = await fetch(url);
        let parsadData = await data.json()
        console.log(parsadData)
        this.setState({articles: parsadData.articles, totalResults: parsadData.totalResults, loading: false})
    }
    handlepre= async()=>{
        console.log("pre")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7e3d5d500d1a414687dfbc10f1d6e4e0&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsadData = await data.json()
        console.log(parsadData)
        this.setState({
            page: this.state.page -1,
            articles: parsadData.articles,
            loading: false
        }
        )
    }

    handlenext= async()=>{
        // if(!(this.state.page +1 > Math.ceil(this.state.totalResults/20))){
        console.log("next")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7e3d5d500d1a414687dfbc10f1d6e4e0&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        console.log(url)
        let data = await fetch(url);
        let parsadData = await data.json()
        console.log(parsadData)

        this.setState({
            page: this.state.page +1,
            articles: parsadData.articles,
            loading: false
        }
        )
    }
    render() {
        return (
            <div className='container'>
            <div className='row'>
            <h2> News App</h2>
            {this.state.loading && <Loading />}
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className='col-md-4' key = {element.url}>
                <Newsitem title= {element.title?element.title.slice(0, 45):""} description = {element.description?element.description.slice(0, 88):""} imageurl={element.urlToImage}  newsUrl= {element.url} />
            </div>
            })}
           <div className='my-5 d-flex justify-content-evenly'>
            <button disabled={this.state.page <= 1 } type="button" className="btn btn-dark" onClick={this.handlepre}> &larr; Pervios</button>
            <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className ="btn btn-dark" onClick={this.handlenext}>Next &rarr;</button>
           </div>
                </div>
            </div>
        );
    }
}



export default News;