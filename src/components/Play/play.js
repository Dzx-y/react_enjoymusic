import React from 'react';
import { fetchget } from '../../utils/myfetch'
import '../../style/play.css'
import { Link,HashRouter as Router} from "react-router-dom";
import startImg from './images/start.png'
import stopImg from './images/stop.png'

class Play extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			songPlays:''
		}
	}

	async componentDidMount() {
		const songPlay = await fetchget("/api/song/url?id=" + this.props.match.params.id)
		this.setState({ songPlays: songPlay.data[0].url })
	}

	clicked = () => {
		const controlBtn = document.getElementById('controls');
		if(controlBtn.src = stopImg){
			this.refs.myAudio.play();	
			controlBtn.src = startImg;
		}
		else{
			this.refs.myAudio.pause();	
			controlBtn.src = stopImg;
		}
	}


	render() {
		const songPlayDetail = this.state.songPlays;
		return(<div className='zzz' style={{marginTop:'50px'}}>
			<div>						
				<audio src={songPlayDetail} ref="myAudio"></audio>
				<div onClick={()=>this.clicked()}><img src={stopImg} id='controls' /></div>
			</div>	
		</div>)
	}
}

export default Play;