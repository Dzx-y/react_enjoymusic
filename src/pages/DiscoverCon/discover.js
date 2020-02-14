import React from 'react';
import Banner from '../../components/Banner/banner'
import HotSongList from '../../components/HotSongList/hotsonglist'
import NewDisc from '../../components/NewDisc/newdisc'
import Ranking from '../../components/Ranking/ranking'
import TopArtist from '../../components/TopArtist/topartist'
import HotDJ from '../../components/HotDJ/hotdj'
import '../../style/discover.css'


class Discover extends React.Component{
	constructor(props) {
        super(props);

        this.state = {
            
        }
    }
	
	
	render(){
		return (<div>
			<Banner></Banner>
			<hr />
			<div className='content'>
				<div className='songContent'>
					<div className='songList'>
						<HotSongList></HotSongList>
						<NewDisc></NewDisc>
						<Ranking></Ranking>
					</div>
					<div className='extraList'>
						<TopArtist></TopArtist>
						<HotDJ></HotDJ>
					</div>
				</div>
			</div>			
		</div>)
	}
}

export default Discover;