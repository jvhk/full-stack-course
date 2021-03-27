class HomeController {
  async index(req, res) {
    res.json('Index da home');
  }
}

export default new HomeController();
