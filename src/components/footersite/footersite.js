import './footersite.css';
import {Col, Image} from "antd";
import {Row} from 'antd';

function FooterSite() {

  return (
      <div className="footer-container">
        <Row>
          <Col span={3} offset={1}>
            <h1 style={{color: "white"}}>LOGO</h1>
          </Col>
          <Col span={9} offset={5}>
            <div style={{textAlign: "center", color: "white", fontWeight: 600, fontSize: 15}}>
              <Row>
                <Col span={4}>
                  ABOUT US
                </Col>
                <Col span={6}>
                  SALES MILESTONE
                </Col>
                <Col span={4}>
                  TEAM
                </Col>
                <Col span={4}>
                  FAQ
                </Col>
              </Row>
            </div>
            <Row>
              <Col>
                <h1 style={{color:"white",textAlign:"center",fontSize:14,marginLeft:70,marginTop:30,lineHeight:2.5}}>
                  Tough Guys Club NFT 2022.
                  <br/>
                  office@toughguys.club
                </h1>
              </Col>
            </Row>
          </Col>
          <Col span={4} offset={1}>
            <h1 style={{color:"white"}}>Logo</h1>
          </Col>
        </Row>
      </div>
  );
}

export default FooterSite;