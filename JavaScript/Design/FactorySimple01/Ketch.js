/**
 * New node file
 */

var Ketch = function() { 'use strict';

};

Ketch.prototype = { 
	tack : function() { 'use strict';
		return "Ketch tack called.";
	},
	
	luff : function() { 'use strict';
		return "Ketch luff called.";
	},
	
	reach : function() { 'use strict';
		return "Ketch reach called.";
	},
	
	anchor : function() { 'use strict';
		return "Ketch anchor called.";
	},
	
	dock: function() { 'use strict';
		return "Ketch dock called.";
	},

	foo: function() {
	}
};

exports.Ketch = Ketch;