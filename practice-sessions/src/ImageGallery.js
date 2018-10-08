import React, {Component} from 'react';
import "./index.css";
const imageArray = ["https://i.pinimg.com/236x/b2/f1/e2/b2f1e24611e8cc750eab6fcd30ea47ba--kurta-designs-dress-designs.jpg" ,
   "http://www.colorattire.com/wp-content/uploads/2013/07/Pink-Party-Dresses.jpg" ,
    "https://dimg.dillards.com/is/image/DillardsZoom/nav/adrianna-papell-hi-low-sleeveless-taffeta-gown/04641981_zi_geranium.jpg" ,
    "http://www.babycouture.in/blog/wp-content/uploads/2017/12/lavender_glitter_love_kids_party_dress.jpg" ,
    "https://cdn-image.realsimple.com/sites/default/files/styles/portrait_435x518/public/image/images/1409/black-jumpsuit_300.jpg?itok=p20ynPXl",
    "https://image.shutterstock.com/image-photo/amazing-luxury-seductive-woman-stylish-260nw-729519088.jpg"
]
class Gallery extends Component{
    constructor(props){
        super(props);
        this.state = {
            imageIndex : 0
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.nextClickHandler = this.nextClickHandler.bind(this);
        this.prevClickHandler = this.prevClickHandler.bind(this);
    }
    clickHandler(i){
        this.setState({imageIndex: i})
    }
    nextClickHandler(){
        let currentIndex = this.state.imageIndex;
        let nextIndex = currentIndex + 1;
        if(nextIndex < imageArray.length){
            this.setState({imageIndex: nextIndex});
            
        }
        else{
            alert("no images left");
        }
    }
    prevClickHandler(){
        let currentIndex = this.state.imageIndex;
        let prevIndex = currentIndex - 1;
        if(prevIndex >= 0){
            this.setState({imageIndex: prevIndex});

        }
    }
    render(){
        const imgSrc = imageArray[this.state.imageIndex] 
        const buttonHandler = imageArray.map((image, index) =>{
            let imageClass = "";
            if(index === this.state.imageIndex){
                imageClass = "selected";
            }
            return(
            <img className={imageClass} 
                width="100px" height="100px" 
                onClick={() => this.clickHandler(index)} 
                src={image}
            />
            )
        }  )
        return(
            <div>
                <img width="450px" height="450px" src={imgSrc}/><br/>
                {buttonHandler}<br/>
                <button onClick={this.nextClickHandler}>Next</button>
                <button onClick={this.prevClickHandler}>Previous</button>
            </div>
        );
    }
} 
export default Gallery
