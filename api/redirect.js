export default function redirect(req, res) {
  const path = req.url;
  const redirectUrl = `http://13.61.4.198${path}`;
  
  res.statusCode = 302;
  res.setHeader('Location', redirectUrl);
  res.end();
}
