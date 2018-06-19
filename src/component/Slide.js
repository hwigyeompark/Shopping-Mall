import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import back1 from '../img/back1.png';
import back2 from '../img/back2.png';
import back3 from '../img/back3.png';

const items = [
    {
        src: back1,
        altText: 'Slide 1',
    },
    {
        src: back2,
        altText: 'Slide 2',
    },
    {
        src: back3,
        altText: 'Slide 3',
    }
];

class Slide extends Component{
    constructor(props){
        super(props);
        this.state = { imageIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.imageIndex === items.length - 1 ? 0 : this.state.imageIndex + 1;
        this.setState({ imageIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.imageIndex === 0 ? items.length - 1 : this.state.imageIndex - 1;
        this.setState({ imageIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ imageIndex: newIndex });
    }
    render(){
        const { imageIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption />
                </CarouselItem>
            );
        });
        return(
            <div id="slide">
                <Carousel activeIndex={imageIndex} next={this.next} previous={this.previous}>
                    <CarouselIndicators items={items} activeIndex={imageIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
        );
    }
}
export default Slide;