const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("App Node.js en producción 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime()
  });
});

// --- ESTA ES LA PARTE QUE FALTABA ---
// Solo iniciamos el servidor si este archivo se ejecuta directamente (no en tests)
if (require.main === module) {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(Server running on port ${port});
    });
}

module.exports = app;