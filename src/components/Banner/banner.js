import React from 'react';
import {fetchget} from '../../utils/myfetch'
import { Carousel } from 'antd';
import '../../style/banner.css'



class Banner extends React.Component{
	constructor(props) {
        super(props);

        this.state = {
            banners:[]
        }
    }
	
	async componentDidMount(){
		const banner = await fetchget("/api/banner?type=0")
//		console.log(banner)
		this.setState({ banners: banner.banners })
	}
	
	render(){
		const bannerImg = this.state.banners;
		return (<div className="carouselCon">
			<div className="backImg">
				<Carousel autoplay>
					{
		                bannerImg.map((item, index) => {
		                    return <div key={index}><img src={bannerImg[index].imageUrl} /></div>
		                })
		           }
				</Carousel>
			</div>						
			<div className="carousel">
				<Carousel autoplay>
					{
		                bannerImg.map((item, index) => {
		                    return <div key={index}><img src={bannerImg[index].imageUrl} /></div>
		                })
		           }
				</Carousel>
			</div>
			
		</div>)
	}
}

export default Banner;