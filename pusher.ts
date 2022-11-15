import Pusher from "pusher";
import ClientPusher from "pusher-js";

//:> * Implementing Pusher Server interface *

export const serverPusher = new Pusher({
  appId: process.env.SERVER_PUSHER_APP_ID!,
  key: process.env.SERVER_PUSHER_KEY!,
  secret: process.env.SERVER_PUSHER_SECRET!,
  cluster: "eu",
  useTLS: true
});

//: Public ClientId and Cluster
export const clientPusher = new ClientPusher("public_app_key", {
  cluster: 'eu',
  forceTLS: true
});
