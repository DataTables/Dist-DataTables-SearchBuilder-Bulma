/*! SearchBuilder Bulma styling 2.0.0-beta.1 for DataTables
 * Copyright (c) SpryMedia Ltd - datatables.net/license
 */

import DataTable from 'datatables.net-bm';
import SearchBuilder from 'datatables.net-searchbuilder';

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


export default DataTable;

