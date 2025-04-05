<?php
/**
 * Block styles.
 *
 * @package gsxr777
 * @since 1.0.0
 */

/**
 * Register block styles
 *
 * @since 1.0.0
 *
 * @return void
 */
function gsxr777_register_block_styles() {

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/button',
		array(
			'name'  => 'gsxr777-flat-button',
			'label' => __( 'Flat button', 'gsxr777' ),
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/list',
		array(
			'name'  => 'gsxr777-list-underline',
			'label' => __( 'Underlined list items', 'gsxr777' ),
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/group',
		array(
			'name'  => 'gsxr777-box-shadow',
			'label' => __( 'Box shadow', 'gsxr777' ),
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/column',
		array(
			'name'  => 'gsxr777-box-shadow',
			'label' => __( 'Box shadow', 'gsxr777' ),
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/columns',
		array(
			'name'  => 'gsxr777-box-shadow',
			'label' => __( 'Box shadow', 'gsxr777' ),
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/details',
		array(
			'name'  => 'gsxr777-plus',
			'label' => __( 'Plus & minus', 'gsxr777' ),
		)
	);
}
add_action( 'init', 'gsxr777_register_block_styles' );

/**
 * This is an example of how to unregister a core block style.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/
 * @see https://github.com/WordPress/gutenberg/pull/37580
 *
 * @since 1.0.0
 *
 * @return void
 */
function gsxr777_unregister_block_style() {
	wp_enqueue_script(
		'gsxr777-unregister',
		get_stylesheet_directory_uri() . '/assets/js/unregister.js',
		array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ),
		GSXR777_VERSION,
		true
	);
}
add_action( 'enqueue_block_editor_assets', 'gsxr777_unregister_block_style' );
