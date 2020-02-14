import React from 'react';
import { fetchget } from '../../utils/myfetch'
import '../../style/alldisc.css'
import { Link,HashRouter as Router} from "react-router-dom";

class AllDisc extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			discLists:[],
			allDiscLists:[]
		}
	}

	async componentDidMount() {
		const discList = await fetchget("/api/album/newest")
		const allDiscList = await fetchget("/api/top/album?limit=85")
		this.setState({ discLists: discList.albums })
		this.setState({ allDiscLists: allDiscList.albums })
//		console.log(songList.result)
	}

	render() {
		const newDiscListDetail = this.state.discLists;
		const allDiscListDetail = this.state.allDiscLists;
		return(<div className='allListContent'>
			<div className='allListContentBox'>
				<div className='allListTitle'>热门新碟</div>
				<div className='allDiscListDetailTop'>
				<Router>
				{
					newDiscListDetail.map((item,index) => {
						return (<div key={index}>
							<Link to={'/nextdisc/' +item.id }>
								<div className='allListSongBox'>
									<div className='songImgBox'><img src={newDiscListDetail[index].picUrl} /></div>
									<div className='songInfoBox'>
										{newDiscListDetail[index].name}
										<br/>
										{newDiscListDetail[index].artist.name}
									</div>
								</div>
							</Link>	
							</div>)
					})
				}
				</Router>	
				</div>
				
				
				<div className='allListTitle'>全部新碟</div>
				<div className='allDiscListDetailBottom'>
				<Router>
				{
					allDiscListDetail.map((item,index) => {
						return (<div key={index}>
							<Link to={'/nextdisc/' + item.id }>
								<div className='allListSongBox'>
									<div className='songImgBox'><img src={allDiscListDetail[index].picUrl} /></div>
									<div className='songInfoBox'>
										{allDiscListDetail[index].name}
										<br/>
										{allDiscListDetail[index].artist.name}
									</div>
								</div>
							</Link>	
							</div>)
					})
				}
				</Router>	
				</div>
			</div>
			
		</div>)
	}
}

export default AllDisc;