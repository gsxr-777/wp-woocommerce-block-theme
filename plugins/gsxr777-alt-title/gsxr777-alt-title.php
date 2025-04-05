<?php
/**
 * Plugin Name: GSXR777 Alt Title
 * Description: Gutenberg block for managing alt and title attributes of images.
 * Version: 1.0
 * Author: Your Name
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Регистрация скриптов и стилей блока
function gsxr777_alt_title_register_block() {
    wp_register_script(
        'gsxr777-alt-title-js',
        plugins_url( 'gsxr777-alt-title.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-data' ),
        '1.0',
        true
    );

    wp_register_style(
        'gsxr777-alt-title-editor-css',
        plugins_url( 'gsxr777-alt-title.css', __FILE__ ),
        array(),
        '1.0'
    );

    register_block_type( 'gsxr777/alt-title-block', array(
        'editor_script' => 'gsxr777-alt-title-js',
        'editor_style'  => 'gsxr777-alt-title-editor-css',
    ) );
}

add_action( 'init', 'gsxr777_alt_title_register_block' );
