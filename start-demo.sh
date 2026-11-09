#!/bin/bash
# OCOP Vietnam - Startup Script
# Starts the development server and opens the browser
# Run from inside the ocop_demo directory

set -e

PORT=3000
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║  OCOP Vietnam Digital Platform - Starting Demo Server        ║"
echo "╚══════════════════════════════════════════════════════════════╝"

cd "$PROJECT_DIR"

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "📦 Node.js version: $(node --version)"
echo "📁 Serving from: $PROJECT_DIR"

# Check if server.js exists
if [ ! -f "server.js" ]; then
    echo "❌ server.js not found in $PROJECT_DIR"
    exit 1
fi

# Kill any existing server on the port
echo "🔄 Checking for existing server on port $PORT..."
if lsof -ti:$PORT > /dev/null 2>&1; then
    echo "⚠️  Killing existing process on port $PORT..."
    kill -9 $(lsof -ti:$PORT) 2>/dev/null || true
    sleep 1
fi

# Start the server in background
echo "🚀 Starting development server..."
node server.js &
SERVER_PID=$!

# Wait for server to be ready
echo "⏳ Waiting for server to start..."
for i in {1..10}; do
    if curl -s "http://localhost:$PORT" > /dev/null 2>&1; then
        echo "✅ Server is ready!"
        break
    fi
    sleep 1
done

# Check if server started successfully
if ! curl -s "http://localhost:$PORT" > /dev/null 2>&1; then
    echo "❌ Server failed to start"
    kill $SERVER_PID 2>/dev/null || true
    exit 1
fi

echo ""
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║  🎉 SERVER RUNNING SUCCESSFULLY!                              ║"
echo "║  📍 URL: http://localhost:$PORT                                 ║"
echo "║  ⌨️  Press Ctrl+C to stop the server                           ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Open browser
echo "🌐 Opening browser..."
if command -v xdg-open &> /dev/null; then
    xdg-open "http://localhost:$PORT" > /dev/null 2>&1 &
elif command -v gnome-open &> /dev/null; then
    gnome-open "http://localhost:$PORT" > /dev/null 2>&1 &
elif command -v kde-open &> /dev/null; then
    kde-open "http://localhost:$PORT" > /dev/null 2>&1 &
else
    echo "⚠️  Could not auto-open browser. Please open http://localhost:$PORT manually"
fi

# Trap Ctrl+C to kill server
cleanup() {
    echo ""
    echo "🛑 Shutting down server (PID: $SERVER_PID)..."
    kill $SERVER_PID 2>/dev/null || true
    wait $SERVER_PID 2>/dev/null || true
    echo "✅ Server stopped"
    exit 0
}

trap cleanup SIGINT SIGTERM

# Keep script running
wait $SERVER_PID