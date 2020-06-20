import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
     /*constructor(props) {
        super(props);
        
       
        console.log('Menu Component constructor is invoked');
    }

    componentDidMount() {
        console.log('Menu Component componentDidMount is invoked');
    }*/

    // function RenderMenuItem (props) {}
    function RenderMenuItem({dish, onClick}) {
        return (
            <Card> 
                <Link to={'/menu/${dish.id}'} >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />                    
                        <CardImgOverlay>
                            <CardTitle> {dish.name} </CardTitle>
                        </CardImgOverlay>  
                </Link>      
            </Card>
        );
    }

    // function Menu (props) {}
    const Menu = (props) => {
        // map (JS keyword): iterating over every dish in the dishes array here
        const menu = props.dishes.dishes.map((dish) => {
            return (
                // key: every item require key attribute to specift it.
                // the key helps React to recognise each one of these elements, uniquely. 
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} />
                </div>    
            );
        }); // take the JS objects

        if (props.dishes.isLoading) {
            return(
                <div className="container">
                  <div className="row">
                    <Loading />
                  </div>
                </div>
              );
        }
        else if(props.dishes.errMess) {
            return(
                <div className="container">
                  <div className="row">
                    <h4>{props.dishes.errMess}</h4>
                  </div>
                </div>
            );
        }
        

        //console.log('Menu component render invoked')

         // return what needs to display on the UI in this conponent. (return view)
        else
            return ( 
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem> <Link to='home'>Home</Link> </BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr />
                        </div>    
                    </div>    
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );
    }



    /*renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        
        console.log('Menu Component render is invoked');
        
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}*/

export default Menu;