export default function requireAdmin(req, res, next) {
  // User must be logged in
  if (!req.auth) {
    return res.status(401).json({ error: "Not logged in" });
  }


  if (req.auth.role !== "admin") {
    return res.status(403).json({ error: "Admin access required" });
  }

  next();
}
