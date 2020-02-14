import React from 'react';
import { fetchget } from '../../utils/myfetch'
import '../../style/topartist.css'
import { Link,HashRouter as Router} from "react-router-dom";

class TopArtist extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			topArtLists:[]
		};
		
		
	}

	async componentDidMount() {
		const topArtList = await fetchget("/api/toplist/artist")
//		console.log(topArtList.list.artists)
		this.setState({ topArtLists: topArtList.list.artists})
	}
	
	
	
	render() {
		const topArtListDetail = this.state.topArtLists;
//		console.log(topArtListDetail)
		return(<div className='topArtistCon'>
				<div className='topArtistTitle'>				
					<span className='listTitle'>热门歌手</span>
					<Router>
					<span className='topLoadMore'><Link to='/hotartistbox'>更多</Link><img src={require('../images/right.png')} /></span>
					</Router>
				</div>
				<div className='artistlistCon'>
				<Router>
				{
					topArtListDetail.map((item,index) => {
						return (<div key={index}>
							<Link to={'/artistinfo/' + item.id}>
							<div className='artistList'>
								<div className='artistImg'><img src={topArtListDetail[index].picUrl} /></div>
								<div className='artistName'>{topArtListDetail[index].name}</div>
							</div>
							</Link>
						</div>)
					})
				}
				</Router>	
				</div>
		</div>)
	}
}

export default TopArtist;