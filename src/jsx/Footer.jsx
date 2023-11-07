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
              <h3>Watch the videos</h3>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://www.youtube.com/embed/ej-gfhwhEMU" title="Least Developed Countries Report" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <ul>
                <li>
                  <strong>Watch:</strong>
                  {' '}
                  <a href="https://youtu.be/S0hxSgwPJzI" target="_blank" rel="noreferrer">Français</a>
                  {', '}
                  <a href="https://youtu.be/wT3jeGNZL4U" target="_blank" rel="noreferrer">Español</a>
                  {', '}
                  <a href="https://youtu.be/6xd9hcN12jE" target="_blank" rel="noreferrer">العربية</a>
                  {', '}
                  <a href="https://youtu.be/S23axWwcQGU" target="_blank" rel="noreferrer">简体中文</a>
                  {', '}
                  <a href="https://youtu.be/cVROjgKKVjg" target="_blank" rel="noreferrer">Русский</a>
                  {', '}
                  <a href="https://youtu.be/VPpMz8m8H-w" target="_blank" rel="noreferrer">Português</a>
                  {', '}
                  <a href="https://youtu.be/-zLJsyCI8zQ" target="_blank" rel="noreferrer">Kiswahili</a>
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Download:</strong>
                  {' '}
                  <a href="https://vimeo.com/882069158" target="_blank" rel="noreferrer">English</a>
                  {', '}
                  <a href="https://vimeo.com/882069181" target="_blank" rel="noreferrer">Français</a>
                  {', '}
                  <a href="https://vimeo.com/882069030" target="_blank" rel="noreferrer">Español</a>
                  {', '}
                  <a href="https://vimeo.com/882069068" target="_blank" rel="noreferrer">العربية</a>
                  {', '}
                  <a href="https://vimeo.com/882069119" target="_blank" rel="noreferrer">简体中文</a>
                  {', '}
                  <a href="https://vimeo.com/882069276" target="_blank" rel="noreferrer">Русский</a>
                  {', '}
                  <a href="https://vimeo.com/882069246" target="_blank" rel="noreferrer">Português</a>
                  {', '}
                  <a href="https://vimeo.com/882069214" target="_blank" rel="noreferrer">Kiswahili</a>
                </li>
              </ul>
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
              <h4>The 3 ‘As’ of development finance: Rolf Traeger, chief of UNCTAD’s least developed countries section</h4>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://www.youtube.com/embed/XGn8739VwJg" title="The 3 ‘As’ of development finance: Rolf Traeger, chief of UNCTAD’s least developed countries section" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <ul>
                <li>
                  <strong>Download:</strong>
                  {' '}
                  <a href="https://vimeo.com/881699770" target="_blank" rel="noreferrer">English</a>
                  {', '}
                  <a href="https://vimeo.com/881700188" target="_blank" rel="noreferrer">Français</a>
                  {', '}
                  <a href="https://vimeo.com/881700773" target="_blank" rel="noreferrer">Português</a>
                  {', '}
                  <a href="https://vimeo.com/881701583" target="_blank" rel="noreferrer">clean version</a>
                </li>
              </ul>
              <h4>The difference between climate and development finance: Stefan Csordas, UNCTAD economist</h4>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://www.youtube.com/embed/3W12bu9VmQA" title="The difference between climate and development finance: Stefan Csordas, UNCTAD economist" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <ul>
                <li>
                  <strong>Download:</strong>
                  {' '}
                  <a href="https://vimeo.com/881700104" target="_blank" rel="noreferrer">Video</a>
                  {', '}
                  <a href="https://vimeo.com/881699971" target="_blank" rel="noreferrer">clean version</a>
                </li>
              </ul>
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
