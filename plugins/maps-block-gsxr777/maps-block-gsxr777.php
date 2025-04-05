<?php
/*
 * Plugin Name: Map Block gsxr777
 * Description: A custom map block that supports Google and Yandex map URLs.
 * Version: 1.0
 * Author: gsxr777 <support@wln.su>
 * Author URI: https://wln.su/
 * Author: gsxr777
 * Text Domain: maps-block-gsxr777
 * Domain Path: /languages
 * License: GPLv2 or later
*/

function register_maps_block_gsxr777() {
    wp_register_script(
        'maps-block-gsxr777-script',
        plugins_url( 'index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'index.js' )
    );

    register_block_type( __DIR__ );
}

add_action( 'init', 'register_maps_block_gsxr777' );
