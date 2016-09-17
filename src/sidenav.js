// tutorial1-raw.js
var Page = React.createClass({displayName: 'Page',
  render: function() {
    return (
    	<div>
    	<PageHeader />
    	Body
    	</div>
    );
  }
});

var SideNav = React.createClass({

  toggleSidenav: function(){
	this.props.toggleSidenav();
  },

  getInitialState:function(){
  	var list = ["area-chart", "camera", "calendar", "book"];
  	return {data:list}
  },

  render: function() {
    return (
    	this.props.show?<div className="sideNav" onClick={this.toggleSidenav}>

    	{this.state.data.map(function(name, index){
    		return (<Node type={name} key={index}/>)
    	})
    	}

    	</div>:null);
  	}
});

var Node = React.createClass({

  render: function() {
  	var classicon = "fa fa-"+ this.props.type + " iconcss";
  	// var classicon = "fa fa-camera";
    return (<div className="node"><i className={classicon}></i>{this.props.type}</div>);
  }
});

Node.defaultProps = {
	type:"camera"
}

var PageHeader = React.createClass({
  
  getInitialState: function(){
  	return {show:false};
  },

  toggleSidenav : function(){
  	this.setState({show:!this.state.show});
  },

  render: function() {
    return (
    	<div className="pageHeader">
    		<div className="pageHeaderIcon" onClick={this.toggleSidenav}></div>
    		<SideNav show={this.state.show} toggleSidenav={this.toggleSidenav}/>
    	</div>
    );
  }
});

ReactDOM.render(
  React.createElement(Page, null),
  document.getElementById('content')
);