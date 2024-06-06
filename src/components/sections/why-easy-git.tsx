import { Typography } from '@/components/typography'

export function WhyEasyGitSection() {
  return (
    <>
      <Typography.H2>Por que Utilizar o Easy Git</Typography.H2>

      <Typography.H3>Facilidade de Configuração</Typography.H3>
      <ul>
        <li>
          <strong>Automação das Tarefas de Configuração:</strong> O Easy Git
          automatiza muitas das tarefas tediosas associadas à configuração de
          usuários do Git, como a criação e atualização de arquivos de
          configuração e a definição de usuários globais e locais.
        </li>
        <li>
          <strong>Interação Intuitiva:</strong> Com uma interface de linha de
          comando fácil de usar, o Easy Git guia o usuário através das opções de
          configuração com prompts claros e menus interativos.
        </li>
      </ul>

      <Typography.H3>Gerenciamento Eficiente de Perfis</Typography.H3>
      <ul>
        <li>
          <strong>Múltiplos Perfis de Usuário:</strong> Ideal para
          desenvolvedores que trabalham em vários projetos e precisam alternar
          rapidamente entre diferentes perfis de usuário Git.
        </li>
        <li>
          <strong>Configurações Locais e Globais:</strong> Permite configurar
          perfis de usuário tanto a nível global quanto local, facilitando a
          personalização das configurações para diferentes repositórios.
        </li>
      </ul>

      <Typography.H3>Integração Simplificada com Git</Typography.H3>
      <ul>
        <li>
          <strong>
            Incorporando Configurações com{' '}
            <Typography.Code>includeIf</Typography.Code>:
          </strong>{' '}
          Utiliza a diretiva <Typography.Code>includeIf</Typography.Code> no
          arquivo global de configuração do Git, garantindo que as configurações
          corretas sejam aplicadas automaticamente para cada projeto.
        </li>
        <li>
          <strong>
            Criação e Manutenção do{' '}
            <Typography.Code>.easy-git-config</Typography.Code>:
          </strong>{' '}
          Cria e mantém o arquivo{' '}
          <Typography.Code>.easy-git-config</Typography.Code> no diretório
          atual, permitindo que cada projeto tenha suas próprias configurações
          de usuário Git.
        </li>
      </ul>

      <Typography.H3>Instalação Automatizada do Git</Typography.H3>
      <ul>
        <li>
          <strong>Detecção e Instalação do Git:</strong> Verifica se o Git está
          instalado no sistema e, caso não esteja, oferece a opção de instalá-lo
          automaticamente, adaptando-se ao sistema operacional do usuário
          (Windows, macOS, Linux).
        </li>
        <li>
          <strong>Redução de Barreiras para Iniciantes:</strong> Simplifica o
          processo de instalação do Git, especialmente útil para desenvolvedores
          iniciantes que podem não estar familiarizados com os comandos
          necessários para instalar o Git manualmente.
        </li>
      </ul>

      <Typography.H3>Melhor Organização e Manutenção</Typography.H3>
      <ul>
        <li>
          <strong>Centralização das Configurações:</strong> Ao utilizar um
          arquivo central de configuração para cada projeto, o Easy Git ajuda a
          manter uma organização clara e separada das configurações de usuário
          para cada repositório.
        </li>
        <li>
          <strong>Facilidade na Manutenção:</strong> Atualizar ou remover
          configurações é simples e direto, reduzindo a possibilidade de erros e
          inconsistências.
        </li>
      </ul>

      <Typography.H3>Economia de Tempo</Typography.H3>
      <ul>
        <li>
          <strong>Processo Rápido e Eficiente:</strong> Automatiza a
          configuração de usuários Git, economizando tempo precioso que pode ser
          gasto em desenvolvimento.
        </li>
        <li>
          <strong>Redução de Erros Manuais:</strong> Minimiza a necessidade de
          edição manual de arquivos de configuração, reduzindo a chance de erros
          e inconsistências.
        </li>
      </ul>

      <Typography.H3>Flexibilidade</Typography.H3>
      <ul>
        <li>
          <strong>Personalização:</strong> Permite personalizar as configurações
          de usuário Git de acordo com as necessidades específicas de cada
          projeto.
        </li>
        <li>
          <strong>Adaptabilidade:</strong> Funciona em diversos sistemas
          operacionais (Windows, macOS, Linux), adaptando-se às diferentes
          necessidades de desenvolvimento.
        </li>
      </ul>
    </>
  )
}
