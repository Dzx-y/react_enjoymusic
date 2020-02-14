import React from 'react';
import { fetchget } from '../../utils/myfetch'
import '../../style/allranking.css'
import { Link,HashRouter as Router} from "react-router-dom";

class AllRanking extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	async componentDidMount() {
		const songList = await fetchget("/api/personalized?limit=12")
		this.setState({ songLists: songList.result })
//		console.log(songList.result)
	}

	render() {
		
		return(<div className='allDJContent' style={{marginTop:"50px"}}>
			啦啦啦
		</div>)
	}
}

export default AllRanking;