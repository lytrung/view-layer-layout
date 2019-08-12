import React, {Component} from 'react';

class Layer extends Component {
  render() {

    var {className,active,children} = this.props;

    return (
      <div className={active ? className+' layer show' : className+' layer'}>
        {children}
      </div>      
    );
  }

}

export default Layer;
