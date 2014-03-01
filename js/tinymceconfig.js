var wpcf_theme_url = wpcf7_get_theme_url();
var wpcf_theme_edstyle = wpcf_theme_url + "/editor-style.css";
tinyMCE.init({
    theme : "advanced",
	mode : "exact",
	elements: "description1", 
	theme_advanced_buttons1:"bold,italic,underline,hr,forecolor,separator,bullist,numlist,outdent,indent,separator,justifyleft,justifycenter,justifyright,justifyfull,",
	theme_advanced_buttons2: "formatselect,removeformat,separator,link,unlink,anchor,separator,undo,redo,separator,youtube",
	theme_advanced_resizing:"1", 
	theme_advanced_resize_horizontal: true, 
	theme_advanced_blockformats : "p,h1,h2,h3",
	dialog_type:"modal", 	
	force_br_newlines: true,
    force_p_newlines: true,
    apply_source_formatting: true,
    remove_linebreaks: false,
    convert_newlines_to_brs: true,
	entities:"38,amp,60,lt,62,gt", 
	accessibility_focus:"1", 
	tabfocus_elements:"major-publishing-actions", 
	media_strict:"", 
	plugins : "paste,template,youtube",
	paste_remove_styles:"1", 
	paste_remove_spans:"1", 
	paste_strip_class_attributes:"all", 					
	paste_use_dialog : true,
	paste_auto_cleanup_on_paste : true,
	paste_convert_headers_to_strong : false,
	paste_remove_spans : true,
	paste_remove_styles : true,
	cleanup : false,
    verify_html : false,
	valid_elements : "@[id|class|style|title|dir<ltr?rtl|lang|xml::lang|onclick|ondblclick|"
+ "onmousedown|onmouseup|onmouseover|onmousemove|onmouseout|onkeypress|"
+ "onkeydown|onkeyup],a[rel|rev|charset|hreflang|tabindex|accesskey|type|"
+ "name|href|target|title|class|onfocus|onblur],strong/b,em/i,strike,u,"
+ "#p,ol,ul,li,br,img[longdesc|usemap|"
+ "src|border|alt=|title|hspace|vspace|width|height|align],-sub,-sup,"
+ "-blockquote,-table[border=0|cellspacing|cellpadding|width|frame|rules|"
+ "height|align|summary|bgcolor|background|bordercolor],-tr[rowspan|width|"
+ "height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,"
+ "#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor"
+ "|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,"
+ "-span,-code,-pre,address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face"
+ "|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],"
+ "object[classid|width|height|codebase|*],param[name|value|_value],embed[type|width"
+ "|height|src|*],script[src|type],map[name],area[shape|coords|href|alt|target],bdo,"
+ "button,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|"
+ "valign|width],dfn,fieldset,form[action|accept|accept-charset|enctype|method],"
+ "input[accept|alt|checked|disabled|maxlength|name|readonly|size|src|type|value],"
+ "kbd,label[for],legend,noscript,optgroup[label|disabled],option[disabled|label|selected|value],"
+ "q[cite],samp,select[disabled|multiple|name|size],small,"
+ "textarea[cols|rows|disabled|name|readonly],tt,var,big",
	/*content_css: "http://wordpress.dev/wp-content/themes/default/editor-style.css",*/
	content_css: wpcf_theme_edstyle,
	setup : function(ed) {
		ed.pasteAsPlainText = true;
	}                    
});
jQuery(document).ready(function(){
    // add editor toggle
    jQuery("#wpcf7-form,#wpcf7-mail-body").addClass("toggleEditor"); 
});