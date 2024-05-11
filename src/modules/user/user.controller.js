import userManager from "./user.manager.js";

export default class UserController {
  async payment(req, res) {
    try {
      const result = await new userManager().payment(req.body,res);
      if (result.success == false) {
        res.status(500).send(result);
      } else {
        res.status(201).send(result);
      }
    } catch (error) {
      console.log("Controller Error", error);
      res.status(500).send(error);
    }
  }

  async paymentSuccess(req, res) {
    try {
      console.log("body Data ", req.body);
      await new userManager().paymentSuccess(req.body,res);
    } catch (error) {
      console.log("Controller Error", error);
      res.status(500).send(error);
    }
  }

  async getReceipt(req, res) {
    try {
      const customerId = req.params.customerId;
      const result = await new userManager().getReceipt(customerId);
      if (result.success == false) {
        res.status(500).send(result);
      } else {
        res.status(201).send(result);
      }
    } catch (error) {
      console.log("Controller Error", error);
      res.status(500).send(error);
    }
  }
}
