/**
 * OCOP Vietnam - Development Server
 * Supports clean URLs, static files, 404 fallback
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

// MIME types
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.map': 'application/json',
};

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return MIME_TYPES[ext] || 'application/octet-stream';
}

function resolveCleanUrl(requestPath) {
  // Remove query string and hash
  let cleanPath = requestPath.split('?')[0].split('#')[0];
  
  // Normalize path
  cleanPath = cleanPath.replace(/\/+/g, '/');
  
  // If path ends with /, try index.html
  if (cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }
  
  // Try exact file match first
  let filePath = path.join(ROOT_DIR, cleanPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return filePath;
  }
  
  // Try with .html extension
  filePath = path.join(ROOT_DIR, cleanPath + '.html');
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return filePath;
  }
  
  // Try index.html in directory
  filePath = path.join(ROOT_DIR, cleanPath, 'index.html');
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return filePath;
  }
  
  // Dynamic slug routing for detail pages
  // Map category paths to their detail template
  const slugRouteMap = {
    '/san-pham-ocop/': 'san-pham-ocop/tra-dinh-ngoc-tan-cuong/index.html',
    '/cau-chuyen-ocop/': 'cau-chuyen-ocop/giu-lua-nghe-sao-che-tan-cuong/index.html',
    '/diem-den-du-lich/': 'diem-den-du-lich/tinh-thai-nguyen/index.html',
    '/chu-the-ocop/': 'chu-the-ocop/hop-tac-xa-tra-tan-cuong-thai-nguyen/index.html',
    '/ocop-hoi-nhap/': 'ocop-hoi-nhap/tiem-nang-dua-tra-va-thao-duoc-vao-eu/index.html',
    '/tin-tuc-su-kien/tin/': 'tin-tuc-su-kien/tin/hon-200-chu-the-tham-gia-tuan-le-san-pham-ocop-tai-ha-noi/index.html',
    '/tin-tuc-su-kien/su-kien/': 'tin-tuc-su-kien/su-kien/hoi-cho-gioi-thieu-san-pham-ocop-va-dac-san-vung-mien-2026/index.html',
  };
  
  for (const [prefix, template] of Object.entries(slugRouteMap)) {
    if (cleanPath.startsWith(prefix) && cleanPath !== prefix.slice(0, -1)) {
      // This is a detail page under this category
      const templatePath = path.join(ROOT_DIR, template);
      if (fs.existsSync(templatePath) && fs.statSync(templatePath).isFile()) {
        return templatePath;
      }
    }
  }
  
  // Special handling for nested routes like /san-pham-ocop/tra-dinh-ngoc-tan-cuong
  // Try to find index.html in the last segment directory
  const segments = cleanPath.split('/').filter(Boolean);
  if (segments.length > 1) {
    // Try each level
    for (let i = segments.length; i >= 1; i--) {
      const testPath = path.join(ROOT_DIR, ...segments.slice(0, i), 'index.html');
      if (fs.existsSync(testPath) && fs.statSync(testPath).isFile()) {
        return testPath;
      }
    }
  }
  
  return null;
}

function serve404(res) {
  const notFoundPath = path.join(ROOT_DIR, '404', 'index.html');
  if (fs.existsSync(notFoundPath)) {
    const content = fs.readFileSync(notFoundPath);
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(content);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html lang="vi">
      <head>
        <meta charset="utf-8">
        <title>404 - Trang không tìm thấy</title>
        <style>
          body { font-family: system-ui, sans-serif; text-align: center; padding: 4rem; background: #f9f9ff; color: #121c2c; }
          h1 { font-size: 8rem; color: #012d1d; margin: 0; }
          p { font-size: 1.5rem; color: #414844; margin: 1rem 0; }
          a { display: inline-block; margin-top: 2rem; padding: 1rem 2rem; background: #984724; color: white; text-decoration: none; border-radius: 0.5rem; }
        </style>
      </head>
      <body>
        <h1>404</h1>
        <p>Trang bạn tìm không tồn tại.</p>
        <a href="/">Về trang chủ</a>
      </body>
      </html>
    `);
  }
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const requestPath = parsedUrl.pathname;
  
  // Security: prevent directory traversal
  if (requestPath.includes('..')) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    return res.end('Forbidden');
  }

  // Resolve clean URL
  const filePath = resolveCleanUrl(requestPath);
  
  if (filePath) {
    const content = fs.readFileSync(filePath);
    const mimeType = getMimeType(filePath);
    res.writeHead(200, { 'Content-Type': mimeType });
    res.end(content);
  } else {
    serve404(res);
  }
});

server.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════════════════════════╗
║  OCOP Vietnam Digital Platform - Development Server          ║
║  Running at: http://localhost:${PORT}                              ║
║  Press Ctrl+C to stop                                         ║
╚══════════════════════════════════════════════════════════════╝
  `);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down server...');
  server.close(() => process.exit(0));
});

process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
});