/*! Bulma ui integration for DataTables' SearchBuilder
 * © SpryMedia Ltd - datatables.net/license
 */
$.extend(true, DataTable.SearchBuilder.classes, {
    clearAll: 'button dtsb-clearAll'
});
$.extend(true, DataTable.Group.classes, {
    add: 'button dtsb-add',
    clearGroup: 'button dtsb-clearGroup is-light',
    logic: 'button dtsb-logic is-light'
});
$.extend(true, DataTable.Criteria.classes, {
    container: 'dtsb-criteria',
    "delete": 'button dtsb-delete',
    left: 'button dtsb-left',
    right: 'button dtsb-right'
});
