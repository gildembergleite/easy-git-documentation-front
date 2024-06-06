import { Typography } from '@/components/typography'

export function WhatIsThisSection() {
  return (
    <>
      <Typography.H2>Que tipo de aplicação é o Easy Git?</Typography.H2>

      <Typography.Paragraph>
        O Easy Git pode ser classificado como uma aplicação de{' '}
        <strong>gestão de configurações</strong> e{' '}
        <strong>ferramenta de linha de comando (CLI)</strong>. Mais
        especificamente, é uma ferramenta utilitária para desenvolvedores,
        voltada para a <strong>gerência de perfis de usuários Git</strong>.
      </Typography.Paragraph>

      <Typography.H3>Tipo de Aplicação</Typography.H3>
      <ul>
        <li>
          <strong>Ferramenta de Linha de Comando (CLI):</strong> O Easy Git é
          executado diretamente no terminal, utilizando comandos de linha de
          comando para interação com o usuário.
        </li>
        <li>
          <strong>Ferramenta de Gerenciamento de Configurações:</strong> Ele
          permite a configuração e gestão de perfis de usuário Git, facilitando
          a alternância entre diferentes configurações globais e locais.
        </li>
        <li>
          <strong>
            Ferramenta de Automação de Tarefas de Desenvolvimento:
          </strong>{' '}
          Automação de tarefas como configuração de usuário global e local do
          Git, criação e atualização de arquivos de configuração, e
          gerenciamento da instalação do Git.
        </li>
      </ul>

      <Typography.H3>Público-Alvo</Typography.H3>
      <ul>
        <li>
          <strong>Desenvolvedores:</strong> Especialmente aqueles que trabalham
          em múltiplos projetos e precisam alternar rapidamente entre diferentes
          perfis de usuário Git.
        </li>
        <li>
          <strong>Equipes de Desenvolvimento:</strong> Que precisam de uma
          maneira fácil de configurar e gerenciar usuários Git em um ambiente de
          desenvolvimento compartilhado.
        </li>
      </ul>

      <Typography.H3>Propósito</Typography.H3>
      <ul>
        <li>
          <strong>Simplificação da Configuração do Git:</strong> Facilitar a
          configuração de usuários globais e locais do Git, evitando a
          necessidade de editar manualmente os arquivos de configuração.
        </li>
        <li>
          <strong>Gerenciamento de Perfis de Usuário:</strong> Permitir a
          criação e alternância rápida entre diferentes perfis de usuário Git.
        </li>
        <li>
          <strong>Automatização de Tarefas de Configuração:</strong> Automatizar
          a inclusão de diretivas <Typography.Code>includeIf</Typography.Code>{' '}
          no arquivo de configuração global do Git para gerenciar configurações
          específicas por diretório.
        </li>
      </ul>

      <Typography.H3>Características</Typography.H3>
      <ul>
        <li>
          <strong>Criação e Atualização de Configurações:</strong> Facilita a
          criação e atualização de arquivos de configuração personalizados (
          <Typography.Code>.easy-git-config</Typography.Code>).
        </li>
        <li>
          <strong>Gestão de Usuários Globais e Locais:</strong> Permite a
          configuração rápida de usuários globais e locais do Git.
        </li>
        <li>
          <strong>Instalação Automatizada do Git:</strong> Oferece uma opção
          para instalar o Git se ele não estiver presente no sistema.
        </li>
        <li>
          <strong>Interação Simples com o Usuário:</strong> Utiliza menus
          interativos e prompts claros para guiar o usuário através das opções
          disponíveis.
        </li>
      </ul>

      <Typography.Paragraph>
        Ao categorizar o Easy Git, ele se destaca como uma ferramenta prática e
        eficiente para desenvolvedores que necessitam de uma solução
        simplificada para gerenciar suas configurações de usuário Git, tanto em
        nível global quanto local.
      </Typography.Paragraph>
    </>
  )
}
