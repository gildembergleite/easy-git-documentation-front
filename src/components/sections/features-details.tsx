import { Typography } from '@/components/typography'

export function FeaturesDetailsSection() {
  return (
    <>
      <Typography.H2>Detalhamento das Funções</Typography.H2>

      <Typography.H3>1. Instalar o git nessa máquina</Typography.H3>
      <Typography.Paragraph>
        Se o Git não estiver instalado na sua máquina, esta opção irá guiá-lo
        através do processo de instalação com base no seu sistema operacional. A
        aplicação detectará o seu sistema operacional e executará os comandos de
        instalação apropriados para Windows, macOS ou Linux.
      </Typography.Paragraph>

      <Typography.H3>2. Atualizar configuração do easy-git</Typography.H3>
      <Typography.Paragraph>
        Esta opção atualiza o arquivo{' '}
        <Typography.Code>.easy-git-config</Typography.Code> existente no seu
        diretório atual com novas informações do usuário. Você será solicitado a
        inserir seu nome e e-mail, e o arquivo de configuração será atualizado
        de acordo.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Além disso, o Easy Git garante que a diretiva{' '}
        <Typography.Code>includeIf</Typography.Code> no arquivo{' '}
        <Typography.Code>~/.gitconfig</Typography.Code> esteja atualizada para
        apontar para o arquivo{' '}
        <Typography.Code>.easy-git-config</Typography.Code>.
      </Typography.Paragraph>

      <Typography.H3>
        3. Criar arquivo de configuração para o easy-git
      </Typography.H3>
      <Typography.Paragraph>
        Se não houver um arquivo{' '}
        <Typography.Code>.easy-git-config</Typography.Code> no seu diretório
        atual, esta opção cria um. Você será solicitado a inserir seu nome e
        e-mail, e um novo arquivo de configuração será criado com esses
        detalhes.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Após criar o arquivo, o Easy Git adiciona a diretiva{' '}
        <Typography.Code>includeIf</Typography.Code> no arquivo{' '}
        <Typography.Code>~/.gitconfig</Typography.Code> para garantir que as
        configurações sejam incluídas quando você estiver no diretório atual.
      </Typography.Paragraph>

      <Typography.H3>4. Configurar usuário global</Typography.H3>
      <Typography.Paragraph>
        Esta opção define a configuração de usuário global do Git. Você será
        solicitado a inserir seu nome e e-mail, e esses detalhes serão definidos
        como a configuração de usuário global do Git. Isso altera diretamente o
        arquivo <Typography.Code>~/.gitconfig</Typography.Code>.
      </Typography.Paragraph>

      <Typography.H3>5. Configurar usuário local</Typography.H3>
      <Typography.Paragraph>
        Esta opção define a configuração de usuário local do Git para o
        repositório atual. Você será solicitado a inserir seu nome e e-mail, e
        esses detalhes serão definidos como a configuração de usuário local do
        Git para o repositório no diretório atual.
      </Typography.Paragraph>

      <Typography.H3>6. Apagar configuração do easy-git</Typography.H3>
      <Typography.Paragraph>
        Esta opção exclui o arquivo{' '}
        <Typography.Code>.easy-git-config</Typography.Code> do seu diretório
        atual e remove a entrada correspondente{' '}
        <Typography.Code>includeIf</Typography.Code> do arquivo de configuração
        global do Git (<Typography.Code>~/.gitconfig</Typography.Code>). Você
        será solicitado a confirmar a exclusão antes de ela ser executada.
      </Typography.Paragraph>

      <Typography.H3>7. Apagar configuração global</Typography.H3>
      <Typography.Paragraph>
        Esta opção remove a configuração de usuário global do Git. As entradas{' '}
        <Typography.Code>user.name</Typography.Code> e{' '}
        <Typography.Code>user.email</Typography.Code> serão removidas do arquivo
        de configuração global do Git (
        <Typography.Code>~/.gitconfig</Typography.Code>). Você será solicitado a
        confirmar a exclusão antes de ela ser executada.
      </Typography.Paragraph>

      <Typography.H3>8. Apagar configuração local</Typography.H3>
      <Typography.Paragraph>
        Esta opção remove a configuração de usuário local do Git para o
        repositório atual. As entradas{' '}
        <Typography.Code>user.name</Typography.Code> e{' '}
        <Typography.Code>user.email</Typography.Code> serão removidas do arquivo
        de configuração local do Git. Você será solicitado a confirmar a
        exclusão antes de ela ser executada.
      </Typography.Paragraph>

      <Typography.H2>Exemplo de Uso</Typography.H2>
      <Typography.Paragraph>
        Para iniciar o Easy Git, basta executar a aplicação a partir do seu
        terminal:
      </Typography.Paragraph>
      <Typography.CodeBlock>easy-git</Typography.CodeBlock>
      <Typography.Paragraph>
        Você será apresentado a um menu de opções. Use as teclas de seta para
        navegar e pressione Enter para selecionar uma opção. Siga as instruções
        para configurar as configurações do Git ou gerenciar a instalação do Git
        conforme necessário.
      </Typography.Paragraph>
    </>
  )
}
