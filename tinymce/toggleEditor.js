// display TinyMCE toggle
// to turn it on or off
// usage: include and add class to textarea

jQuery(document).ready(function($){
	jQuery(".toggleEditor").each(function() {
		var id = $(this).attr("id");
		jQuery("<a style=\"cursor:pointer;padding:6px 3px; clear:both;\" class='edit_toggle' id=\"toggle_" + id + "\" onclick=\"toggleEditor('" + id + "')\">Toggle Editor</a>").insertAfter("#"+id); //Toggle Editor On/Off
	});
});

function toggleEditor(id) {
	if (!tinyMCE.getInstanceById(id)) {
		tinyMCE.execCommand('mceAddControl', false, id);
	} else {
		tinyMCE.execCommand('mceRemoveControl', false, id);
	}
}

