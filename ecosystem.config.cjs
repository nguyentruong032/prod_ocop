/**
 * OCOP Vietnam - Enterprise Micro-Frontend PM2 Ecosystem
 *
 * Manages all 6 micro-frontend applications and API Gateway:
 * - ocop-web-shell (Port 3000): Host container & homepage
 * - ocop-stories (Port 3001): Stories micro-app (/cau-chuyen-ocop)
 * - ocop-tourism-destinations (Port 3002): Tourism micro-app (/diem-den-du-lich)
 * - ocop-news-events (Port 3003): News & Events micro-app (/tin-tuc-su-kien, /ocop-hoi-nhap)
 * - ocop-products (Port 3004): Products micro-app (/san-pham-ocop)
 * - ocop-api-gateway (Port 3006): Unified API Gateway (/api/*)
 *
 * Usage:
 *   pm2 start ecosystem.config.cjs
 *   pm2 stop ecosystem.config.cjs
 *   pm2 restart ecosystem.config.cjs
 *   pm2 reload ecosystem.config.cjs --update-env
 */

module.exports = {
  apps: [
    {
      name: 'ocop-web-shell',
      cwd: './apps/web-shell',
      script: 'node_modules/.bin/next',
      args: 'start -p 3000',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        DISABLE_WEB_SHELL_REWRITES: process.env.DISABLE_WEB_SHELL_REWRITES || 'false',
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3000,
        DISABLE_WEB_SHELL_REWRITES: 'false',
      },
    },
    {
      name: 'ocop-stories',
      cwd: './apps/ocop-stories',
      script: 'node_modules/.bin/next',
      args: 'start -p 3001',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3001,
      },
    },
    {
      name: 'ocop-tourism-destinations',
      cwd: './apps/tourism-destinations',
      script: 'node_modules/.bin/next',
      args: 'start -p 3002',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3002,
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3002,
      },
    },
    {
      name: 'ocop-news-events',
      cwd: './apps/news-events',
      script: 'node_modules/.bin/next',
      args: 'start -p 3003',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3003,
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3003,
      },
    },
    {
      name: 'ocop-products',
      cwd: './apps/products',
      script: 'node_modules/.bin/next',
      args: 'start -p 3004',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3004,
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3004,
      },
    },
    {
      name: 'ocop-api-gateway',
      cwd: './apps/api-gateway',
      script: 'node_modules/.bin/next',
      args: 'start -p 3006',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3006,
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3006,
      },
    },
  ],
};
