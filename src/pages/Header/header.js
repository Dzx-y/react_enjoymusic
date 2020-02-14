import React from 'react';
import { Link,HashRouter as Router} from "react-router-dom";
import { fetchget } from '../../utils/myfetch'
import '../../style/header.css';


class Header extends React.Component{
	constructor(props) {
        super(props);

        this.state = {
        	searchKeywords:'',
           songSearchs:[],
           songSearchBtns:[],
           searchContent:''
        }
    }
	
	
	async componentDidMount() {
		const searchKeyword = await fetchget("/api/search/default")
		this.setState({ searchKeywords: searchKeyword.data.realkeyword })
	}
	
	
	handleSubmit = async() => {
		document.getElementById('searchBox').style.display='none';
	}
	
	
	changeData = async(e) => {//input输入什么，就监听这个方法，然后再修改state，然后返回到视图
       if(e.target.value){
       		this.setState({ searchContent: e.target.value });
       		const songSearch = await fetchget("/api/search?keywords=" + e.target.value);
       		const songResult = songSearch.result.songs;
       		if(songResult){
       			this.setState({ songSearchs: songSearch.result.songs });
       		}
       		
			
			document.getElementById('searchBox').style.display='block';
       }
       else{
//     		this.setState({ songSearchs: this.state.searchKeywords });
       		document.getElementById('searchBox').style.display='none';
       }
    
    }
	
	
	render() {
		
        return (<div className="header">
        	<div className="headerCon">
        		<div className="logoCon">
	        		<div className="logo">
						<img src={require('./images/Headphone.png')} className="logoImg"/>
						<span className="logoTitle">天籁之音</span>
					</div>
	        	</div>
	        	<Router>
		        	<div className="navbar">
		        		<ul>
		        			<li style={{backgroundColor:'white'}}><Link to='/' style={{color:'black',fontWeight:'700'}}>发现音乐</Link></li>
		        			<li><Link to='/mymusic'>我的音乐</Link></li>
		        			<li><Link to='/mall'>商城</Link></li>
		        			<li><Link to='/discuss'>社区</Link></li>
		        			<li><Link to='/download'>客户端下载</Link></li>
		        		</ul>
		        	</div>
	        	</Router>
        		<div className="search">
        			<input type="text" ref="input" defaultValue={this.state.searchKeywords} onChange={(e)=>this.changeData(e)} />
        		</div>
        		<Router>
        		<Link to={'/searchbar/' +this.state.searchContent}>
        		<div className="searchIcon"><img src={require('./images/search.png')} /></div>
        		</Link>
        		</Router>
        		<div className="headImg"></div>
        		<a className="login">登录/注册</a>
        	</div>
        	
        	<div id='searchBox'>
        		{this.renderInfo()}	
        	</div>
		</div>)
    }
	
	renderInfo = () => {
		if(this.state.songSearchs){
			return (<div className='searchBoxSongs'>
        			<p>单曲</p>
        			<div className='inLineSearchBox'>
        			<Router>
        			{
        				this.state.songSearchs.map((item,index) => {
        					return (<div key={index}>
        						<Link to={'/play/' + item.id}>
        						<span>{this.state.songSearchs[index].name}</span>
        						</Link>
        						</div>)
        				})
        			}
        			</Router>	
        			</div>
        		</div>)
		}
		else{
			return (<div className='searchBoxSongs'>
				<div className='sadImg'>
					<img src={require('./images/sad.jpg')} />
					<br />
					<p>暂无搜索结果......</p>
				</div>
			</div>)
		}
	}
}

export default Header;