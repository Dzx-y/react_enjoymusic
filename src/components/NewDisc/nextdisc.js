import React from 'react';
import { fetchget } from '../../utils/myfetch';
import '../../style/nextsonglist.css';
import '../../style/nextdisc.css';
import { Link,HashRouter as Router} from "react-router-dom";
import { BackTop } from 'antd';

class NextDisc extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			albumSongResults:[],
			albumResults:'',
			albumArtists:''
			
		};
		
		
	}

	async componentDidMount() {
		const albumResult = await fetchget("/api/album?id=" + this.props.match.params.id)
		this.setState({ albumSongResults: albumResult.songs })
		this.setState({ albumResults: albumResult.album })
		this.setState({ albumArtists: albumResult.album.artist })
		
		
	}
	
	
	
	
	
	render() {
		const albumDetail = this.state.albumResults;
		const alSongsDetail = this.state.albumSongResults;
		const alArtistDetail = this.state.albumArtists;
		return(<div className='nextSongList'>
			<div className='nextSongListCon'>
				<div className='nextSongListLeft'>
					<div className='nextSongListBox'>
						<div className='topTitleCon'>
							<div className='titleImg'><img src={albumDetail.picUrl}/></div>
							<div className='titleDetail'>
								<div className='nextlistTitle'>{albumDetail.name}</div>
								<Router>
								<div className='nextlistAuthor'>
									<h5>歌手:  <Link to={'/artistinfo/' + alArtistDetail.id }>{alArtistDetail.name}</Link></h5>
								</div>
								</Router>
								<div className='nextlistTag'>
									<div className='listTagName'>发行公司:  {albumDetail.company}</div>
									
								
								</div>
								<div className='titleIntro'>
									<div className='listTagName'>介绍:</div>
									<div className='introCon'>{albumDetail.description}</div>
								</div>
							</div>
						</div>
						
						<div className='songContentAll'>
							<div className='songContentTitle'>歌曲列表</div>
							<div className='songContentList'>
								<div className='songGuide'>
									<div className='songGuideRank'></div>
									<div className='songGuideImg'>封面</div>
									<div className='songGuideName'>歌曲</div>
									<div className='songGuideArtist'>歌手</div>
									<div className='songGuideAlbum'>专辑</div>
								</div>
									
								{
									alSongsDetail.map((item,index) => {
										return (<div key={index} className='songListBgCon'>
											<div className='songGuideCon'>
												<div className='songGuideRankCon'>{index+1}</div>
												<div className='songGuideImgCon'><img src={alSongsDetail[index].al.picUrl} /></div>
												<Router>
													<div className='songGuideNameCon'><Link to={'/play/' + item.id}>{alSongsDetail[index].name}</Link></div>
												</Router>
												<div className='songGuideArtistCon' key={index}>
												<Router>
												{
													item.ar.map((item,index) => {
														
														return (<div className='songGuideArtistInCon' key={index}><Link to={'/artistinfo/' + item.id}>{item.name}</Link></div>)
														
													})
												}
												</Router>
												</div>
												
												<div className='songGuideAlbumCon'>{alSongsDetail[index].al.name}</div>
											</div>
										</div>)
									})
								}
								
																
							</div>
						</div>
					</div>
					
				</div>
				<div className='nextSongListRight'></div>
			</div>
			<div>
			    <BackTop>
			      <div className="ant-back-top-inner"><img src={require('../images/top.png')} />回到顶部</div>
			    </BackTop>
			</div>
		</div>)
	}
}

export default NextDisc;




