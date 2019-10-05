const { ServiceBroker } = require("moleculer");

const serviceTwoBroker = new ServiceBroker({
  nodeID: "towa-service-2",
  transporter: "NATS"
});

// Create the "products" service
serviceTwoBroker.createService({
  // Define service name
  name: "greeter2",

  actions: {
    // Define service action that returns the available products
    hello(ctx) {
      return {
        msg: "Hello from Greeter 2"
      };
    },
    heyGreeter1(ctx) {
      return ctx.call("greeter1.hello");
    }
  }
});

Promise.all([serviceTwoBroker.start()]);