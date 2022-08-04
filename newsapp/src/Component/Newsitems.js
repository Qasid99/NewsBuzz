import React, { Component } from 'react'


export default class Newsitems extends Component {
    render() {

        

        let {title,description,imageurl,urlto} = this.props;
       // console.log("hello");
        //console.log(title);
        return (
            <div>

                <div className="card my-3" style={{width: "18rem"}}>
                    <img src={imageurl} className="card-img-top"width="300" height="200" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={urlto}  rel="noreferrer" target="_blank" className="btn btn-warning">Read More...</a>
                    </div>
                </div>





            </div>


        )
    }
}


