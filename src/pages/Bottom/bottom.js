import React from 'react';
import { fetchget } from '../../utils/myfetch'
import '../../style/bottom.css'
import { Link,HashRouter as Router} from "react-router-dom";

class Bottom extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	async componentDidMount() {
//		const songPlay = await fetchget("/api/song/url?id=" + this.props.match.params.id)
//		this.setState({ songPlays: songPlay.data[0].url })
	}


	render() {
		return(<div className='bottomPlayCon'>
			<div className='choiceIcon'>
				<div className='prev'><img src={require('./images/prev.png')} /></div>
				<div className='play-stop'><img src={require('./images/stop.png')} /></div>
				<div className='next'><img src={require('./images/next.png')} /></div>
			</div>
			<div className='bottom-Img'><img /></div>
			<div className='bottom-info'>
				<div className='bottom-Name'>黄金时代黑风洞if讲的覅奇偶奥斯地方和缴费单号手打撒多</div>
				<div className='bottom-Load'>
					<div className='bottom-Line'></div>
					<div className='bottom-Time'>00:00/00:00</div>
				</div>
			</div>
		</div>)
	}
}

export default Bottom;