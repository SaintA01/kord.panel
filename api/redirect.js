export default function redirect(req, res) {
  const path = req.url;
  const redirectUrl = `http://ptero.kord.live${path}`;
  
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="refresh" content="3; url=${redirectUrl}">
        <title>Redirecting to Kord Panel</title>
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                margin: 0;
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                color: white;
                text-align: center;
            }
            .container {
                background: rgba(255,255,255,0.1);
                padding: 2rem;
                border-radius: 12px;
                backdrop-filter: blur(10px);
            }
            h1 {
                margin-bottom: 1rem;
            }
            .spinner {
                border: 3px solid rgba(255,255,255,0.3);
                border-top: 3px solid white;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                animation: spin 1s linear infinite;
                margin: 0 auto 1rem;
            }
            .button {
                background: white;
                color: #667eea;
                padding: 10px 20px;
                border: none;
                border-radius: 6px;
                font-weight: 500;
                cursor: pointer;
                margin-top: 1rem;
                text-decoration: none;
                display: inline-block;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="spinner"></div>
            <h1>Kord Panel</h1>
            <p>Redirecting to your server...</p>
            <button class="button" onclick="window.location.href='${redirectUrl}'">
                Click to Redirect Now
            </button>
        </div>
    </body>
    </html>
  `);
}
