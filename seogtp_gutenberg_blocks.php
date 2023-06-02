<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https:// 
 * @since             1.0.0
 * @package           Seogtp_gutenberg_blocks
 *
 * @wordpress-plugin
 * Plugin Name:       Seogtp Gutenberg Blocks
 * Plugin URI:        https:// 
 * Description:       中文块元素编辑插件
 * Version:           1.0.0
 * Author:             
 * Author URI:        https:// 
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       seogtp_gutenberg_blocks
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'SEOGTP_GUTENBERG_BLOCKS_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-seogtp_gutenberg_blocks-activator.php
 */
function activate_seogtp_gutenberg_blocks() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-seogtp_gutenberg_blocks-activator.php';
	Seogtp_gutenberg_blocks_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-seogtp_gutenberg_blocks-deactivator.php
 */
function deactivate_seogtp_gutenberg_blocks() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-seogtp_gutenberg_blocks-deactivator.php';
	Seogtp_gutenberg_blocks_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_seogtp_gutenberg_blocks' );
register_deactivation_hook( __FILE__, 'deactivate_seogtp_gutenberg_blocks' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-seogtp_gutenberg_blocks.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_seogtp_gutenberg_blocks() {

	$plugin = new Seogtp_gutenberg_blocks();
	$plugin->run();

}
run_seogtp_gutenberg_blocks();
