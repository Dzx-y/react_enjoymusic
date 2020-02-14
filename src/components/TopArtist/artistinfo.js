import React from 'react';
import { fetchget } from '../../utils/myfetch'
import '../../style/artistinfo.css'
import { Link,HashRouter as Router} from "react-router-dom";

class ArtistInfo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			artistInfos:[],
			artistInfoSongs:[]
		};
		
		
	}

	async componentDidMount() {
		const artistInfo = await fetchget("/api/artists?id=" + this.props.match.params.id)
		this.setState({ artistInfos: artistInfo.artist})
		this.setState({ artistInfoSongs: artistInfo.hotSongs})
	}
	
	
	
	render() {
		const artistInfoSongsDetail = this.state.artistInfoSongs;
		return(<div className='infoContent'>
			<div className='infoContentBox'>
				<div className='infoContentLeft'>
					<div className='contentInBox'>
						<div className='contentInBoxName'>{this.state.artistInfos.name}</div>
						<div className='contentInBoxImg'><img src={this.state.artistInfos.picUrl} /></div>
						<div className='contentInBoxIntro'>
							<p>{this.state.artistInfos.name}简介</p>
							<div className='contentInBoxIntroDe'>{this.state.artistInfos.briefDesc}</div>
						</div>
						<div className='contentInBoxSongs'>
							<div className='listBoxTitleOn'>歌曲列表</div>
							<div className='listBoxTitleDown'>
							{
								artistInfoSongsDetail.map((item,index) => {
									return (<div key={index} className='allListSongsBoxDe'>
										<div className='listBoxSongsNum'>{index+1}</div>
										<div className='listBoxSongsImg'><img src={artistInfoSongsDetail[index].al.picUrl} /></div>
										<router>
											<div className='listBoxSongsName'><Link to={'/play/' + item.id}>{artistInfoSongsDetail[index].name}</Link></div>
										
										<div className='listBoxSongsAlbum'><Link to={'/nextdisc/' +artistInfoSongsDetail[index].al.id }>{artistInfoSongsDetail[index].al.name}</Link></div>
										</router>
									</div>)
								})
							}
								
							</div>
						</div>
					</div>
				</div>
				<div className='infoContentRight'></div>
			</div>
		</div>)
	}
}

export default ArtistInfo;