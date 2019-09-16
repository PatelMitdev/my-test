import React from 'react';
import { Checkbox, Icon } from 'antd';
import './divistion.css';


const ListElement =({stateData}) => {
	return(
		<ul className="list-items">
		{stateData.map((state)=>{
			return(
				<li key={state.state}>
				<Checkbox>{state.state}</Checkbox>
			</li>)
		})}
		</ul>
		)
}

const Divistion = ({banners, divisions}) => {
	return (
		<div className="division-container">
		<div className="header">
		<div className="icon--image">
		  <Icon type="caret-down" />
		  <h3>Banners && Divistions</h3>
		  <sapn className="banners">20 Banners</sapn>
		  <span className="banners">13 Banners</span>
		  </div>
		</div>
		<div className="krogger-container">
		<div className="icon--image">
		<Icon type="caret-down" />
		 <h3><Checkbox></Checkbox><span>Kroger</span></h3>
		 </div>
		<div className="checkbox-container">
		
		{banners.map((banner, ind)=>{
			return(
				<ListElement key={ind} stateData={banner.states}/>
				)
		})
	  }	
		</div>
</div>

<div className="krogger-container">
<div className="icon--image">
<Icon type="caret-down" />
 <h3><Checkbox></Checkbox>Food4less</h3>
 </div>
		<div className="checkbox-container">
		
		
			{divisions.map((division, ind)=>{
			return(
				<ListElement key={ind} stateData={division.states}/>
				)
		})
	  }
	  </div>
	  </div>
		</div>
		)

}

export default Divistion;
