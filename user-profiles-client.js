
Router.map(function () {
	this.route('user', {
		path: '/user/:_usr',
		template: 'user', 
		data: function (){
    		_usr  = this.params._usr;
    		templateData = {
     		 _usr: _usr,
		    };
   			 return templateData;
		}
	});
});