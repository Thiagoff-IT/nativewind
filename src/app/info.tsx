import React, { useEffect, useState } from 'react';
import { Informacao } from '../interface/IUser';
import { fetchInformacoes } from '../service/api';

const Informacoes: React.FC = () => {
  const [informacoes, setInformacoes] = useState<Informacao[]>([]);

  useEffect(() => {
    fetchInformacoes().then(data => setInformacoes(data));
  }, []);

  return (
    <div>
      <h1>Informações</h1>
      <ul>
        {informacoes.map(info => (
          <li key={info.id}>
            <h2>{info.titulo}</h2>
            <p>{info.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Informacoes;
