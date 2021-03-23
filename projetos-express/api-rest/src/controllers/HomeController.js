import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Joao',
      sobrenome: 'Vitor',
      email: 'joao@email.com',
      idade: 20,
      peso: 200,
      altura: 1.9,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
