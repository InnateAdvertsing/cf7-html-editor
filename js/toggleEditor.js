// display TinyMCE toggle
// to turn it on or off
// usage: include and add class to textarea

jQuery(document).ready(function($){
	jQuery(".toggleEditor").each(function() {
		var id = $(this).attr("id");
		jQuery("<a class='edit_toggle button-primary' id=\"toggle_" + id + "\" onclick=\"toggleEditor('" + id + "')\">Toggle Editor</a>").insertAfter("#"+id); //Toggle Editor On/Off
	});
});

function toggleEditor(id) {
	if (!tinyMCE.getInstanceById(id)) {
		tinyMCE.execCommand('mceAddControl', false, id);
	} else {
		tinyMCE.execCommand('mceRemoveControl', false, id);
	}
}

