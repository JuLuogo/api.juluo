const fs = require('fs');
const path = require('path');

// 需要迁移的目录映射
const dirMappings = [
  { src: 'detailed-character-analysis', dest: 'docs/detailed-character-analysis' },
  { src: 'resources', dest: 'docs/resources' },
  { src: 'tools', dest: 'docs/tools' }
];

// 需要特殊处理的文件
const specialFiles = [
  'README.md',
  '_sidebar.md',
  'custom.css',
  'index.html'
];

// 需要排除的文件
const excludeFiles = [
  'node_modules',
  '.git',
  'docs',
  'migrate_docs.js',
  'package.json'
];

function copyFile(srcPath, destPath) {
  try {
    const content = fs.readFileSync(srcPath, 'utf8');
    
    // 处理相对路径链接
    let processedContent = content
      .replace(/\(\.\.\/README\.md\)/g, '(/)')
      .replace(/\(\.\.\/detailed-character-analysis\/README\.md\)/g, '(/detailed-character-analysis/)')
      .replace(/\(\.\.\/resources\/README\.md\)/g, '(/resources/)')
      .replace(/\(\.\.\/tools\/README\.md\)/g, '(/tools/)')
      .replace(/\(\.\.\/.*?\.md\)/g, (match) => {
        // 处理相对路径的Markdown链接
        const relativePath = match.match(/\(\.\.\/(.*?\.md)\)/)[1];
        return `(/${relativePath})`;
      });
    
    // 确保目标目录存在
    const destDir = path.dirname(destPath);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    fs.writeFileSync(destPath, processedContent);
    console.log(`✓ 迁移: ${srcPath} -> ${destPath}`);
  } catch (error) {
    console.error(`✗ 迁移失败: ${srcPath}`, error.message);
  }
}

function migrateDirectory(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) {
    console.log(`跳过不存在的目录: ${srcDir}`);
    return;
  }
  
  const items = fs.readdirSync(srcDir);
  
  for (const item of items) {
    if (excludeFiles.includes(item)) continue;
    
    const srcPath = path.join(srcDir, item);
    const destPath = path.join(destDir, item);
    
    const stat = fs.statSync(srcPath);
    
    if (stat.isDirectory()) {
      // 递归处理子目录
      migrateDirectory(srcPath, destPath);
    } else if (item.endsWith('.md')) {
      // 迁移Markdown文件
      copyFile(srcPath, destPath);
    }
  }
}

// 主迁移函数
function main() {
  console.log('开始迁移文档到VuePress...\n');
  
  // 迁移主要目录
  for (const mapping of dirMappings) {
    console.log(`\n迁移目录: ${mapping.src} -> ${mapping.dest}`);
    migrateDirectory(mapping.src, mapping.dest);
  }
  
  console.log('\n文档迁移完成！');
}

// 执行迁移
main();