import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    componentDidMount(){
    }

    onDishSelect(dish){
        this.setState({
            selectedDish: dish
        });
    }

    renderDish(dish){
        if(dish != null){
            return(
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(dish){

        if(dish != null){
            var comments = this.props.dishes[this.state.selectedDish.id].comments.map((comment) => {
                return(
                    <div key={comment.id}>
                        <p>"{comment.comment}"</p>
                        <p>--{comment.author} {comment.date}</p>
                    </div>
                ); 
            });
            return(
                <div className="col-12 col-md-5 m-1">
                <h3>Comments:</h3>
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

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                    {this.renderComments(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;