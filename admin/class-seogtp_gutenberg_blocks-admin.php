<?php
class Seogtp_gutenberg_blocks_Admin
{
	private $plugin_name;
	private $version;
	public function __construct($plugin_name, $version)
	{
		$this->plugin_name = $plugin_name;
		$this->version = $version;
	}
	public function enqueue_styles()
	{
		wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'css/seogtp_gutenberg_blocks-admin.css', array(), $this->version, 'all');
	}
	public function enqueue_scripts()
	{
		wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/seogtp_gutenberg_blocks-admin.js', array('jquery'), $this->version, false);
	}
	public function load_js_edit_page()
	{
		global $pagenow;
		// 检查是否在文章编辑页
		if ($pagenow === 'post.php' || $pagenow === 'post-new.php') {
			// 加载特定的 JavaScript 文件
			wp_enqueue_script('custom_block_script', plugin_dir_url(__FILE__) . 'js/block.js',   array('wp-element', 'wp-plugins', 'wp-edit-post'), $this->version, true);
		}
	}
	// Register a new block category
	public function myplugin_block_category($categories, $post)
	{
		return array_merge(
			array(
				array(
					'slug' => 'wellerpcb',
					'title' => 'wellerpcb编辑块',
					'icon' => 'wordpress'
				),
			),
			$categories
		);
	}
}
