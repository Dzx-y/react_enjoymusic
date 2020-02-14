import React from 'react';
import { fetchget } from '../../utils/myfetch'
import '../../style/allartist.css'
import { Link,HashRouter as Router} from "react-router-dom";

class AllArtist extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	async componentDidMount() {
		
	}

	render() {
		
		return(<div className='artistCateList'>
			<div className='artistCateNav'>
			
				<div className='suggest'>
					<p>推荐</p>
					<Router>
					<ul>
						<li><Link to='/HotArtistBox'>热门歌手</Link></li>
						<li>入驻歌手</li>
					</ul>
					</Router>
				</div>
				<div className='suggest'>
					<p>华语</p>
					<ul>
						<li>华语男歌手</li>
						<li>华语女歌手</li>
						<li>华语组合/乐队</li>
					</ul>
				</div>
				<div className='suggest'>
					<p>欧美</p>
					<ul>
						<li>欧美男歌手</li>
						<li>欧美女歌手</li>
						<li>欧美组合/乐队</li>
					</ul>
				</div>
				<div className='suggest'>
					<p>韩国</p>
					<ul>
						<li>韩国男歌手</li>
						<li>韩国女歌手</li>
						<li>韩国组合/乐队</li>
					</ul>
				</div>
				<div className='suggest'>
					<p>日本</p>
					<ul>
						<li>日本男歌手</li>
						<li>日本女歌手</li>
						<li>日本组合/乐队</li>
					</ul>
				</div>
			</div>
			
			<div className='artistCateCon'>
				<div className='artistCateConBox'>
					<div></div>
				</div>
			</div>
		</div>)
	}
}

export default AllArtist;