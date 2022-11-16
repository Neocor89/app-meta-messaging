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

//: Public ClientId
export const clientPusher = new ClientPusher("076673cbec2761022ceb", {
  cluster: 'eu',
  forceTLS: true
});

