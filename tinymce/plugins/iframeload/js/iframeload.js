tinyMCEPopup.requireLangPack();

var IframeLoadDialog = {
    init: function () {
        var f = document.forms[0];
        // Get the selected contents as text and place it in the input
        f.iframeloadURL.value = tinyMCEPopup.editor.selection.getContent({ format: 'text' });
		f.iframeloadWidth.value = tinyMCEPopup.editor.selection.getContent({ format: 'text' });
		f.iframeloadHeight.value = tinyMCEPopup.editor.selection.getContent({ format: 'text' });
    },

    insert: function () {
        // Insert the contents from the input into the document
        var url = document.forms[0].iframeloadURL.value;
        if (url === null) { tinyMCEPopup.close(); return; }
		var framew = document.forms[0].iframeloadWidth.value;
		var frameh = document.forms[0].iframeloadHeight.value;
		if (framew === null) { framew = '600'; }
		if (frameh === null) { frameh = '400'; }
		
		/*
        var code, regexRes;
		var newvalue = new Array;
		var regEx = /(src|width|height)=["']([^"']*)["']/gi;
        url.replace(regEx, function(all, type, value) {
			regexRes.push(value); console.log(value);
		});
		console.log(regexRes);
        code = (regexRes === null) ? url : regexRes;
        if (code === "") { tinyMCEPopup.close(); return; } 
		*/

        tinyMCEPopup.editor.execCommand('mceInsertContent', false, '[iframe_load ' + framew + ' ' + frameh + ']' + url + '[/iframe_load]');
        tinyMCEPopup.close();
    }
};

tinyMCEPopup.onInit.add(IframeLoadDialog.init, IframeLoadDialog);