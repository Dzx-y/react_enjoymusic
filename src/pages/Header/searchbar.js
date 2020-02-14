import React from 'react';
import { Link,HashRouter as Router} from "react-router-dom";
import { fetchget } from '../../utils/myfetch'
import '../../style/searchbar.css';


class SearchBar extends React.Component{
	constructor(props) {
        super(props);

        this.state = {
        	songSearchArt:[],
        	songSearchAlb:[],
        	songSearchMv:[]
        }
    }
	
	
	async componentDidMount() {
		const songSearchRes = await fetchget("/api/search/multimatch?keywords=" + this.props.match.params.keyword)
		this.setState({ songSearchArt: songSearchRes.result.artist })
		this.setState({ songSearchAlb: songSearchRes.result.album })
		this.setState({ songSearchMv: songSearchRes.result.mv })
	}
	
	
	handleSubmit = async() => {
//		const songSearchBtn = await fetchget("/api/search?keywords=" + )
//		this.setState({ songSearchBtns: songSearchBtn })
//		console.log(songSearchBtn)
	}
	
	
//	changeData = async(e) => {//input输入什么，就监听这个方法，然后再修改state，然后返回到视图
//     if(e.target.value){
//     		const songSearch = await fetchget("/api/search?keywords=" + e.target.value)
//			this.setState({ songSearchs: songSearch.result.songs });
//			document.getElementById('searchBox').style.display='block';
//     }
//     else{
//     		document.getElementById('searchBox').style.display='none';
//     }
//  
//  }
	
	
	render() {
		const artDetail = this.state.songSearchArt;
		const albDetail = this.state.songSearchAlb;
		const mvDetail = this.state.songSearchMv;
        return (<div className="searchCon">
        	<div className='searchInCon'>
        		<div className='searchInConBoxs'>
        			<div className='searchText'>
        				<input type='text' defaultValue={this.props.match.params.keyword} /><button>搜索</button>
        			</div>
        			<div className='sarchResult'>
        				<div className='artBox'>
        				<Router>
        				{
        					artDetail.map((item,index) => {
        						return (<div key={index}>
        							<Link to={'/artistinfo/' + item.id } >
        							<img src={artDetail[index].picUrl} />{artDetail[index].name}
        							</Link>
        						</div>)
        					})
        				}
        				</Router>	
        				</div>
        				<div className='albBox'>
        				<Router>
        				{
        					albDetail.map((item,index) => {
        						return (<div key={index}>
        							<Link to={'/nextdisc/' + item.id } >
        							<img src={albDetail[index].picUrl} />{albDetail[index].name}
        							</Link>
        						</div>)
        					})
        				}
        				</Router>
        				</div>
        				<div className='mvBox'>
        				
        				</div>
        			</div>
        		</div>
        	</div>
		</div>)
    }
}

export default SearchBar;