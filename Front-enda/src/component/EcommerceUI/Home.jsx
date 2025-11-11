import React from 'react';
import ProductCard from '../EcommerceUI/ProductCard';

function Home(props) {

    return (
        <>
            <div className="image-cantainer">
                <img src="https://images.meesho.com/images/marketing/1760553615790.webp" alt="" />
                {/* <img src="" alt="" /> */}
            </div>
            <div className="main-cantainer">
                <div className="category">
                    <div className="child-category">
                        <img src="https://images.meesho.com/images/marketing/1744634654837.webp" alt="" />
                        <p>Ettenic Wear</p>
                    </div>
                    <div className="child-category">
                        <img src="https://images.meesho.com/images/marketing/1744634725496.webp" alt="" />
                        <p>Westurn Dresses</p>
                    </div>
                    <div className="child-category">
                        <img src="https://images.meesho.com/images/marketing/1744634780426.webp" alt="" />
                        <p>Menswear</p>
                    </div>
                    <div className="child-category">
                        <img src="https://images.meesho.com/images/marketing/1744634814643.webp" alt="" />
                        <p>Footwear</p>
                    </div>
                    <div className="child-category">
                        <img src="https://images.meesho.com/images/marketing/1744634835018.webp" alt="" />
                        <p>Home Decore</p>
                    </div>
                    <div className="child-category">
                        <img src="https://m.media-amazon.com/images/I/61UC31rVhQL._SL1500_.jpg" alt="" />
                        <p>Beauty</p>
                    </div>
                    <div className="child-category">
                        <img src="https://images.meesho.com/images/marketing/1744634909968.webp" alt="" />
                        <p>Accessrioes</p>
                    </div>
                    <div className="child-category">
                        <img src="https://images.meesho.com/images/marketing/1744634937295.webp" alt="" />
                        <p>Grocery</p>
                    </div>
                </div>
                <div className="main-image">
                    <div className="parent-image">
                        <img src="https://images.meesho.com/images/marketing/1744698265981.webp" alt="" />

                        <div className="mainChildImage">
                            <div className="child-image">
                                <img src="https://images.meesho.com/images/marketing/1744722796811.webp" alt="" />
                            </div>
                            <div className="child-image">
                                <img src="https://images.meesho.com/images/marketing/1744635113661.webp" alt="" />
                            </div>
                            <div className="child-image">
                                <img src="https://images.meesho.com/images/marketing/1744635139351.webp" alt="" />
                            </div>
                            <div className="child-image">
                                <img src="https://images.meesho.com/images/marketing/1744635189897.webp" alt="" />
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <ProductCard />
        </>
    );
}

export default Home;