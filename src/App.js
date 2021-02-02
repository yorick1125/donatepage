import './App.css';
import { useState } from 'react';
import PayPal from './Components/PayPal.js';
import * as ReactBootStrap from 'react-bootstrap';
import maisonshalomlogo from './assets/images/maisonshalomlogo.png'
import Carousel from './Components/Carousel';
import MoneyInput from './Components/MoneyInput.js';
import DonateChoice from './Components/DonateChoice.js';

function App() {

  const [donate, setDonate] = useState(false)

  return (

    //Navbar

    <div className="App">
      
      <ReactBootStrap.Navbar className="navbar" expand="lg">
        <h4 className="nav-title" >Oasis of Peace</h4>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />


        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            {/* <ReactBootStrap.Nav.Link href="#about">About</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#donate">Donate</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#contributors">Collaborators</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="https://www.maisonshalom.org/">Maison Shalom</ReactBootStrap.Nav.Link> */}

            <a className="link" href="#about">About</a>
            <a className="link" href="#donate">Donate</a>
            <a className="link" href="#contributors">Contributors</a>
            <a className="link" href="https://www.maisonshalom.org/">Maison Shalom</a>

            
          </ReactBootStrap.Nav>

            <div className="nav-right" >
              <a className="link" style={{marginTop: "5px"}} >EN</a>
              <a className="link" style={{marginTop: "5px"}} >FR</a>
              <ReactBootStrap.Nav.Link href="https://www.facebook.com/MaisonShalom/" ><img className="social-logos" src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19750.png" alt="facebooklogo" /></ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="https://twitter.com/maison_shalom" ><img className="social-logos" src="https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png" alt="twitterlogo" /></ReactBootStrap.Nav.Link>
              <a href="https://www.maisonshalom.org/" ><img className="mslogo" src={maisonshalomlogo} alt="maison shalom logo" /></a>
            </div>
          
          {/* <ReactBootStrap.Form inline>
            <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2"/>
            <ReactBootStrap.Button variant="outline-success">Search</ReactBootStrap.Button>
          </ReactBootStrap.Form> */}
          <p className="navbar-copyright">© 2021 Oasis of Peace, Privacy Policy </p>

        </ReactBootStrap.Navbar.Collapse>


      </ReactBootStrap.Navbar>

      <div className="gallery" >
        <Carousel/>
      </div>


      <div className="about" id="about">
        <h2>About</h2>
        <p className="aboutTxt" >If you are able to read this, you have been blessed with an education. We are currently
raising money to build a school for Burundian refugees in Rwanda.
We all have a duty to do what we can to make sure we can share this blessing with
those in need. Help us spread this gift by donating 1$ or more, and please share this
page/video.

During the 2015 crisis in Burundi, Marguerite Barankitse, founder &amp; president of Maison
Shalom denounced the massacres and crimes committed against humanity by its own
government. This resulted in the closure of its schools, hospital, bank accounts and the
closure of all activities in Burundi. They have now relocated in Rwanda since 2015.
Please help us reach the 1 Million dollars goal to secure funding to build a school in
Rwanda. Together we can make a difference!</p>
      </div>


        
      <div className="donate" id="donate">
          <h2 style={{textShadow: "1px 1px black"}} >Donate</h2>

          <p className="donateTxt" >If you would like your name to be displayed into our list of contributors, please enter it below.</p>
          
          <div className="nameform" >
            {/* <ReactBootStrap.Form.Group>
              <ReactBootStrap.Form.Control className="nameInput" size="md" type="text" placeholder="Full Name"/>
            </ReactBootStrap.Form.Group> */}
            <input className="nameInput" type="text"  placeholder="Full Name" />
          </div>


          <DonateChoice/>

          <div className="moneyinput">
            <MoneyInput/>
          </div>

          {donate ? (
            <div className="paypalbtn" >
              <PayPal/> 
            </div>
          ) : (
          <button className="donatebtn"
              
              onClick={ () => {
                setDonate(true); 
              }}
              >Donate</button>
          )}
      </div>    

      {/* <div className="contributors" id="contributors" >
        <h2>Thank You to All Contributors</h2>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
        <button className="contributorbtn" >View Contributors</button>
      </div> */}

      <div className="footer" >
        <div className="footer-left" >
          <h5><b>Maison Shalom International</b></h5>
          <p>RN 15 - KK 432 
            Nyanza, Kicukiro District</p>
          <p>
          B.P 1131 Kigali - Rwanda
          </p>
          <p>
          Tel: +250 785 116 990</p>
<p>Email: coordination@maisonshalom.org
          </p>
        </div>

        <div className="footer-right" >
          <a href="https://www.ngosource.org/about-equivalency-determination-on-file-badge?ref=https%3A%2F%2Fwww.maisonshalom.org%2F" ><img className="ngosourceimg" src="http://www.ngosource.org/sites/default/files/ngos_ed_on_file_widget.png" alt="ngosource" ></img></a>
          <div >
            <a href="https://www.maisonshalom.org/participer/nous-aider" ><button className="helpbtn" >Help Us Out</button></a>
            <a href="https://www.maisonshalom.org/participer/volontariat" ><button className="helpbtn" >Volunteer</button></a>
          </div>

        </div>
      </div>

    </div>


  );
}

export default App;
