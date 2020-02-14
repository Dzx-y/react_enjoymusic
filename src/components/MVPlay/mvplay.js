import React from 'react';
import { fetchget } from '../../utils/myfetch'
//import '../../style/allsonglist.css'
import { Link,HashRouter as Router} from "react-router-dom";
import { Pagination } from 'antd';

class MVPlay extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			 current: 3,
		}
	}

	async componentDidMount() {
//		const songPlay = await fetchget("/api/song/url?id=" + this.props.match.params.id)
//		this.setState({ songPlays: songPlay.data[0].url })
	}
	
	
	onChange = page => {
	    console.log(page);
	    this.setState({
	      current: page,
	    });
	  };

	render() {
		return(<div className='zzz' style={{marginTop:'50px'}}>
			<Pagination current={this.state.current} onChange={this.onChange} total={50} />
		</div>)
	}
}

export default MVPlay;