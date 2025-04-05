<?php
/*
* Plugin Name: GSXR777 Dark Mode
* Description: A simple dark mode block for Theme GSXR777.
* Plugin URI: https://wln.su/gsxr777-dark-mode-block
* Requires at least: 6.4
* Requires PHP: 7.4
* Version: 1.0
* Author: gsxr777
* Author URI: https://wln.su
* License: GPL-2.0-or-later
* License URI: https://www.gnu.org/licenses/gpl-2.0.html
* Text Domain: gsxr777-dark-mode-block
*/

add_action('init', function () {
    wp_register_script(
        'gsxr777-dark-mode-block',
        plugins_url('gutenberg-plugin-activation.js', __FILE__),
        ['wp-blocks', 'wp-element'],
        filemtime(plugin_dir_path(__FILE__) . 'gutenberg-plugin-activation.js')
    );

    wp_register_style(
        'gsxr777-dark-mode-style',
        plugins_url('gsxr777-dark-mode.css', __FILE__),
        [],
        filemtime(plugin_dir_path(__FILE__) . 'gsxr777-dark-mode.css')
    );

    register_block_type('gsxr777/dark-mode', [
        'editor_script' => 'gsxr777-dark-mode-block',
        'style' => 'gsxr777-dark-mode-style',
    ]);
});

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_script(
        'gsxr777-dark-mode',
        plugins_url('gsxr777-dark-mode.js', __FILE__),
        ['jquery'],
        filemtime(plugin_dir_path(__FILE__) . 'gsxr777-dark-mode.js'),
        true
    );

    wp_enqueue_style(
        'gsxr777-dark-mode',
        plugins_url('gsxr777-dark-mode.css', __FILE__),
        [],
        filemtime(plugin_dir_path(__FILE__) . 'gsxr777-dark-mode.css')
    );
});
