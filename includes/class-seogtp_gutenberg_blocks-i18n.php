<?php
class Seogtp_gutenberg_blocks_i18n
{
	public function load_plugin_textdomain()
	{

		load_plugin_textdomain(
			'seogtp_gutenberg_blocks',
			false,
			dirname(dirname(plugin_basename(__FILE__))) . '/languages/'
		);
	}
}
