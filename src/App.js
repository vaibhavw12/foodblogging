import './App.css';
import React,{useState} from 'react';
import blogImg from './assets/Group 289.png'
import overLayImg from './assets/Vector 1.png'
import logoImg from './assets/Screenshot_669 1.png'
import aboutImg from './assets/girl (lp).png'
import Card from './components/Card';
import pic1 from './assets/pic1.png'
import pic2 from './assets/pic2.png'
import pic3 from './assets/pic3.png'
import pic4 from './assets/pic4.png'
import pic5 from './assets/pic5.png'
import pic6 from './assets/pic6.png'
import insta from './assets/insta.png'
import facebook from './assets/facebook.png'
import twitter from './assets/twitter.png'

function App() {

  const cards1 = [
    { id : 1,
      cover : pic1,
      title : 'Grilled  Tomatoes at Home'
    },
    { id : 2,
      cover : pic2,
      title : 'Snacks for Travel'
    },
    { id : 3,
      cover : pic3,
      title : 'Post-workout Recipes'
    }
  ]

  const cards2 = [
    { id : 4,
      cover : pic4,
      title : 'How To Grill Corn'
    },
    { id : 5,
      cover : pic5,
      title : 'Crunchwrap Supreme'
    },
    { id : 6,
      cover : pic6,
      title : 'Broccoli Cheese Soup'
    },
  ]

  const [arr1, setArr1] = useState('block');
  const [arr2, setArr2] = useState('none');
  const [page, setPage] = useState(1)
  const showNext = () => {
      setArr1('none');
      setArr2('block')
      setPage(2)
  };

  const showPrev = () => {
      setArr1('block');
      setArr2('none')
      setPage(1)
  };
  return (
    <div className="App">
        <div className="app-wrapper">
            <div className="intro-wrapper">
                <div className="left-intro-wrapper">
                  <div className="leftInner-intro-wrapper">
                      <img className="logo" src={logoImg} alt="logo img"></img>
                      <div className="intro-wrapper-text">
                      Discover the <br></br>
                      <span style={{color : 'rgba(226, 55, 68, 1)'}}>Best</span> Food<br></br> 
                      and Drinks
                      </div>
                      <p className="tagline">
                      Naturally made Healthcare Products for the <br>
                      </br> better care & support of your body.
                      </p>
                      <button className="leftInner-intro-btn">Explore Now!</button>
                  </div>
                </div>
                <div className="right-intro-wrapper">
                      <img className="right-intro-wrapper-img" src={blogImg} alt="blog img"></img>
                      <div>
                        <img className="right-intro-wrapper-overlayimg" src={overLayImg} alt="overlay img"></img>
                        <button className="btn-overlay">Get In Touch</button>
                      </div>
                </div>
            </div> 
            <div className="about-wrapper">
                <div className="about-sec">
                    <div>
                        <img className='about-img' src={aboutImg} alt='about img'></img>
                    </div>
                    <div className="about-right-sec">
                      <h1 style={{color : 'rgba(14, 35, 104, 1)'}}>About Us</h1>
                      <p className='about-text'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type specimen book. t
                      has survived not only five centuries.
                      </p>
                      <button className="about-sec-btn">Read More</button>
                    </div>
                </div>
            </div>
            <div className="article-wrapper">
              <div>
                <h1 className='arcicle-title'>Latest Articles</h1>
              </div>
              <div className='card-wrapper'>
                {cards1.map((item, index)=>(
                    <div style={{display : arr1}}>
                        <Card key={index} item={item}></Card>
                    </div>
                ))}
                {cards2.map((item, index)=>(
                    <div style={{display : arr2}}>
                        <Card key={index} item={item}></Card>
                    </div>
                ))}
              </div>
              <div className='prev-next-btn'>
                  <button disabled={page === 1 ? true : false} className="but" onClick={showPrev}>  {'<'} </button>
                  {page}/2
                  <button disabled={page === 2 ? true : false} className="but" onClick={showNext}>  {'>'} </button>
              </div>
            </div>
            <div className="footer-wrapper">
              <div className='inner-footerwhole'>
                <div className='logo-app-foot foot-sec'>
                <img className="logo logo-app-footer" src={logoImg} alt="logo img"></img>
                </div>
                <div className='inner-footer-wrapper'>
                    <div className='contactUs-sec foot-sec'>
                        <h5 className='footer-sec'>Contact Us</h5>
                        <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
                        <p>example2020@gmail.com</p>
                        <p>(904) 443-0343</p>
                    </div>
                    <div className='more-sec foot-sec'>
                        <h5 className='footer-sec'>More</h5>
                        <p>About Us</p>
                        <p>Products</p>
                        <p>Careers</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='socialLinks-sec foot-sec'>
                        <h5 className='footer-sec footer-secc'>Social Links</h5>
                        <div className='socail-foot'>
                          <div className='social-logo'>
                            <img className='social' src={insta} alt='insta'></img>
                            <img className='social' src={twitter} alt='insta'></img>
                            <img className='social' src={facebook} alt='insta'></img>
                          </div>
                          <div className='copywrite'>
                            © 2022 Food Truck Example
                          </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
        <div className='tab'>website is still in progress for tablet users</div>
    </div>
  );
}

export default App;
