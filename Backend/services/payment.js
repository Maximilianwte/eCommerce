var braintree = require("braintree");

const keys = require("../config/keys");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: keys.braintreeMerchantId,
  publicKey: keys.braintreePublicKey,
  privateKey: keys.braintreePrivateKey
});
module.exports = app => {
  app.post("/api/checkout", (req, res) => {
    if (!req.body.id) {
    } else {
      gateway.clientToken.generate(
        {
          customerId: req.body.id
        },
        function(err, response) {
          // Send the clientToken of the transaction to the client.
          res.send(response.clientToken);
        }
      );
    }
  });

  app.post("/api/checkoutProcessTransaction", function(req, res) {
    var nonceFromTheClient = req.body.payment_method_nonce;
    // Use payment method nonce here
    gateway.transaction.sale(
      {
        amount: req.body.amount,
        paymentMethodNonce: nonceFromTheClient,
        options: {
          submitForSettlement: true
        }
      },
      function(err, result) {}
    );
  });
};
