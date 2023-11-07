import React, { /* useState,  useEffect, useRef */ } from 'react';
import '../styles/styles.less';

function Footer() {
  return (
    <div className="app" id="app_footer">
      <div className="footer_container">
        <h2>What do you want to do next?</h2>
        <div className="footer_elements">
          <div className="footer_element footer_element_1">
            <div className="footer_content anchor_videos" id="anchor_videos">
              <div className="hidden">
                <h3>Watch the videos</h3>
                <div className="iframe_container youtube_iframe">
                  <iframe src="https://www.youtube.com/embed/NRFEuRqoR7U" title="Least Developed Countries Report" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
                <ul>
                  <li>
                    <strong>Watch:</strong>
                    {' '}
                    <a href="https://youtu.be/xMTaiLRO8fM" target="_blank" rel="noreferrer">Français</a>
                    {', '}
                    <a href="https://youtu.be/OIxBxLvDL0Y" target="_blank" rel="noreferrer">Español</a>
                    {', '}
                    <a href="https://youtu.be/A5mIjaECTBc" target="_blank" rel="noreferrer">العربية</a>
                    {', '}
                    <a href="https://youtu.be/DskeZaWUiCA" target="_blank" rel="noreferrer">简体中文</a>
                    {', '}
                    <a href="https://youtu.be/00iFOntZxG0" target="_blank" rel="noreferrer">Русский</a>
                    {', '}
                    <a href="https://youtu.be/0EN3au-p81M" target="_blank" rel="noreferrer">Português</a>
                    {', '}
                    <a href="https://youtu.be/4OOyOL0uGnQ" target="_blank" rel="noreferrer">Kiswahili</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <strong>Download:</strong>
                    {' '}
                    <a href="https://vimeo.com/868447138" target="_blank" rel="noreferrer">English</a>
                    {', '}
                    <a href="https://vimeo.com/868447431" target="_blank" rel="noreferrer">Français</a>
                    {', '}
                    <a href="https://vimeo.com/868447676" target="_blank" rel="noreferrer">Español</a>
                    {', '}
                    <a href="https://vimeo.com/868447013" target="_blank" rel="noreferrer">العربية</a>
                    {', '}
                    <a href="https://vimeo.com/868447067" target="_blank" rel="noreferrer">简体中文</a>
                    {', '}
                    <a href="https://vimeo.com/868447615" target="_blank" rel="noreferrer">Русский</a>
                    {', '}
                    <a href="https://vimeo.com/868447562" target="_blank" rel="noreferrer">Português</a>
                    {', '}
                    <a href="https://vimeo.com/868447493" target="_blank" rel="noreferrer">Kiswahili</a>
                  </li>
                </ul>
              </div>
              <div className="hidden">
                <h4>Watch the press conference</h4>
                <div className="iframe_container youtube_iframe">
                  <iframe src="https://www.youtube.com/embed/SCk4Og6-uhE" title="Least Developed Countries Report Press Conference" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
                <ul>
                  <li>
                    <strong>Download:</strong>
                    {' '}
                    <a href="https://vimeo.com/868706263" target="_blank" rel="noreferrer">Video</a>
                  </li>
                </ul>
              </div>
              <div className="hidden">
                <h4>Interview </h4>
                <div className="iframe_container youtube_iframe">
                  <iframe src="https://www.youtube.com/embed/IbVRtayUJoo" title="Interview with Shamika N. Sirimanne, Director of UNCTAD's Technology and Logistics Division" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
                <ul>
                  <li>
                    <strong>Download:</strong>
                    {' '}
                    <a href="https://vimeo.com/868637024" target="_blank" rel="noreferrer">Video</a>
                  </li>
                </ul>
              </div>
              <div className="hidden">
                <h4>Interview</h4>
                <div className="iframe_container youtube_iframe">
                  <iframe src="https://www.youtube.com/embed/RD57SmYtYG4" title="Interview with Jan Hoffmann, Head of UNCTAD's Trade Logistics Branch" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
                <ul>
                  <li>
                    <strong>Download:</strong>
                    {' '}
                    <a href="https://vimeo.com/868636911" target="_blank" rel="noreferrer">Video</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_content anchor_podcasts" id="anchor_podcasts">
              <h3>Podcasts</h3>
              <p>Listen to the Weekly Tradecast episodes that explore some of the main issues in the report</p>
              <div className="iframe_container">
                <iframe title="The Weekly Tradecast by UNCTAD: After years of lost growth, least developed countries need inclusive finance to meet development goals" height="150" width="100%" style={{ border: 'none', minWidth: 'min(100%, 430px)' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=c69yp-14ef00a-pb&btn-skin=009EDB&download=1&font-color=000000&fonts=Verdana&from=pb6admin&logo_link=none&rtl=0&share=1&size=240&skin=ffffff" allowFullScreen />
                <span className="text"><a href="/podcast/un-report-after-years-lost-growth-least-developed-countries-need-inclusive-finance-meet">After years of lost growth, least developed countries need inclusive finance to meet development goals</a></span>
              </div>
              <ul className="podcasts_container">
                <li>
                  <span className="icon" />
                  <span className="text"><a href="/podcast/history-hunger-how-war-ukraine-making-food-crises-even-worse-africa-and-least-developed">History of hunger</a></span>
                </li>
                <li>
                  <span className="icon" />
                  <span className="text"><a href="/podcast/greener-growth-why-least-developed-countries-must-act-fast-achieve-sustainable-development">Greener growth</a></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
