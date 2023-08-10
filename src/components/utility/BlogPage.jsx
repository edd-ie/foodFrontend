import React from 'react';
import './blogPage.css';
import logo from '../../assets/logo1.png';
import blog from '../../assets/blog.jpg';
import blog1 from '../../assets/blog1.jpg';

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
                    <h1>The tale of the chef with no sense of taste</h1>
                </div>
                <div className="imge">
                <img src={blog} alt="" />
                </div>
                <div className="prgh">
                    <p>"I lived my whole life in the kitchen," he says. "Not only that, but it's the passion, it's the love for cooking and food. It's dictated my entire life — every aspect of it. So, in some ways, the thought of not being able to do that anymore radically affects your life."
                    <br></br> Achatz found a clinical trial at the University of Chicago that agreed to treat him with radiation and chemotherapy. The radiation treatments burned his tongue, shed the lining of his esophagus — and completely destroyed his taste buds.</p>
                </div>
                <div className="imge">
                <img src={blog1} alt="" />
                </div>
                <div className="prgh">
                    <p>"It was very strange to not be able to discern any flavor at all," he says. "It's funny because, clearly, you know you have to eat to live. But even knowing that, for me, there was no reason to eat. I had no interest in eating whatsoever. I would put something in my mouth — say a vanilla milkshake — and it tasted like nothing."
                    Achatz's cancer is now in remission. After his treatment ended, his ability to taste came back — but slowly. His perception of different flavor combinations — sweet, salty, bitter — came back one flavor at a time.</p>
                </div>

            </div>
        </div>
    );
}
