import React from 'react';
import data from "./data/data.json";
import subproperties from "./data/subproperties.json";
import bills from "./data/bills.json";
import Property from "./properties/property";
import SubProperty from "./properties/subproperty";
import CashItemsList from "./cash/cash-items-list";
import AdSenseDesktop from "./adsense/ad-sense-desktop.js";
import AdSenseResponsive from "./adsense/ad-sense-responsive.js";
import ReactGA from "react-ga"; // Google Analytics

class NetWorthTotal extends React.Component {
  // Componant to show the combined final totals for <Properties /> and <CashItemList /> Not sure where to put this

  render() {
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    }

    const bt = this.props.billFinalTotal;
    const pt = this.props.propertyFinalTotal;
    const spt = this.props.subPropertyFinalTotal;
    const total =
      bt[1] +
      bt[2] +
      bt[3] +
      bt[4] +
      bt[5] +
      bt[6] +
      bt[7] + // Bills
      pt[1] +
      pt[2] +
      pt[3] +
      pt[4] +
      pt[5] +
      pt[6] +
      pt[7] +
      pt[8] +
      pt[9] +
      pt[10] +
      pt[11] + // Properties
      pt[12] +
      pt[13] +
      pt[14] +
      pt[15] +
      pt[16] +
      pt[17] +
      pt[18] +
      pt[19] +
      pt[20] +
      pt[21] +
      pt[22] + //Properties
      spt[1] +
      spt[2] +
      spt[3] +
      spt[4] +
      spt[5] +
      spt[6]; // Sub Properites

    const totalWithCommas = numberWithCommas(total);

    return (
      <div className="w-50 w-25-l">
        <div className="fr flex flex-column items-center networth-total-box br3 br3-ns br--left ">
          <h6 className="total-header">YOUR NET WORTH</h6>
          <div className="total-number">${totalWithCommas}</div>          
        </div>
      </div>
    );
  }
}

class CashAssetsTotal extends React.Component {
  render() {
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    }

    function incomeTax() {
      if (taxTotal <= 200) {
        return taxTotal;
      } else {
        return 200;
      }
    }

    const bt = this.props.billFinalTotal;
    const total = bt[1] + bt[2] + bt[3] + bt[4] + bt[5] + bt[6] + bt[7];
    const totalWithCommas = numberWithCommas(total);
    const taxTotal = Math.round(total * 0.1);

    return (
      <div className="flex flex-column items-center gray ph4 pv2 ba br1 b--gray w5">
        <h4 className="f5 mv2">CASH TOTAL: ${totalWithCommas}</h4>
        <p className="f7 mb2">INCOME TAX: ${incomeTax(taxTotal)}</p>
      </div>
    );
  }
}


