import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'


class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    renderComments(selectedDish){

        if(selectedDish != null){
            var comments = this.props.selectedDish.comments.map((comment) => {
                return(
                    <div key={comment.id}>
                        <p>"{comment.comment}"</p>
                        <p>--{comment.author} {comment.date}</p>
                    </div>
                ); 
            });
            return(
                <div className="container">
                    <h4>Comments:</h4>
                    {comments}
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render() {

        return (
            <div className="col-12 col-md-5 m-1">
                {this.renderComments(this.props.selectedDish)}
            </div>
        );
    }
}

export default DishDetail;