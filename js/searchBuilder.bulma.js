/*! SearchBuilder Bulma styling 2.1.1 for DataTables
 * Copyright (c) SpryMedia Ltd - datatables.net/license
 */

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['datatables.net-bm', 'datatables.net-searchbuilder'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}
				
				var DataTable = root.DataTable ?
					root.DataTable :
					require('datatables.net-bm')(root);

				if (! root.DataTable.SearchBuilder) {
					require('datatables.net-searchbuilder')(root);
				}

				return factory(root, root.document, DataTable);
			};
		}
		else {
			var DataTable = window.DataTable ?
				window.DataTable :
				require('datatables.net-bm');

			if (! window.DataTable.SearchBuilder) {
				require('datatables.net-searchbuilder');
			}

			module.exports = factory(window, window.document, DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';


Object.assign(DataTable.SearchBuilder.classes, {
    clearAll: 'button dtsb-clearAll'
});
Object.assign(DataTable.Group.classes, {
    add: 'button dtsb-add',
    clearGroup: 'button dtsb-clearGroup',
    logic: 'button dtsb-logic',
    search: 'button dtsb-search'
});
Object.assign(DataTable.Criteria.classes, {
    container: 'dtsb-criteria',
    delete: 'button dtsb-delete',
    left: 'button dtsb-left',
    right: 'button dtsb-right',
    input: 'input dtsb-input'
});


return DataTable;
}));
