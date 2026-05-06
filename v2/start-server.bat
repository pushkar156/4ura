@echo off
echo Starting AURA Menu Server...
echo Open your browser to: http://localhost:8000/menu.html
echo Press Ctrl+C to stop the server
cd /d "%~dp0"
python -m http.server 8000
pause
