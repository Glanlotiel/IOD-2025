const path = require("path");

const getAdminPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/admin.html"));
};

const getServerStatus = (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime().toFixed(1) + "s",
    timestamp: new Date().toISOString(),
  });
};

module.exports = { getAdminPage, getServerStatus };
