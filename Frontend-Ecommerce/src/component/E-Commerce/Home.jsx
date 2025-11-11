import React from 'react';
// import ProductCard from '../E-Commerce/ProductPage';
import ProductPage from '../E-Commerce/ProductPage';

function Home(props) {

    return (
        <>
            <div className="image-cantainer">
             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/af_pc_2x._CB792409181_.jpg" alt="" />
            </div>
            <div className="main-cantainer">
                <div className="category">
                    <div className="child-category">
                    
                        <img src="https://m.media-amazon.com/images/I/7128FzthDGL._SX679_.jpg" alt="" />
                        <p>Ethenic Wear</p>
                    </div>
                    <div className="child-category">
                        <img src="https://m.media-amazon.com/images/I/61A+AsyfkZL._AC_UL480_FMwebp_QL65_.jpg" alt=""/>
                        <p>Western Dresses</p>
                    </div>
                    <div className="child-category">
                        <img src="https://m.media-amazon.com/images/I/71pDuS5NieL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
                        <p>Menswear</p>
                    </div>
                    <div className="child-category">
                        <img src="https://m.media-amazon.com/images/I/51QZrWts7CL._SY695_.jpg" alt="" />
                        <p>Footwear</p>
                    </div>
                    <div className="child-category">
                        <img src="https://m.media-amazon.com/images/I/61HfieAwnWL._SX679_.jpg" alt=""/>
                        <p>Home Decor</p>
                    </div>
                    <div className="child-category">
                        <img src="https://m.media-amazon.com/images/I/61UC31rVhQL._SL1500_.jpg" alt="" />
                        <p>Beauty</p>
                    </div>
                    <div className="child-category">
                        <img src="https://m.media-amazon.com/images/I/61s2JIoQLgL._SY625_.jpg" alt="" />
                        <p>Accessiroes</p>
                    </div>
                    <div className="child-category">
                        <img src="https://m.media-amazon.com/images/I/71RulpzhFhL._SL1500_.jpg" alt="" />
                        <p>Grocery</p>
                    </div>
                </div>
                <div className="main-image">
                    <div className="parent-image">
                    
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044815._CB551384116_.jpg" alt="" />

                        <div className="mainChildImage">
                            <div className="child-image">
                                {/* <img src="https://images.meesho.com/images/marketing/1744722796811.webp" alt="" /> */}
                            </div>
                            <div className="child-image">
                                {/* <img src="https://images.meesho.com/images/marketing/1744635113661.webp" alt="" /> */}
                            </div>
                            <div className="child-image">
                                {/* <img src="https://images.meesho.com/images/marketing/1744635139351.webp" alt="" /> */}
                            </div>
                            <div className="child-image">
                                {/* <img src="https://images.meesho.com/images/marketing/1744635189897.webp" alt="" /> */}
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <ProductPage />
        </>
    );
}

export default Home;