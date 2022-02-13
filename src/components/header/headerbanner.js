import './headerbanner.css';
import {Row, Col} from 'antd';

function HeaderBanner(){
  return(
      <div className="container">
        <Row>
          <Col span={8}>
            <h1 style={{color:"white"}} className="text">Logo</h1>
          </Col>
          <Col span={12}>
            <div className="header-text">
              <Row>
                <Col span={4} offset={1}>
                  <h2>ABOUT US</h2>
                </Col>
                <Col span={5}>
                  <h2>SALES MILESTONES
                  </h2>
                </Col>
                <Col span={3}>
                  <h2>TEAM</h2>
                </Col>
                <Col span={2}>
                  <h2>FAQ</h2>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={4}>
            <h1 style={{color:"white",textAlign:"center"}}>ICONS</h1>
          </Col>
        </Row>
      </div>
  );
}

export default HeaderBanner;