// function App(props) {
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      billFinalTotal: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0
      },
      propertyFinalTotal: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0,
        16: 0,
        17: 0,
        18: 0,
        19: 0,
        20: 0,
        21: 0,
        22: 0
      },
      subPropertyFinalTotal: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
      }
    }
    this.handleCashInput = this.handleCashInput.bind(this);
    this.handlePropertyValueInput = this.handlePropertyValueInput.bind(this);
    this.handleSubPropertyValueInput = this.handleSubPropertyValueInput.bind(
      this
    );
    ReactGA.initialize("UA-92696610-1"); // Google Analytics stuff
    ReactGA.pageview("/");
  }

  componentDidMount() {
    let tabElements = document.getElementsByClassName('tabs__menu-item');

    Array.from(tabElements).forEach(function(element) {
      element.addEventListener('click', function() {
        console.log('element clicked ' + element)
        if (element.nextSibling) {
          element.classList = 'tabs__menu-item ph3 tc pv2 bg-animate hover-bg-white pointer bt br br2 br--top bl w-100 b--light-silver';
          element.nextSibling.classList = 'tabs__menu-item ph3 tc pv2 bg-animate hover-bg-white pointer bb w-100 b--light-silver';
          element.parentNode.classList = 'mv0 tabs__menu flex  nav bg-white property-tab z-max';
        }
        if (element.previousSibling) {
          element.classList = 'tabs__menu-item ph3 tc pv2 bg-animate hover-bg-white pointer bt br br2 br--top bl w-100 b--light-silver';
          element.previousSibling.classList = 'tabs__menu-item ph3 tc pv2 bg-animate hover-bg-white pointer bb w-100 b--light-silver';
          element.parentNode.classList = 'mv0 tabs__menu flex  nav bg-white cash-tab z-max';
        }
      });
    });
  }

  handleCopyBTCAddress () {
    ReactGA.event({
      category: 'Donate',
      action: 'Clicked BTC Button'
    });
    let copyText = document.querySelector('#btc-address')
    copyText.select()
    document.execCommand('copy')
    alert('Copied the BTC address of: ' + copyText.value + ' to the clipboard')
  }

  handleCopyETHAddress () {
    ReactGA.event({
      category: 'Donate',
      action: 'Clicked ETH Button'
    });
    let copyText = document.querySelector('#eth-address')
    copyText.select()
    document.execCommand('copy')
    alert('Copied the ETH address of: ' + copyText.value + ' to the clipboard')
  }

  handleCashInput(id, newBillFinalTotal) {
    const cashTemp = { ...this.state.billFinalTotal, [id]: +newBillFinalTotal };
    this.setState({
      billFinalTotal: cashTemp
    });
  }

  handlePropertyValueInput(id, newPropertyValueFinalTotal) {
    const propertyTemp = {
      ...this.state.propertyFinalTotal,
      [id]: +newPropertyValueFinalTotal
    };
    this.setState({
      propertyFinalTotal: propertyTemp
    });
  }

  handleSubPropertyValueInput(id, newFinalSubPropertyValueTotal) {
    const subPropertyTemp = {
      ...this.state.subPropertyFinalTotal,
      [id]: +newFinalSubPropertyValueTotal
    };
    this.setState({
      subPropertyFinalTotal: subPropertyTemp
    });
  }

  handleClickedDonateButton() {
    ReactGA.event({
      category: 'Donate',
      action: 'Clicked Donate Button'
    });
  }

  handleClickedPaypalDonateButton() {
    ReactGA.event({
      category: 'Donate',
      action: 'Clicked Paypal Button'
    });
  }

  render() {

    const billsNode = bills.bills.map(bill => {
      return (
        <CashItemsList
          key={bill.id}
          bill={bill}
          onChange={this.handleCashInput}
        />
      );
    });

    const propertyNode = data.properties.map(property => {
      return (
        <Property
          key={property.id}
          property={property}
          onChange={this.handlePropertyValueInput}
        />
      );
    });

    const subPropertyNode = subproperties.subproperties.map(subproperty => {
      return (
        <SubProperty
          key={subproperty.id}
          subproperty={subproperty}
          onChange={this.handleSubPropertyValueInput}
        />
      );
    });

    return (
      <div className="relative">
        <div className="flex flex-column container-page-width center">
          <div className="flex flex-column items-center">
            <div className="fixed flex flex-wrap items-center justify-between app-header pv2 pv3-ns">
              <div className="w-50 w-25-l pl3 pl0-l">
                <div className="fl flex flex-column items-center">
                  <h3 className="kabel-font-main title-logo mt0 mb2">MONOPOLY</h3>
                  <h4 className="kabel-font-sub mb0">CALCULATOR</h4>                  
                </div>
              </div>
              <h4 className="w-50-l dn db-l sub-header f6-l">
                Figure out the net worth of the game winner!
              </h4>
              <NetWorthTotal
                billFinalTotal={this.state.billFinalTotal}
                propertyFinalTotal={this.state.propertyFinalTotal}
                subPropertyFinalTotal={this.state.subPropertyFinalTotal}
              />
              <h4 className="db-m dn-ns sub-header f6 f5-l center">
                Figure out the net worth of the game winner!
              </h4>
            </div>
            <div className="flex flex-column w-100 main-section">
              <div className="flex flex-row">
                <div className="w-100 relative">
                  <div className="fixed items-center justify-center ad-sense-container bg-white">
                    {/* <div className="tc pv3 f7 gray mt2 ba b--light-gray">Want to help support this Calculator? <a href="#donate" className="pa1 ph2 bg-green white dim br1 link" onClick={this.handleClickedDonateButton}>Donate!<i className="pl1 fa fa-angle-double-down" aria-hidden="true"></i></a></div> */}
                    <AdSenseResponsive
                      client="ca-pub-6063578944512286"
                      slot="8034558454"
                      format="auto"
                    />          
                  </div>
                  <div className="dn db-ns fixed items-center justify-center ad-sense-container bg-white">
                    <div className="tc pt3 f7 gray">The ads below help support this site! Thanks for your support! <a href="#donate">Donate!</a> </div>
                    <AdSenseDesktop
                      client="ca-pub-6063578944512286"
                      slot="9906828034"
                    />          
                  </div>
                  <div className="tabs">
                    <div id="tabs" className="mv0 tabs__menu flex nav bg-white property-tab z-max">
                      <label htmlFor="section1" id="propertyAssets" className="tabs__menu-item ph3 tc pv2 bg-animate hover-bg-white pointer bt br br2 br--top bl w-100 b--light-silver">
                          Property Assets
                        </label>
                      <label htmlFor="section2" id="cashAssets" className="tabs__menu-item ph3 tc pv2 bg-animate hover-bg-white pointer bb w-100 b--light-silver">
                          Cash Assets
                        </label> 
                    </div>
                    <div className="tabs__content">
                      <div>
                        <input type="radio" className="dn" name="sections" id="section1" defaultChecked />
                        <div className="tabs__content__info">
                          <div className="flex flex-row justify-center property-item-list-container">
                            <ul className="list-unstyled properties-item pl0 f7 f6-l mv0">
                              {propertyNode}
                            </ul>
                          </div>
                          <div className="dn db-ns items-center justify-center ad-sense-container-2 bg-white z-999">
                            <AdSenseDesktop
                              client="ca-pub-6063578944512286"
                              slot="6243695446"
                            />          
                          </div>
                          <div className="flex flex-row justify-center subproperty-item-list-container">
                            <ul className="list-unstyled properties-item pl0 f7 f6-l mv0">
                              {subPropertyNode}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div>
                        <input type="radio" className="dn" name="sections" id="section2" />
                        <div className="tabs__content__info">
                          <div className="flex flex-row items-center justify-center cash-asset-container">
                            <ul className="w-100 pl0">
                              {billsNode}
                            </ul>
                          </div>
                          <div className="flex flex-row justify-center cash-total-box">
                            <CashAssetsTotal
                              billFinalTotal={this.state.billFinalTotal}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="donate" className="flex flex-column items-center mb5 mh2 mh0-ns">
                <div className="w-100 pa2 bg-light-gray tc f6 gray br2 br--top">If you enjoyed the calculator, my <a href="https://www.silversojourner.com" target="_blank" rel="noopener noreferrer">family and I</a> graciously accept donations. <br/>Thank you for your support!</div>
                <div className="w-100 flex flex-row bb br bl b--light-gray justify-center pa2">
                  <a href="https://paypal.me/pnwnelson" className="link dim bg-light-blue pa3 mh1 white br2" onClick={this.handleClickedPaypalDonateButton}><i className="mr1 fab fa-paypal"></i>PayPal</a>
                  <div onClick={this.handleCopyBTCAddress} className="flex items-center link dim btc-orange pa2 mh1 white br2 pointer">
                    <i className="f3 fab fa-bitcoin"></i><input className="offscreen" aria-hidden="true" id="btc-address" value="36Gr2KKZpyGPwZCzCGNm3SchpVBiZtx8Zv" />
                  </div>
                  <div onClick={this.handleCopyETHAddress} className="flex items-center link dim eth-blue pa2 mh1 white br2 pointer">
                    <i className="f3 fab fa-ethereum"></i><input className="offscreen" aria-hidden="true" id="eth-address" value="0xD4bD1D023261A1AE1796925c41091040BDB3B1A0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
