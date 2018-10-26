import React, {Component} from 'react';
import "./Gallery.css";
const imageArray = ["https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7428414/2018/10/5/c4bab57a-6bd0-4ac0-ab6c-cbc2bfbf0e6b1538735835101-FOREVER-21-Women-Red-Checked-Tailored-Jacket-708153873583366-1.jpg",
"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1469141/2016/9/1/11472708895984-Roadster-Women-Green-Regular-Fit-Checked-Casual-Shirt-9521472708895700-1.jpg",
"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/6849789/2018/8/3/31a581e4-9eda-4540-87cb-9a358a5ba6cb1533297914690-Roadster-Women-Navy-Blue-Striped-Top-5671533297912420-1.jpg",
"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025107/2017/9/2/11504331806749-Roadster-Women-Rust-Solid-Puffer-Jacket-8941504331806579-1.jpg",
"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1866509/2017/8/28/11503926753404-Roadster-Women-Maroon-Self--Design-Top-7301503926753088-1.jpg",
"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1857797/2017/5/9/11494309883256-FOREVER-21-Women-Grey-Melange-Solid-Sweatshirt-5951494309882860-1.jpg"
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
            let imageClass = ["smallImagesDiv"];
            if(index === this.state.imageIndex){
                imageClass.push("selected-img") ;
            }
            return(
                <div className={imageClass.join(" ")}>
                    <img  
                        width="112px" height="150px" 
                        onClick={() => this.clickHandler(index)} 
                        src={image}
                    />
                </div>
            
            )
        }  )
        return(
            <div>
                <header>
                    <h1>Image Gallery</h1>
                </header>
                <section id='women'>
                    <div className='largeImageDiv'>
                        <img width="314px" height="419px" src={imgSrc}/><br/>
                    </div>
                    
                    {buttonHandler}<br/>
                   
                    <button onClick={this.nextClickHandler} className='absolute nextBtn'>NEXT</button>
                    <button onClick={this.prevClickHandler} className='absolute prvBtn'>PREV</button>
                </section>
                
            </div>
        );
    }
} 
export default Gallery
