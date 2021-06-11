import React, {Component} from 'react';
import Navigation from './Navigation';
import PieChart from './PieChart';
import SplineChart from './SplineChart';

import './mainpage.css';

class MainPage extends Component{

    render(){
        return(
            <div className = 'mainpage-container'>
                <Navigation />
                <div className="pie-chart">     
                <PieChart/>
                </div> 
                <div className="spline-chart">
                    <SplineChart/>
                </div>
            </div>


        );
    }

}

export default MainPage;