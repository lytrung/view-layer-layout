import React, {Component} from 'react';
import View from './View';
import Layer from './Layer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView:'view-home',
      isLayerNavActive:false //show and hide for each layer
    }
  }

  showNavLayer = () => {
    this.setState({isLayerNavActive:true})
  }

  hideNavLayer = () => {
    this.setState({isLayerNavActive:false})
  }

  setCurrentView = (viewName) => {
    this.setState({currentView:viewName})
  }

  handleNavLinkClick = (e) => {
    e.preventDefault();
    
    var targetView = e.target.dataset.view;
    this.setCurrentView(targetView);

    this.hideNavLayer();
  }

  render() {
    return (
      <div className="container">
        <Layer className="layer-nav" active={this.state.isLayerNavActive}>
          <div className="header"><i onClick={this.hideNavLayer} className="fas fa-times"></i></div>
          <div className="main">
            <ul className="nav">
              <li><a href="#" onClick={this.handleNavLinkClick} data-view="view-home" className="nav-link color1">Home</a></li>
              <li><a href="#" onClick={this.handleNavLinkClick} data-view="view-cart" className="nav-link color2">Cart</a></li>
              <li><a href="#" onClick={this.handleNavLinkClick} data-view="view-order" className="nav-link color3">Order</a></li>
              <li><a href="#" onClick={this.handleNavLinkClick} data-view="view-login" className="nav-link color4">Login</a></li>
              <li><a href="#" onClick={this.handleNavLinkClick} data-view="view-contact" className="nav-link color5">Contact</a></li>
            </ul>
          </div>
        </Layer>
        <View viewName="view-home" currentView={this.state.currentView} className="color1">
          <div className="header"><i onClick={this.showNavLayer} className="fas fa-bars"></i></div>
          <div className="main">
            <h1>Home</h1>
            <p onClick={()=>this.setCurrentView('view-login')}>Go to login</p>
          </div>
        </View>
        <View viewName="view-cart" currentView={this.state.currentView} className="color2">
          <div className="header"><i onClick={()=>this.setCurrentView('view-home')} className="fas fa-times"></i></div>
          <div className="main">
            <h1>Cart</h1>
            <p onClick={()=>this.setCurrentView('view-order')}>Go to Order</p>
          </div>
        </View>
        <View viewName="view-order" currentView={this.state.currentView} className="color3">
          <div className="header"><i onClick={()=>this.setCurrentView('view-home')} className="fas fa-times"></i></div>
          <div className="main">
            <h1>Order</h1>
          </div>
        </View>
        <View viewName="view-login" currentView={this.state.currentView} className="color4">
          <div className="header"><i onClick={()=>this.setCurrentView('view-home')} className="fas fa-times"></i></div>
          <div className="main">
            <h1>Login</h1>
          </div>
        </View>
        <View viewName="view-contact" currentView={this.state.currentView} className="color5">
          <div className="header"><i onClick={()=>this.setCurrentView('view-home')} className="fas fa-times"></i></div>
          <div className="main">
            <h1>Contact</h1>
            <p onClick={this.showNavLayer}>View navigation</p>
          </div>
        </View>
      </div>
    );
  }

}

export default App;
