import React from 'react';
import { fetchget } from '../../../utils/myfetch'
import '../../../style/allartist.css'
import { Link,HashRouter as Router} from "react-router-dom";

class KorFemaleArtist extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			korFemaleArtists:[]
		}
	}

	async componentDidMount() {
		const korFemaleArtist = await fetchget("/api/artist/list?cat=7002")
		this.setState({ korFemaleArtists: korFemaleArtist.artists })
	}

	render() {	
		const hotArtistBoxDetail = this.state.korFemaleArtists;
		return(<div className='artistCateList'>	
			<div className='artistCateCon'>
				
				<div className='artistCateNav'>			
					<div className='suggest'>
						<p>推荐</p>
						<Router>
						<ul>
							<li><Link to='/hotartistbox'>热门歌手</Link></li>
							<li><Link to='/enterartist'>入驻歌手</Link></li>
						</ul>
						</Router>
					</div>
					<div className='suggest'>
						<p>华语</p>
						<Router>
						<ul>
							<li><Link to='/cnmaleartist'>华语男歌手</Link></li>
							<li><Link to='/cnfemaleartist'>华语女歌手</Link></li>
							<li><Link to='/cngroup'>华语组合/乐队</Link></li>
						</ul>
						</Router>
					</div>
					<div className='suggest'>
						<p>欧美</p>
						<Router>
						<ul>
							<li><Link to='/eurmaleartist'>欧美男歌手</Link></li>
							<li><Link to='/eurfemaleartist'>欧美女歌手</Link></li>
							<li><Link to='/eurgroup'>欧美组合/乐队</Link></li>
						</ul>
						</Router>
					</div>
					<div className='suggest'>
						<p>韩国</p>
						<Router>
						<ul>
							<li><Link to='/kormaleartist'>韩国男歌手</Link></li>
							<li><Link to='/korfemaleartist' style={{color:"#c62f2f"}}>韩国女歌手</Link></li>
							<li><Link to='/korgroup'>韩国组合/乐队</Link></li>
						</ul>
						</Router>
					</div>
					<div className='suggest'>
						<p>日本</p>
						<Router>
						<ul>
							<li><Link to='/japmaleartist'>日本男歌手</Link></li>
							<li><Link to='/japfemaleartist'>日本女歌手</Link></li>
							<li><Link to='/japgroup'>日本组合/乐队</Link></li>
						</ul>
						</Router>
					</div>
				</div>
				
				
				<div className='artistCateConBox'>
					
						<div className='cateBoxTitle'>韩国女歌手</div>
						<div className='cateInlineBox'>
						<Router>
						{
							hotArtistBoxDetail.map((item,index) => {
								return (<div className='everyListBox' key={index}> 
								<Link to={'/artistinfo/' + item.id}>
									<div className='everyListBoxImg'><img src={hotArtistBoxDetail[index].picUrl} /></div>
									<div className='everyListBoxName'>{hotArtistBoxDetail[index].name}</div>
								</Link>
								</div>)
							})
						}
						</Router>	
						</div>
					
				</div>
			</div>
		</div>)
	}
}

export default KorFemaleArtist;