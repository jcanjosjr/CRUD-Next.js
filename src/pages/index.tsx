import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import useClients from '../hooks/useClients'

export default function Home() {

  const {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente, 
    exibirTabela,
    tabelaVisivel  } = useClients() 


  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-gray-600 to-black
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
        <>
          <div className= "flex justify-end">
            <Botao className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
          </div>
          <Tabela clientes={clientes} 
            clienteSelecionado={selecionarCliente}
            clienteExcluido={excluirCliente}
          />
        </>
        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}          
          />
        )}
      </Layout>
    </div>
  )
}
