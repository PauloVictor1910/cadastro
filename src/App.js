import React, { useState } from "react";
import "./styles.css";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [perfil, setPerfil] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [data, setData] = useState("");
  const [confirmaSenha, setconfirmaSenha] = useState("");

  return (
    <div className="container">
      <div className="form-image"></div>
      <div className="form">
        <form action="#">
          <div className="form-header">
            <div className="title">
              <h1>Cadastre-se</h1>
            </div>
            <div className="login-button">
              <button>
                <a href="#">Entrar</a>
              </button>
            </div>
          </div>

          <div className="input-group">
            <div className="input-box">
              <label htmlFor="perfil">Nome de Usuário</label>
              <input
                placeholder="Digite seu nome de usuário"
                required
                id="perfil"
                value={perfil}
                onChange={(e) => setPerfil(e.target.value)}
                type="text"
                name="perfil"
              />
            </div>

            <div className="input-box">
              <label htmlFor="nome">Primeiro Nome</label>
              <input
                placeholder="Digite seu primeiro nome"
                required
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                type="text"
                name="nome"
              />
            </div>

            <div className="input-box">
              <label htmlFor="sobrenome">Sobrenome</label>
              <input
                placeholder="Digite seu sobrenome"
                required
                id="sobrenome"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
                type="text"
                name="sobrenome"
              />
            </div>

            <div className="input-box">
              <label htmlFor="data">Data de Nascimento</label>
              <input id="data" type="date" name="data" required />
              <input value={data} onChange={(e) => setData(e.target.value)} />
            </div>

            <div className="input-box">
              <label htmlFor="email">E-mail</label>
              <input
                placeholder="Digite seu e-mail"
                required
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-box">
              <label htmlFor="telefone">Celular</label>
              <input
                placeholder="(xx) xxxx-xxxx"
                required
                id="telefone"
                type="tel"
                name="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>

            <div className="input-box">
              <label htmlFor="senha">Senha</label>
              <input
                placeholder="Digite sua senha"
                required
                id="senha"
                type="password"
                name="senhha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <div className="input-box">
              <label htmlFor="confirmaSenha">Confirme sua Senha</label>
              <input
                placeholder="Digite sua senha novamente"
                required
                id="confirmaSenha"
                type="password"
                name="confirmaSenha"
                value={confirmaSenha}
                onChange={(e) => setconfirmaSenha(e.target.value)}
              />
            </div>
          </div>

          <div className="gender-inputs">
            <div className="gender-title">
              <h6>Tipo de Usuário:</h6>
            </div>

            <div className="gender-group">
              <div className="gender-input">
                <input id="female" type="radio" name="gender" />
                <label htmlFor="female">Professor</label>
              </div>

              <div className="gender-input">
                <input id="male" type="radio" name="gender" />
                <label htmlFor="male">Aluno</label>
              </div>

              <div className="gender-input">
                <input id="others" type="radio" name="gender" />
                <label htmlFor="others">Instituição</label>
              </div>
            </div>
          </div>

          <div className="continue-button">
            <button>
              <a href="#">Continuar</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
