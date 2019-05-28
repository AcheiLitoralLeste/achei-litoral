'use strict'

import React from 'react'

const App = () => (
  <div className='app'>
    <header>
      <div className='inner-header'>
        <div className='wrapper-logo'>
          <h1>
            <a className='logo-link' href='#'>
              <img src='images/logo_guia.svg' alt='Achei Litoral Leste' />
            </a>
          </h1>
        </div>
        <div className='header-tagline'>
          <p className='tagline-color'>O melhor guia de telefones e endereços da região</p>
        </div>
      </div>
    </header>
    <section className='container'>
      <section className='box-search'>
        <input type='text' name='filtro' className='input input-search' placeholder='Digite o nome da empresa' />
        <span className='icon-search fui-search' />
      </section>

      <article className=''>
        <div className='box-item'>
          <div className='box-title'>
            <h2 className='' data-js='company-name' />
          </div>
          <div className='box-body'>
            <ul>
              <li><strong>Endereço:</strong> </li>
              <li><strong>Bairro:</strong> </li>
              <li><strong>E-mail:</strong> </li>
              <li><strong>Telefone:</strong> <span data-js='company-phone' /></li>
              <li><strong>Categoria:</strong> </li>
            </ul>
          </div>
        </div>
      </article>

      <section className='wrapper-form'>
        <form name='addForm' action='/' data-js='form-register'>
          <fieldset>
            <label for=''>Empresa</label>
            <input className='input' />
          </fieldset>
          <fieldset>
            <label for=''>Endereço</label>
            <input className='input' />
          </fieldset>
          <fieldset>
            <label for=''>Bairro</label>
            <input className='input' />
          </fieldset>
          <fieldset>
            <label for=''>E-mail</label>
            <input className='input' />
          </fieldset>
          <fieldset className='fieldset-middle'>
            <label for=''>Telefone</label>
            <input className='input input-middle' />
          </fieldset>
          <fieldset className='fieldset-middle'>
            <label>Categoria</label>
            <select>
              <option value=''>Selecione uma categoria</option>
            </select>
          </fieldset>
          <button className='btn btn-primary' type='submit'>Cadastrar</button>
          <button className='btn btn-secundary'>Voltar</button>
        </form>
      </section>

    </section>
    <footer>
      <div className='container'>
        <a className='logo-footer' href=''>
          <img src='images/logo_guia2.svg' alt='' />
        </a>
        <p>Copyright © 2017 Achei Litoral Leste</p>
        <a className='link-github' href='' target='_blank'>
          <img src='images/github-logo.svg' alt='' />
        </a>
      </div>
    </footer>
  </div>
)

export default App
