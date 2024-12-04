function Footer() {
    return (
      <footer className="footer">
        <div className="footerContent">
          <h1>Contact</h1>
  
          <div className="contactFooter">
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Social" />
          </div>
  
          <div className="adressFooter">
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Working Hours" />
          </div>
  
          <div className="mapFooter">
            <div style={{ width: "100%" }}>
              <iframe
                title="Google Map"
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dubininskaya%20Ulitsa,%2096,%20Moscow,%20115093+(Ithub)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps tracker sport</a>
              </iframe>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;