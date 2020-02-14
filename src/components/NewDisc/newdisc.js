import React from 'react';
import { fetchget } from '../../utils/myfetch'
import '../../style/newdisc.css'
import { Link,HashRouter as Router} from "react-router-dom";

class NewDisc extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			albumLists:[]
		};
		
		
	}

	async componentDidMount() {
		const albumList = await fetchget("/api/album/newest")
//		console.log(albumList.albums)
		this.setState({ albumLists: albumList.albums })
	}
	
	
	Astop=()=>{
	
	    this.refs.mar.stop();
	}
	
	Astart=()=>{
	    this.refs.mar.start();
	}
	
	
	render() {
		const albumDetail = this.state.albumLists;
		
		return(<div className='newDiscCon'>
			<div className='newTitle'>			
				<span className='listTitle'>新碟上架</span>
				<Router>
				<span className='loadMore'><Link to='/alldisc'>更多</Link><img src={require('../images/right.png')} /></span>
				</Router>
			</div>
			<div className='paoma'>
				<div className="albumCon">	
					<marquee scrollamount='3' ref="mar" onMouseOver={this.Astop.bind(this)} onMouseOut={this.Astart.bind(this)}>
					<Router>
					{
		                albumDetail.map((item, index) => {
//		                	console.log(albumDetail[index].artists[0].name)
		                	
		                    return (<div key={index}>
		                    	<Link to={'/nextdisc/' + item.id}>
			                    	<div className='albumBox'>
										<div className='boxCon'>		
					                    	<div className='songImg'>
												<img src={albumDetail[index].picUrl} />
											</div>
											<div className='songDesc'>												
													{albumDetail[index].name}
													<br />
													{albumDetail[index].artists[0].name}												
											</div>								
										</div>
									</div>
								</Link>
		                    </div>)
		                })
		           }
					</Router>
		           </marquee>
				</div>	
			</div>	
		</div>)
	}
}

export default NewDisc;