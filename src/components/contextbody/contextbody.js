import { Image} from 'antd';
import {Row, Col} from 'antd';
import './contextbody.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
import SimpleAccordion from "../acordian/acordian";

function ContextBody() {
  SwiperCore.use([Autoplay])
  return (
      <div className="container-body">
        <div className='container-body1'>
          <Row>
            <Col span={10} offset={9}>
              <div className="timer-text">
                <Row>
                  <Col span={4}>
                    <h1>04</h1>
                    <h2>Days</h2>
                  </Col>
                  <Col span={4} offset={1}>
                    <h1>15</h1>
                    <h2>Hours</h2>
                  </Col>
                  <Col span={4} offset={1}>
                    <h1>36</h1>
                    <h2>Minutes</h2>
                  </Col>
                </Row>

              </div>

            </Col>
          </Row>
          <Row>
            <Col span={5} offset={9}>
              <div className="button">
                <h1>JOIN WHITELIST</h1>
              </div>
            </Col>
          </Row>
        </div>
        <div className="container-body2">
          <Row>
            <Col span={10} offset={2}>
              <div className="body2-text">
                <h1>WELCOME TO TOUGH GUYS CLUB</h1>
                <h2>Tough Guys Club is a 10,000 unique Non-fungible tokens which were developed on ETH blockchain from
                  300+ different traits</h2>
                <h2>Our community is one of the fastest growing in the crypto space, the key to success for us is to
                  provide ability for every holder get enormous profit and access to be a decision maker in the club
                  activity.</h2>
                <h2>Join our club today.</h2>
                <h1>ICONS</h1>
              </div>
            </Col>
            <Col span={8} offset={3}>
              <Image
                  style={{height: 400}}
                  src={require('../../images/homepage_art_1.gif')}
              />
            </Col>
          </Row>
          <h1 style={{color: "white", fontWeight: "bold", fontSize: 40, marginLeft: 50}}>Why us?</h1>
          <Row>
            <Col span={11} offset={2}>
              <Row>
                <div className="cards-image">
                  <Image
                      src={require('../../images/icon7.png')}
                  />
                </div>
                <Col span={18}>
                  <div className="cards">
                    <h1>Club Based</h1>
                    <h2>Every Tough Guy NFT holder will become a real decision maker in future of the club's global
                      strategies</h2>
                  </div>
                </Col>
              </Row>
              <br/>
              <Row>
                <div className="cards-image">
                  <Image
                      src={require('../../images/icon7.png')}
                  />
                </div>
                <Col span={18}>
                  <div className="cards">
                    <h1>Club Based</h1>
                    <h2>Every Tough Guy NFT holder will become a real decision maker in future of the club's global
                      strategies</h2>
                  </div>
                </Col>
              </Row>
              <br/>
              <Row>
                <div className="cards-image">
                  <Image
                      src={require('../../images/icon7.png')}
                  />
                </div>
                <Col span={18}>
                  <div className="cards">
                    <h1>Club Based</h1>
                    <h2>Every Tough Guy NFT holder will become a real decision maker in future of the club's global
                      strategies</h2>
                  </div>
                </Col>
              </Row>

            </Col>
            <Col span={10} offset={1}>
              <Row>
                <div className="cards-image">
                  <Image
                      src={require('../../images/icon7.png')}
                  />
                </div>
                <Col span={18}>
                  <div className="cards">
                    <h1>Club Based</h1>
                    <h2>Every Tough Guy NFT holder will become a real decision maker in future of the club's global
                      strategies</h2>
                  </div>
                </Col>
              </Row>
              <br/>
              <Row>
                <div className="cards-image">
                  <Image
                      src={require('../../images/icon7.png')}
                  />
                </div>
                <Col span={18}>
                  <div className="cards">
                    <h1>Club Based</h1>
                    <h2>Every Tough Guy NFT holder will become a real decision maker in future of the club's global
                      strategies</h2>
                  </div>
                </Col>
              </Row>
              <br/>
              <Row>
                <div className="cards-image">
                  <Image
                      src={require('../../images/icon7.png')}
                  />
                </div>
                <Col span={18}>
                  <div className="cards">
                    <h1>Club Based</h1>
                    <h2>Every Tough Guy NFT holder will become a real decision maker in future of the club's global
                      strategies</h2>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col span={24}>
              <Swiper
                  modules={{Autoplay}}
                  autoplay={{delay:1500}}
                  spaceBetween={50}
                  slidesPerView={6}
                  loop={true}
              >
                <SwiperSlide><Image
                    src={require('../../images/sliderart3.png')}
                /></SwiperSlide>
                <SwiperSlide><Image
                    src={require('../../images/sliderart8.png')}
                /></SwiperSlide>
                <SwiperSlide><Image
                    src={require('../../images/sliderart11.png')}
                /></SwiperSlide>
                <SwiperSlide><Image
                    src={require('../../images/homepage_art_1.gif')}
                /></SwiperSlide>
                <SwiperSlide><Image
                    src={require('../../images/homepage_art_1.gif')}
                /></SwiperSlide>
                <SwiperSlide><Image
                    src={require('../../images/homepage_art_1.gif')}
                /></SwiperSlide>
                <SwiperSlide><Image
                    src={require('../../images/homepage_art_1.gif')}
                /></SwiperSlide>
              </Swiper>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 style={{fontWeight:"bold",color:"white",fontSize:50,marginLeft:50,marginTop:50}}>SALES MILESTONES</h1>
            </Col>
          </Row>
          <Row>
            <Col span={4} offset={1}>
              <div className="second-boxes">
                <h1>0 %</h1>
              </div>
            </Col>
            <Col span={14}>
              <div className="second-box2">
              <h1>WELCOME TO THE CLUB</h1>
                <h2>Once we reach 5,000 Tough Guys in our discord server <br/>we will announce dates for "Pre" and "Public" sales</h2>
              </div>
              </Col>
            <Col span={5}>
              <div className="imagelap">
                <Image
                    src={require('../../images/icon2.png')}
                />
              </div>
            </Col>
          </Row>
          <div className="veh"/>
          <Row>
            <Col span={4} offset={1}>
              <div className="second-boxes">
                <h1>0 %</h1>
              </div>
            </Col>
            <Col span={14}>
              <div className="second-box2">
                <h1>WELCOME TO THE CLUB</h1>
                <h2>Once we reach 5,000 Tough Guys in our discord server <br/>we will announce dates for "Pre" and "Public" sales</h2>
              </div>
            </Col>
            <Col span={5}>
              <div className="imagelap">
                <Image
                    src={require('../../images/icon2.png')}
                />
              </div>
            </Col>
          </Row>
          <div className="veh"/>
          <Row>
            <Col span={4} offset={1}>
              <div className="second-boxes">
                <h1>0 %</h1>
              </div>
            </Col>
            <Col span={14}>
              <div className="second-box2">
                <h1>WELCOME TO THE CLUB</h1>
                <h2>Once we reach 5,000 Tough Guys in our discord server <br/>we will announce dates for "Pre" and "Public" sales</h2>
              </div>
            </Col>
            <Col span={5}>
              <div className="imagelap">
                <Image
                    src={require('../../images/icon2.png')}
                />
              </div>
            </Col>
          </Row>
          <div className="veh"/>
          <Row>
            <Col span={4} offset={1}>
              <div className="second-boxes">
                <h1>0 %</h1>
              </div>
            </Col>
            <Col span={14}>
              <div className="second-box2">
                <h1>WELCOME TO THE CLUB</h1>
                <h2>Once we reach 5,000 Tough Guys in our discord server <br/>we will announce dates for "Pre" and "Public" sales</h2>
              </div>
            </Col>
            <Col span={5}>
              <div className="imagelap">
                <Image
                    src={require('../../images/icon2.png')}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 style={{fontWeight:"bold",color:"white",fontSize:50,marginLeft:100,marginTop:50}}>TEAM</h1>
            </Col>
          </Row>
          <Row>
            <Col span={6} offset={2}>
              <Image
                  src={require('../../images/team_1.png')}
              />
              <div className="images2-box">
                <h1>Benji</h1>
                <h2>Product Guy</h2>
              </div>
            </Col>
            <Col span={6} offset={1}>
              <Image
                  src={require('../../images/team_1.png')}
              />
              <div className="images2-box">
                <h1>Benji</h1>
                <h2>Product Guy</h2>
              </div>
            </Col>
            <Col span={6} offset={1}>
              <Image
                  src={require('../../images/team_1.png')}
              />
              <div className="images2-box">
                <h1>Benji</h1>
                <h2>Product Guy</h2>
              </div>
            </Col>
            <Col span={1}/>
          </Row>
          <br/>
          <Row>
            <Col span={6} offset={2}>
              <Image
                  src={require('../../images/team_1.png')}
              />
              <div className="images2-box">
                <h1>Benji</h1>
                <h2>Product Guy</h2>
              </div>
            </Col>
            <Col span={6} offset={1}>
              <Image
                  src={require('../../images/team_1.png')}
              />
              <div className="images2-box">
                <h1>Benji</h1>
                <h2>Product Guy</h2>
              </div>
            </Col>
            <Col span={6} offset={1}>
              <Image
                  src={require('../../images/team_1.png')}
              />
              <div className="images2-box">
                <h1>Benji</h1>
                <h2>Product Guy</h2>
              </div>
            </Col>
            <Col span={1}/>
          </Row>
          <br/>
          <br/>
          <br/>
          <Row>
            <Col>
              <h1 style={{fontWeight:"bold",color:"white",fontSize:50,marginLeft:100,marginTop:50}}>FAQ</h1>
            </Col>
          </Row>
          <Row>
            <Col span={20} offset={2}>
              <SimpleAccordion/>
            </Col>
          </Row>
        </div>
      </div>
  );
}

export default ContextBody;