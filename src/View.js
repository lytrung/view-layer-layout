import React, {Component} from 'react';

class View extends Component {
  render() {
    var {className,currentView,viewName,children} = this.props;

    return (
      <div className={ viewName==currentView  ? className + ' view show': className + ' view'}>
        {children}
      </div>      
    );
  }
}

export default View;
