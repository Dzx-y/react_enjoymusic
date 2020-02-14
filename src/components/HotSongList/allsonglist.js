import React from 'react';
import { fetchget } from '../../utils/myfetch'
import '../../style/allsonglist.css'
import { Link,HashRouter as Router} from "react-router-dom";
import { BackTop } from 'antd';

class AllSongList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			allSongLists:[]
		}
	}

	async componentDidMount() {
		const allSongList = await fetchget("/api/top/playlist?limit=100")
		this.setState({ allSongLists: allSongList.playlists })
	}

	render() {
		const allSongListDetail = this.state.allSongLists;
		return(<div className='allListContent'>
			<div className='allListContentBox'>
				<div className='allListTitle'>全部歌单</div>
					<div className='allListSongDetail'>
					{
						allSongListDetail.map((item,index) => {
							return (<div key={index}>
									<router>
										<div className='allListSongBox'>
											<Link to={'/nextsonglist/' + item.id}>
												<div className='songImgBox'><img src={allSongListDetail[index].coverImgUrl} /></div>
												<div className='songInfoBox'>{allSongListDetail[index].name}</div>
											</Link>
										</div>
									</router>
								</div>)
						})
					}
					</div>	
			</div>
		    <BackTop>
		      <div className="ant-back-top-inner"><img src={require('../images/top.png')} />回到顶部</div>
		    </BackTop>
		</div>)
	}
}

export default AllSongList;