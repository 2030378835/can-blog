// // 根据pages文件夹自动生成路由，使用vue工程化
import { withSidebar } from 'vitepress-sidebar';

const vitePressSidebarOptions1 = {
  // VitePress Sidebar's options here...
  documentRootPath: '/docs/pages/docs/',
  collapsed: false,
  capitalizeFirst: true,
  debugPrint: true,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true
};

const vitePressSidebarOptions = [
  {
    documentRootPath: '/docs/pages/',
    scanStartPath: 'docs',
    resolvePath: '/pages/docs/',
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true

  },
  {
    documentRootPath: '/docs/pages/',
    scanStartPath: 'user',
    resolvePath: '/pages/user/',
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
  }
]
/**
 * @param items 路由
 * @param prefix 需要添加的前缀
 * @returns 
 */
function addPrefixToLinks(items: any[], prefix: string): any[] {
  items.forEach(item => {
    if (item.link) {
      item.link = prefix + item.link;
    }
    if (item.items && Array.isArray(item.items)) {
      addPrefixToLinks(item.items, prefix);
    }
  });
  return items
}

/**
 * @param options 侧边配置
 * @returns 
 */
const getSidebar = (options={}) : any => {
  const sidebar = withSidebar(options, vitePressSidebarOptions);
  // const reRenderSidebar = addPrefixToLinks(sidebar.themeConfig.sidebar, '/pages/docs');
  // sidebar.themeConfig.sidebar = reRenderSidebar;
  return sidebar;
}

export { getSidebar };