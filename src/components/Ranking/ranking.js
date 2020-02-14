import React from 'react';
import { fetchget } from '../../utils/myfetch';
import '../../style/ranking.css';
import { Link,HashRouter as Router} from "react-router-dom";

class Ranking extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			rankLists1:[],
			rankLists2:[],
			rankLists3:[],
			rankLists4:[],
			RankLists1:[],
			RankLists2:[],
			RankLists3:[],
			RankLists4:[]
		};
		
		
	}

	async componentDidMount() {
		const rankList1 = await fetchget("/api/top/list?idx=0")
		const rankList2 = await fetchget("/api/top/list?idx=1")
		const rankList3 = await fetchget("/api/top/list?idx=2")
		const rankList4 = await fetchget("/api/top/list?idx=3")
//		console.log(rankList1.playlist.tracks)
		this.setState({ rankLists1: rankList1.playlist })
		this.setState({ rankLists2: rankList2.playlist })
		this.setState({ rankLists3: rankList3.playlist })
		this.setState({ rankLists4: rankList4.playlist })
		
		this.setState({ RankLists1: rankList1.playlist.tracks })
		this.setState({ RankLists2: rankList2.playlist.tracks })
		this.setState({ RankLists3: rankList3.playlist.tracks })
		this.setState({ RankLists4: rankList4.playlist.tracks })
		
	}
	
	
	
	
	
	render() {
		const rankDetail1 = this.state.rankLists1;
		const rankDetail2 = this.state.rankLists2;
		const rankDetail3 = this.state.rankLists3;
		const rankDetail4 = this.state.rankLists4;
		
		const RankDetail1 = this.state.RankLists1;
//		console.log(RankDetail1)
		const RankDetail2 = this.state.RankLists2;
		const RankDetail3 = this.state.RankLists3;
		const RankDetail4 = this.state.RankLists4;
		return(<div className='rankCon'>
				<div className='rankTitle'>				
					<span className='listTitle'>榜单</span>
					<Router>
					<span className='rankLoadMore'><Link to='/allranking'>更多</Link><img src={require('../images/right.png')} /></span>
					</Router>
				</div>
				<div className='rankListCon'>
				
					<div className='rankBox'>
						<div className='rankInBox'>
							<div className='rankImg'>
								<img src={rankDetail1.coverImgUrl} />
							</div>
							<div className='rankSong'>
							<Router>
								{
									
									RankDetail1.map((item,index) => {
										return (<div key={index}>
											<Link to={'/play/' + item.id}>
											<span>{(index+1)}.{RankDetail1[index].al.name}</span>
											</Link>
											<br />
										</div>)
																			
									})
								}
							</Router>
							</div>
						</div>	
					</div>
					
					<div className='rankBox'>
						<div className='rankInBox'>
							<div className='rankImg'>
								<img src={rankDetail2.coverImgUrl} />
							</div>
							<div className='rankSong'>
							<Router>
								{
									
									RankDetail2.map((item,index) => {
										return (<div key={index}>
											<Link to={'/play/' + item.id}>
											<span>{(index+1)}.{RankDetail2[index].al.name}</span>
											</Link>
											<br />
										</div>)
																			
									})
								}
							</Router>
							</div>
						</div>	
					</div>	
					
					<div className='rankBox'>
						<div className='rankInBox'>
							<div className='rankImg'>
								<img src={rankDetail3.coverImgUrl} />
							</div>
							<div className='rankSong'>
							<Router>
								{
									
									RankDetail3.map((item,index) => {
										return (<div key={index}>
											<Link to={'/play/' + item.id}>
											<span>{(index+1)}.{RankDetail3[index].al.name}</span>
											</Link>
											<br />
										</div>)
																			
									})
								}
							</Router>
							</div>
						</div>	
					</div>	
					
					<div className='rankBox'>
						<div className='rankInBox'>
							<div className='rankImg'>
								<img src={rankDetail4.coverImgUrl} />
							</div>
							<div className='rankSong'>
							<Router>
								{
									
									RankDetail4.map((item,index) => {
										return (<div key={index}>
											<Link to={'/play/' + item.id}>
											<span>{(index+1)}.{RankDetail4[index].al.name}</span>
											</Link>
											<br />
										</div>)
																			
									})
								}
							</Router>
							</div>
						</div>	
					</div>	
					
				</div>
		</div>)
	}
}

export default Ranking;