'use strict';
var tomap=require('./toMap');
const tabular_vis={
  add:tomap
  // chart_view:chartFunc

}

/*!
 *  exports the module
 */
if(typeof module!== 'undefined' && module.exports){
  module.exports = tabular_vis;
}
