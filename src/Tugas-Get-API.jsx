import Axios from 'axios'
import React from 'react'


const linkAPI = 'http://newsapi.org/v2/everything?q=apple&from=2021-02-24&to=2021-02-24&sortBy=popularity&apiKey=703336673ea34543bdb9b9fa1c1c713f'

export default class TugasGetAPI extends React.Component{
        state = {
            data: null

        }

        componentDidMount(){
            this.getData()
        }

        getData = () =>{
            Axios.get(linkAPI)
            .then((res) =>{
                console.log(res.data.articles)
                this.setState({data: res.data.articles})
            })
            .catch((err) =>{
                console.log(err)
            })
        }

    render(){
        if(this.state.data === null){
            return(
                <div>
                    <h3>
                        Loading.....
                    </h3>
                </div>
            )
        }
        return(
            <div>
                 <div>
                     <br/><br/><br/>
                    <h1 className="container">
                        Tugas Fetch data API
                    </h1>
                    <br/><br/>
                    {/* <input type="button" value="data" /> */}
                    {
                        this.state.data.map((value, index) =>{
                            return(
                                <div key={index}>
                                    <div className="container d-flex mt-3 justify-content-start p-3" style={{boxShadow: "-1px 1px 5px black"}}>
                                        <div className="col-2.5">
                                            <img src={value.urlToImage} alt="" width="200px" height="90%"/>
                                        </div>

                                        <div className="col-9.5" style={{paddingLeft: "10px"}} >
                                            <a href={value.url} style={{textDecoration: 'none'}}> <h5 style={{color: 'black'}}>
                                                {value.title}
                                            </h5></a>
                                            {/* <Link to={value.url} style={{textDecoration: "none"}}> <h4 style={{color:"black"}}>{value.title}</h4> </Link> */}
                                            <div className="mt-4">
                                                <span>
                                                Publish at : &nbsp;{(value.publishedAt.slice(11, 16).split(':').join(' : '))}
                                                </span>
                                                <span className="">&nbsp; &nbsp;
                                                    {(value.publishedAt.slice(0, 10).split('-').reverse().join('-'))}
                                                </span>
                                            </div>

                                            <p>Author &nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;{value.author}</p>
                                        </div>


                                    </div>
                                    
                                    
                                </div>
                            )
                        })
                    }

                </div>

                <br/><br/><br/>
                <br/><br/><br/>

            </div>
        )
    } 
} 
