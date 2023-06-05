<?php
class Seogtp_gutenberg_blocks
{
	protected $loader;
	protected $plugin_name;
	protected $version;
	public function __construct()
	{
		if (defined('SEOGTP_GUTENBERG_BLOCKS_VERSION')) {
			$this->version = SEOGTP_GUTENBERG_BLOCKS_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->plugin_name = 'seogtp_gutenberg_blocks';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_public_hooks();
		$this->define_shared_hooks();
	}
	private function load_dependencies()
	{

		require_once plugin_dir_path(dirname(__FILE__)) . 'includes/class-seogtp_gutenberg_blocks-loader.php';
		require_once plugin_dir_path(dirname(__FILE__)) . 'includes/class-seogtp_gutenberg_blocks-i18n.php';
		require_once plugin_dir_path(dirname(__FILE__)) . 'admin/class-seogtp_gutenberg_blocks-admin.php';
		require_once plugin_dir_path(dirname(__FILE__)) . 'public/class-seogtp_gutenberg_blocks-public.php';
		require_once plugin_dir_path(dirname(__FILE__)) . 'common/class-seogtp_gutenberg_blocks_shared.php';
		$this->loader = new Seogtp_gutenberg_blocks_Loader();
	}
	private function set_locale()
	{

		$plugin_i18n = new Seogtp_gutenberg_blocks_i18n();

		$this->loader->add_action('plugins_loaded', $plugin_i18n, 'load_plugin_textdomain');
	}
	private function define_shared_hooks()
	{
		$plugin_shared = new Seogtp_gutenberg_blocks_Shared($this->get_plugin_name(), $this->get_version());

		$this->loader->add_action('admin_enqueue_scripts', $plugin_shared, 'enqueue_shared_styles');
		$this->loader->add_action('wp_enqueue_scripts', $plugin_shared, 'enqueue_shared_styles');
	}
	private function define_admin_hooks()
	{

		$plugin_admin = new Seogtp_gutenberg_blocks_Admin($this->get_plugin_name(), $this->get_version());

		$this->loader->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_styles');
		$this->loader->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts');


		// 文章编辑页时加载js
		$this->loader->add_action('enqueue_block_editor_assets', $plugin_admin, 'load_js_edit_page');
		// 注册一个新的块目录
		$this->loader->add_filter('block_categories', $plugin_admin, 'myplugin_block_category', 10, 2);
	}
	private function define_public_hooks()
	{

		$plugin_public = new Seogtp_gutenberg_blocks_Public($this->get_plugin_name(), $this->get_version());

		$this->loader->add_action('wp_enqueue_scripts', $plugin_public, 'enqueue_styles');
		$this->loader->add_action('wp_enqueue_scripts', $plugin_public, 'enqueue_scripts');
	}

	public function run()
	{
		$this->loader->run();
	}
	public function get_plugin_name()
	{
		return $this->plugin_name;
	}
	public function get_loader()
	{
		return $this->loader;
	}
	public function get_version()
	{
		return $this->version;
	}
}
