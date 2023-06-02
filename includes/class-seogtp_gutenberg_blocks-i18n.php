<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https:// 
 * @since      1.0.0
 *
 * @package    Seogtp_gutenberg_blocks
 * @subpackage Seogtp_gutenberg_blocks/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Seogtp_gutenberg_blocks
 * @subpackage Seogtp_gutenberg_blocks/includes
 * @author       <447494332@qq.com>
 */
class Seogtp_gutenberg_blocks_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'seogtp_gutenberg_blocks',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
