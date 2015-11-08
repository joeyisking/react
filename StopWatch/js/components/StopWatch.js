var StopWatch = React.createClass({

	getInitialState: function() {
		return {
			time: 0,
			until: 0,
			enabled: true
		};
	},

	type: function(e) {
		this.setState({ until: e.target.value});
	},

	start: function(){

		this.setState({enabled: false});
		this.interval = setInterval( () => {
			this.tick();

			if (this.isTimeUp()){
				this.finish();
			}

		}, 1000);
	},

	isTimeUp: function(){

		return this.state.time == this.state.until;
	},

	finish: function(){

		console.log('Ding Ding Ding');
		
		this.replaceState(this.getInitialState());

		React.findDOMNode(this.refs.input).focus();

		return clearInterval(this.interval);
	},

	tick: function(){
		this.setState({time : this.state.time + 1 });
	},

	render: function() {
		return (
			<div>

				<input ref="input" onChange={this.type} value={this.state.until}/>

				<button disabled={ ! this.state.enabled} onClick={this.start}>Go</button>

				<h1>{this.state.time}</h1>

			</div>
		);
	}
});

React.render(<StopWatch />, document.body);