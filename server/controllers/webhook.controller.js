// webhook.controller.js
const clerkWebhook = (req, res) => {
  console.log("📨 Webhook received");
  res.status(200).send("Webhook OK");
};

export default clerkWebhook;
