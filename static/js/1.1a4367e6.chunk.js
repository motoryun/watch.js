webpackJsonp([1],{1165:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1168),a=n(1170);t.default=function(e){Object(r.a)(e),Object(a.a)(e)}},1168:function(e,t,n){"use strict";var r=n(1169);t.a=function(e){Object(r.a)(e)}},1169:function(e,t,n){"use strict";t.a=function(e){Object.assign(e.msg,{main_title:"\u0424\u043b\u0430\u043a\u043e\u043d "})}},1170:function(e,t,n){"use strict";var r=n(1171),a=n(1172);t.a=function(e){Object(r.a)(e),Object(a.a)(e)}},1171:function(e,t,n){"use strict";var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.a=function(e){var t=e.job_prm,n=e.adapters,a=e.cch.predefined_elmnts,i=e.utils,o=e.md;n.pouch.once("pouch_doc_ram_loaded",function(){a.adapter.find_rows(a,{_raw:!0,_top:500,_skip:0}).then(function(n){var r={};n.forEach(function(e){if(e.is_folder&&e.synonym){var n=e._id.split("|")[1];r[n]=e.synonym,!t[e.synonym]&&t.__define(e.synonym,{value:{}})}}),n.forEach(function(n){if(!n.is_folder&&n.synonym&&r[n.parent]&&!t[r[n.parent]][n.synonym]){var a=void 0;if(n.type.is_ref){var i=n.type.types[0].split(".");a=e[i[0]][i[1]]}-1==n.list?t[r[n.parent]].__define(n.synonym,{value:function(){var e={};return n.elmnts.forEach(function(t){e[t.elm]=a?a.get(t.value,!1,!1):t.value}),e}()}):n.list?t[r[n.parent]].__define(n.synonym,{value:n.elmnts.map(function(t){if(a){var n=a.get(t.value,!1,!1);return e.utils.is_empty_guid(t.elm)||(n._formula=t.elm),n}return t.value})}):(t[r[n.parent]].hasOwnProperty(n.synonym)&&delete t[r[n.parent]][n.synonym],t[r[n.parent]].__define(n.synonym,{value:a?a.get(n.value,!1,!1):n.value,configurable:!0}))}})}).then(function(){setTimeout(function(){o.emit("predefined_elmnts_inited"),n.pouch.emit("pouch_complete_loaded")},100)})}),delete e.CchPredefined_elmnts.prototype.value,e.CchPredefined_elmnts.prototype.__define({value:{get:function(){var t=this.type,n=this._obj?this._obj.value:"";if(this._obj.is_folder)return"";if("object"==("undefined"===typeof n?"undefined":r(n)))return n;if(!t.is_ref)return t.date_part?i.fix_date(this._obj.value,!0):t.digits?i.fix_number(this._obj.value,!t.hasOwnProperty("str_len")):"boolean"==t.types[0]?i.fix_boolean(this._obj.value):this._obj.value||"";if(t.digits&&"number"===typeof n)return n;if(t.hasOwnProperty("str_len")&&!i.is_guid(n))return n;var a=o.value_mgr(this._obj,"value",t);return a?i.is_data_mgr(a)?a.get(n,!1):i.fetch_type(n,a):n?(e.record_log(["value",t,this._obj]),null):this.characteristic.clr},set:function(e){this._obj.value!==e&&(a.emit_async("update",this,{value:this._obj.value}),this._obj.value=e.valueOf(),this._data._modified=!0)}}}),a.form_obj=function(){}}},1172:function(e,t,n){"use strict";t.a=function(e){e.cch.properties.__define({check_mandatory:{value:function(t,n){for(var r in t){var a=t[r];if(a.param.mandatory&&(!a.value||a.value.empty()))return e.msg.show_msg({type:"alert-error",text:e.msg.bld_empty_param+a.param.presentation,title:n||e.msg.bld_title}),!0}}},slist:{value:function(t,n){var r,a,i,o=[],u=this.get(t);if(u&&u.type.is_ref)for(r in u.type.types)u.type.types[r].indexOf(".")>-1&&(a=u.type.types[r].split("."),(i=e[a[0]][a[1]])&&(n&&(n.mgr=i),-1==i.class_name.indexOf("enm.")&&i.metadata().has_owners?i.find_rows({owner:t},function(e){var t=e.ref,n=e.presentation;return o.push({value:t,text:n})}):o=i.get_option_list()));return o}}}),e.CchProperties.prototype.__define({is_calculated:{get:function(){return-1!=(e.job_prm.properties.calculated||[]).indexOf(this)}},calculated_value:{value:function(t){if(!this._calculated_value){if(!this._formula)return;this._calculated_value=e.cat.formulas.get(this._formula)}return this._calculated_value.execute(t)}},extract_value:{value:function(t){var n=t.comparison_type,r=t.txt_row,a=t.value;switch(n){case e.enm.comparison_types.in:case e.enm.comparison_types.nin:if(!r)return a;try{var i=JSON.parse(r),o=this.type.types;if(1==o.length){var u=e.md.mgr_by_class_name(o[0]);return i.map(function(e){return u.get(e,!1)})}return i}catch(e){return a}default:return a}}},params_links:{value:function(t){return this.hasOwnProperty("_params_links")||(this._params_links=e.cat.params_links.find_rows({slave:this})),this._params_links.filter(function(e){var n=!0;return e.master.params.forEach(function(e){if(!(n=e.property.check_condition({cnstr:t.grid.selection.cnstr,ox:t.obj._owner._owner,prm_row:e,elm:t.obj})))return!1}),n})}},linked_values:{value:function(e,t){var n=[],r=void 0;if(e.forEach(function(e){return e.values.forEach(function(e){return n.push(e)})}),!n.some(function(e){return e._obj.value==t.value}))return!!n.some(function(e){if(e.forcibly)return t.value=e._obj.value,!0;e.by_default&&(!t.value||t.value.empty&&t.value.empty())&&(t.value=e._obj.value,r=!0)})||(!!r||(n.length?(t.value=n[0]._obj.value,!0):void 0))}},filter_params_links:{value:function(e,t){this.params_links(t).forEach(function(t){e.ref||(e.ref={in:[]}),e.ref.in&&t.values._obj.forEach(function(t){-1==e.ref.in.indexOf(t.value)&&e.ref.in.push(t.value)})})}}})}}});
//# sourceMappingURL=1.1a4367e6.chunk.js.map