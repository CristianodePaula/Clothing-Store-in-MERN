const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);
//const KEY = process.env.STRIPE_KEY
//const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId, // cria token de pagamento
      amount: req.body.amount,
      currency: "usd", // moeda
    },
    (stripeErr, stripeRes) => {   // retorno de sucesso ou erro no striper
      if (stripeErr) {
        res.status(500).json(stripeErr)
      } else {
        res.status(200).json(stripeRes)
      }
    }
  )
})

module.exports = router
