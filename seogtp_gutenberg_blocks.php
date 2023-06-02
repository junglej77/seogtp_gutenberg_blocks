<?php

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
