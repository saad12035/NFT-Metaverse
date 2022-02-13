import { Layout } from 'antd';
import HeaderBanner from "../../components/header/headerbanner";
import './homepage.css';
import ContextBody from "../../components/contextbody/contextbody";
import FooterSite from "../../components/footersite/footersite";

const { Header, Footer, Content } = Layout;

function Home(){
  return(
      <Layout>
          <Header style={{ position: 'sticky', margin:'0', width: '100%',backgroundColor:"black" }}><HeaderBanner/></Header>
          <Content><ContextBody/></Content>
        <Footer style={{backgroundColor:"#182533"}}><FooterSite/></Footer>
      </Layout>
  );
}

export default Home;