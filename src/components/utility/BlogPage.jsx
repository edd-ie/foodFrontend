import React from 'react';
import './blogPage.css';
import logo from '../../assets/logo1.png';
import truck from '../../assets/truck.jpg';

export default function Blog() {
    return (
        <div className="blog">
            <div className="blogHeader">
                <img src={logo} alt="logo" className="blogLogo" />
                <h1 className="blogHead">The connoisseur</h1>
                <div className="blogProf"></div>
            </div>

            <div id="page">
                <div className="text">
                    <h1>The tale of the chef with no taste</h1>
                </div>
                <div className="imge">
                <img src={truck} alt="" />
                </div>
                <div className="prgh">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante eget justo tristique interdum. Nulla facilisi. Donec euismod, justo id tincidunt placerat, tellus nunc tincidunt enim, sed cursus nisl leo in ex.
                    <br></br> Fusce ut malesuada eros. Quisque vel elementum mi. Praesent ac consectetur velit. In lacinia fermentum justo, et mattis ligula finibus a. Cras nec tellus vel libero congue congue nec vitae ex. Maecenas viverra urna eget tortor volutpat, vel ultrices dui suscipit. Integer eget ipsum vitae velit lacinia venenatis. Vivamus nec nisi efficitur, convallis mi eget, bibendum nulla.</p>
                </div>
                <div className="imge">
                <img src={truck} alt="" />
                </div>
                <div className="prgh">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante eget justo tristique interdum. Nulla facilisi. Donec euismod, justo id tincidunt placerat, tellus nunc tincidunt enim, sed cursus nisl leo in ex.
                    Fusce ut malesuada eros. Quisque vel elementum mi. Praesent ac consectetur velit. In lacinia fermentum justo, et mattis ligula finibus a. Cras nec tellus vel libero congue congue nec vitae ex. Maecenas viverra urna eget tortor volutpat, vel ultrices dui suscipit. Integer eget ipsum vitae velit lacinia venenatis. Vivamus nec nisi efficitur, convallis mi eget, bibendum nulla.</p>
                </div>

            </div>
        </div>
    );
}
