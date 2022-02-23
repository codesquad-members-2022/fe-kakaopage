import app from "./server.js";

const PORT = 4000;

const handleListening = () =>
  console.log(`🐶Server listening on port http://localhost:${PORT}`);

const init = () => app.listen(PORT, handleListening);

init();
