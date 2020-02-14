import React,{ lazy, Suspense } from 'react'
import { HashRouter,Switch, Route,Link, Redirect } from 'react-router-dom'
import asyncComponent from '../lazy';


const Discover=asyncComponent(()=>import('../pages/DiscoverCon/discover'));
const MyMusic=asyncComponent(()=>import('../pages/MyMusic/mymusic'));
const Mall=asyncComponent(()=>import('../pages/Mall/mall'));
const Discuss=asyncComponent(()=>import('../pages/Discuss/discuss'));
const Download=asyncComponent(()=>import('../pages/Download/download'));


const AllSongList=asyncComponent(()=>import('../components/HotSongList/allsonglist'));
const AllDJ=asyncComponent(()=>import('../components/HotDJ/alldj'));
const AllDisc=asyncComponent(()=>import('../components/NewDisc/alldisc'));
const AllRanking=asyncComponent(()=>import('../components/Ranking/allranking'));
const NextSongList=asyncComponent(()=>import('../components/HotSongList/nextsonglist'));
const Play=asyncComponent(()=>import('../components/Play/play'));



const HotArtistBox=asyncComponent(()=>import('../components/TopArtist/ArtistCate/hotartistbox'));
const EnterArtist=asyncComponent(()=>import('../components/TopArtist/ArtistCate/enterartist'));
const CnMaleArtist=asyncComponent(()=>import('../components/TopArtist/ArtistCate/cnmaleartist'));
const CnFemaleArtist=asyncComponent(()=>import('../components/TopArtist/ArtistCate/cnfemaleartist'));
const CnGroup=asyncComponent(()=>import('../components/TopArtist/ArtistCate/cngroup'));
const EurMaleArtist=asyncComponent(()=>import('../components/TopArtist/ArtistCate/eurmaleartist'));
const EurFemaleArtist=asyncComponent(()=>import('../components/TopArtist/ArtistCate/eurfemaleartist'));
const EurGroup=asyncComponent(()=>import('../components/TopArtist/ArtistCate/eurgroup'));
const KorMaleArtist=asyncComponent(()=>import('../components/TopArtist/ArtistCate/kormaleartist'));
const KorFemaleArtist=asyncComponent(()=>import('../components/TopArtist/ArtistCate/korfemaleartist'));
const KorGroup=asyncComponent(()=>import('../components/TopArtist/ArtistCate/korgroup'));
const JapMaleArtist=asyncComponent(()=>import('../components/TopArtist/ArtistCate/japmaleartist'));
const JapFemaleArtist=asyncComponent(()=>import('../components/TopArtist/ArtistCate/japfemaleartist'));
const JapGroup=asyncComponent(()=>import('../components/TopArtist/ArtistCate/japgroup'));


const ArtistInfo=asyncComponent(()=>import('../components/TopArtist/artistinfo'));

const SearchBar=asyncComponent(()=>import('../pages/Header/searchbar'));
const NextDisc=asyncComponent(()=>import('../components/NewDisc/nextdisc'));
const MVPlay=asyncComponent(()=>import('../components/MVPlay/mvplay'));





function HeaderRouter() {
    return (<HashRouter>
    	<Suspense fallback={<div>Loading...</div>}>
    	<Switch>
	        <Route path='/' exact component={Discover}></Route>
	        <Route path='/mymusic' component={MyMusic}></Route>
	        <Route path='/mall' component={Mall}></Route>
	        <Route path='/discuss' component={Discuss}></Route>
	        <Route path='/download' component={Download}></Route>
	        <Route path='/allsonglist' component={AllSongList}></Route>
	        <Route path='/alldj' component={AllDJ}></Route>
	        <Route path='/alldisc' component={AllDisc}></Route>
	        <Route path='/allranking' component={AllRanking}></Route>
	        <Route path='/nextsonglist/:id' component={NextSongList}></Route>
	        <Route path='/play/:id' component={Play}></Route>
	        
	        
	        <Route path='/hotartistbox' exact component={HotArtistBox}></Route>
	        <Route path='/enterartist' exact component={EnterArtist}></Route>
	        <Route path='/cnmaleartist' exact component={CnMaleArtist}></Route>
	        <Route path='/cnfemaleartist' component={CnFemaleArtist}></Route>
	        <Route path='/cngroup' exact component={CnGroup}></Route>
	        <Route path='/eurmaleartist' exact component={EurMaleArtist}></Route>
	        <Route path='/eurfemaleartist' exact component={EurFemaleArtist}></Route>
	        <Route path='/eurgroup' exact component={EurGroup}></Route>
	        <Route path='/kormaleartist' exact component={KorMaleArtist}></Route>
	        <Route path='/korfemaleartist' exact component={KorFemaleArtist}></Route>
	        <Route path='/korgroup' exact component={KorGroup}></Route>
	        <Route path='/japmaleartist' exact component={JapMaleArtist}></Route>
	        <Route path='/japfemaleartist' exact component={JapFemaleArtist}></Route>
	        <Route path='/japgroup' exact component={JapGroup}></Route>
	        
	        <Route path='/artistinfo/:id' component={ArtistInfo}></Route>
	        <Route path='/searchbar/:keyword' component={SearchBar}></Route>
	        <Route path='/nextdisc/:id' component={NextDisc}></Route>
	        <Route path='/mvplay' component={MVPlay}></Route>
	        <Redirect to="/" ></Redirect>
	    </Switch>
	    </Suspense>
    </HashRouter>)
}

export default HeaderRouter;