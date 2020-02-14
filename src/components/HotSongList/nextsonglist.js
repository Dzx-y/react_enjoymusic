import React from 'react';
import { fetchget } from '../../utils/myfetch';
import '../../style/nextsonglist.css';
import { Link,HashRouter as Router} from "react-router-dom";
import { BackTop } from 'antd';

class NextSongList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			allPlayLists:[],
			allPlayListsInfo:'',
			allPlayListsCreator:'',
			allPlayListsTags:[]
		};
		
		
	}

	async componentDidMount() {
		const allPlayList = await fetchget("/api/playlist/detail?id=" + this.props.match.params.id)
		this.setState({ allPlayLists: allPlayList.playlist.tracks })
		this.setState({ allPlayListsInfo: allPlayList.playlist })
		this.setState({ allPlayListsCreator: allPlayList.playlist.creator })
		this.setState({ allPlayListsTags: allPlayList.playlist.tags })
		
	}
	
	
	
	
	
	render() {
		const allPlayListDetail = this.state.allPlayLists;
		const tagDetail = this.state.allPlayListsTags;
		return(<div className='nextSongList'>
			<div className='nextSongListCon'>
				<div className='nextSongListLeft'>
					<div className='nextSongListBox'>
						<div className='topTitleCon'>
							<div className='titleImg'><img src={this.state.allPlayListsInfo.coverImgUrl} /></div>
							<div className='titleDetail'>
								<div className='nextlistTitle'>{this.state.allPlayListsInfo.name}</div>
								<div className='nextlistAuthor'>
									<img src={this.state.allPlayListsCreator.avatarUrl} />
									<span>{this.state.allPlayListsCreator.nickname}</span>
								</div>
								<div className='nextlistTag'>
									<div className='listTagName'>标签:</div>
									{
										tagDetail.map((item,index) => {
											return (<div className='tagName' key={index}>{tagDetail[index]}</div>)
										})
									}
								
								</div>
								<div className='titleIntro'>
									<div className='listTagName'>介绍:</div>
									<div className='introCon'>{this.state.allPlayListsInfo.description}</div>
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
									allPlayListDetail.map((item,index) => {
										return (<div key={index} className='songListBgCon'>
											<div className='songGuideCon'>
												<div className='songGuideRankCon'>{index+1}</div>
												<div className='songGuideImgCon'><img src={allPlayListDetail[index].al.picUrl} /></div>
												<Router>
													<div className='songGuideNameCon'><Link to={'/play/' + item.id}>{allPlayListDetail[index].name}</Link></div>
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
												<Router>
												<div className='songGuideAlbumCon'><Link to={'/nextdisc/' + allPlayListDetail[index].al.id }>{allPlayListDetail[index].al.name}</Link></div>
												</Router>
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

export default NextSongList;




