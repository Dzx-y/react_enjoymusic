import React from 'react';
import { fetchget } from '../../utils/myfetch'
import '../../style/hotdj.css'
import { Link,HashRouter as Router} from "react-router-dom";

class HotDJ extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hotDJLists:[]
		};
		
		
	}

	async componentDidMount() {
		const hotDJList = await fetchget("/api/dj/toplist/popular?limit=6")
//		console.log(hotDJList)
		this.setState({ hotDJLists: hotDJList.toplist})
	}
	
	
	
	render() {
		const hotDJListDetail = this.state.hotDJLists;
		return(<div className='hotDJListCon'>
				<div className='hotDJListTitle'>				
					<span className='listTitle'>热门主播合集</span>
					<Router>
					<span className='hotLoadMore'><Link to='/alldj'>更多</Link><img src={require('../images/right.png')} /></span>
					</Router>
				</div>
				<div className='DJlistCon'>
				{
					hotDJListDetail.map((item,index) => {
						return (<div key={index}>
							<div className='djList'>
								<div className='djImg'><img src={hotDJListDetail[index].picUrl} /></div>
								<div className='djName'>
									<p className='djTltleName'>{hotDJListDetail[index].name}</p>
									<p className='djTltleNickname'>{hotDJListDetail[index].dj.nickname}</p>									
								</div>
							</div>
						</div>)
					})
				}
					
				</div>
		</div>)
	}
}

export default HotDJ;