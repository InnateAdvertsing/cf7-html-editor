<?php
/*
Plugin Name: Contact Form 7 - TinyMCE on mail area
Plugin URI: http://innate.co.za
Description: Toggle the TinyMCE Editor when editing your forms in Contact Form 7.
Author: Laurence Tuck
Version: 0.1
Author URI: http://www.innate.co.za
*/

function add_jquery_contact_form_tinymce( $hook ) {
    if (isset( $_GET['action'] ) && $_GET['action'] == 'edit' && isset( $_GET['post'] ) && $_GET['page'] == 'wpcf7') {    
        wp_enqueue_script( 'jquery' );
        wp_enqueue_script( 'tinymce', plugin_dir_url( __FILE__ ) . '/tinymce/tiny_mce.js' );
        wp_enqueue_script( 'tinymceconfig', plugin_dir_url( __FILE__ ) . 'tinymce/tinymceconfig.js' );
        wp_enqueue_script( 'toggletinymce', plugin_dir_url( __FILE__ ) . 'tinymce/toggleEditor.js' );
        echo "<script>
        function loadEditorCSS(){ var wpcf7_theme_url = '".get_template_directory_uri()."'; return wpcf7_theme_url; } 
        </script>";      
    }
}

add_action( 'admin_enqueue_scripts', 'add_jquery_contact_form_tinymce' );
