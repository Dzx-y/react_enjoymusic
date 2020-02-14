import React from 'react';
import { fetchget } from '../../utils/myfetch'
import '../../style/hotsonglist.css'
import { Link,HashRouter as Router} from "react-router-dom";

class HotSongList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			songLists: []
		}
	}

	async componentDidMount() {
		const songList = await fetchget("/api/personalized?limit=12")
		this.setState({ songLists: songList.result })
//		console.log(songList.result)
	}

	render() {
		const songDetail = this.state.songLists;
		return(<div className='listContent'>
			
			<div className='hotList'>
				<span className='listTitle'>热门推荐</span>
				<Router>
				<span className='loadMore'><Link to='/allsonglist'>更多</Link><img src={require('../images/right.png')} /></span>
				</Router>
			</div>
			
				<div className="songCon">
					<router>
						{
			                songDetail.map((item, index) => {
			                    return (<div key={index}>
			                    	<Link to={'/nextsonglist/' + item.id}>
				                    	<div className='songBox'>
											<div className='boxCon'>		
						                    	<div className='songImg'>
													<img src={songDetail[index].picUrl} />
												</div>
												<div className='songDesc'>
													<span>{songDetail[index].name}</span>
												</div>								
											</div>
										</div>
									</Link>
			                    </div>)
			                })
			           }
					</router>
				</div>	
			
		</div>)
	}
}

export default HotSongList;