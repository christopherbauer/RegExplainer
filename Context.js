var contexts = {
	None : 'N',
	LogicalGroup: 'L',
	ExplicitSet: 'E',
	ExplicitQuantifier: 'Q'
}
function Context() {
	var contextHistory = [];
	this.getContext = function() {
		if(contextHistory.length == 0) {
			return contexts.None;
		}
		return contextHistory[contextHistory.length-1];
	}
	this.is = function(expectedContext) {
		return this.getContext() === expectedContext;
	}
	this.addContext = function(context) {
		contextHistory.push(context);
	}
	this.removeCurrentContext = function() {
		if(contextHistory.length == 0) {
			throw new Error("IndexOutOfRangeError");
		}
		contextHistory.splice(-1);
	}
	this.removeContext = function(expectedContext) {
		if(contextHistory.length == 0) {
			throw new Error("IndexOutOfRangeError");
		}
		if(contextHistory[contextHistory.length-1] != expectedContext) {
			throw new Error("ContextNotExpectedException");
		}
		contextHistory.splice(-1,1);
	}
}