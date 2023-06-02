<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://grdtest.com:81
 * @since             1.0.0
 * @package           seogtp_gutenberg_blocks
 *
 * @wordpress-plugin
 * Plugin Name:       seogtp gutenberg blocks
 * Plugin URI:        https://grdtest.com:81
 * Description:       可视化网站编辑块
 * Version:           1.0.0
 * Author:            grdtest.com:81
 * Author URI:        https://grdtest.com:81
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       seogtp_gutenberg_blocks
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
	die;
}

define('SEOGTP_GUTENBERG_BLOCKS_VERSION', '1.0.0');

function activate_seogtp_gutenberg_blocks()
{
	require_once plugin_dir_path(__FILE__) . 'includes/class-seogtp_gutenberg_blocks-activator.php';
	Seogtp_gutenberg_blocks_Activator::activate();
}

function deactivate_seogtp_gutenberg_blocks()
{
	require_once plugin_dir_path(__FILE__) . 'includes/class-seogtp_gutenberg_blocks-deactivator.php';
	Seogtp_gutenberg_blocks_Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_seogtp_gutenberg_blocks');
register_deactivation_hook(__FILE__, 'deactivate_seogtp_gutenberg_blocks');

require plugin_dir_path(__FILE__) . 'includes/class-seogtp_gutenberg_blocks.php';

function run_seogtp_gutenberg_blocks()
{

	$plugin = new Seogtp_gutenberg_blocks();
	$plugin->run();
}
run_seogtp_gutenberg_blocks();
function getBlockJsonFiles($dir)
{
	$result = array();
	$files = scandir($dir); // 获取目录中的所有文件和文件夹
	foreach ($files as $file) {
		$filePath = $dir . '/' . $file;
		if ($file != '.' && $file != '..' && is_dir($filePath)) { // 如果是目录则递归获取其中的block.json文件
			$blockJsonFiles = getBlockJsonFiles($filePath);
			if (!empty($blockJsonFiles)) {
				$result = array_merge($result, $blockJsonFiles);
			}
		} else if (is_file($filePath) && $file == 'block.json') { // 如果是block.json文件则添加到结果数组中
			$result[] = $filePath;
		}
	}
	return $result;
}
add_action('init', function () {
	$blocks = getBlockJsonFiles(str_replace('\\', '/', plugin_dir_path(__FILE__)) . 'dist');
	foreach ($blocks as $block) {
		register_block_type_from_metadata(
			$block
		);
	}
});
