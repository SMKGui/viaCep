import axios from "axios";
import * as BoxInput from "../../Components/BoxInput";
import { ContainerForm, ContainerInput, ScrollForm } from "./style";
import { useState } from "react";

export function Home() {


  //useStates e variaveis
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [uf, setUf] = useState("");

  //useEffect e funções
  async function buscarCep() {
    try {
      const resposta = await axios.get(`https://api.postmon.com.br/v1/cep/${cep}`);
      setLogradouro(resposta.data.logradouro)
      setBairro(resposta.data.bairro)
      setCidade(resposta.data.cidade)
      setEstado(resposta.data.estado_info.nome)
      setUf(resposta.data.estado)

    } catch (error) {
      console.log("Error", error)
    }
  }

  return (
    <ScrollForm>
      <ContainerForm>
      <BoxInput.BoxInput
          onBlur={() => buscarCep()}
          textLabel="informar CEP"
          placeholder="Cep..."
          editable={true}
          keyType="numeric"
          maxLength={9}
          fieldValue={cep}
          onChangeText={(tx) => setCep(tx)}
        />
          <BoxInput.BoxInput
          textLabel="Logradouro"
          placeholder="Logradouro..."
          fieldValue={logradouro}
        />

        <BoxInput.BoxInput
          fieldValue={bairro}
          textLabel="Bairro"
          placeholder="Bairro..."
          editable={true}
        />
        <BoxInput.BoxInput
          fieldValue={cidade}
          textLabel="Cidade"
          placeholder="Cidade..."
          editable={true}
        />
        <ContainerInput>
          <BoxInput.BoxInput
            textLabel="Estado"
            placeholder="Estado..."
            fieldWidth={60}
            fieldValue={estado}
          />
          <BoxInput.BoxInput
            fieldValue={uf}
            textLabel="UF"
            placeholder="UF..."
            fieldWidth={20}
          />
        </ContainerInput>
      </ContainerForm>
    </ScrollForm>
  );
}