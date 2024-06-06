import { Typography } from '@/components/typography'

export function HowEasyGitWorksSection() {
  return (
    <>
      <Typography.H2>Funcionamento do Easy Git</Typography.H2>

      <Typography.H3>
        Arquivo de Configuração{' '}
        <Typography.Code>.easy-git-config</Typography.Code>
      </Typography.H3>
      <Typography.Paragraph>
        O Easy Git utiliza um arquivo de configuração especial chamado{' '}
        <Typography.Code>.easy-git-config</Typography.Code>, que é criado no
        diretório atual do usuário. Este arquivo armazena informações
        específicas do usuário, como nome e e-mail, que são utilizadas para as
        configurações do Git.
      </Typography.Paragraph>

      <Typography.H3>
        Salvando <Typography.Code>includeIf</Typography.Code> no Arquivo de
        Configuração Global
      </Typography.H3>
      <Typography.Paragraph>
        Para garantir que o Git use as configurações armazenadas no arquivo{' '}
        <Typography.Code>.easy-git-config</Typography.Code>, o Easy Git adiciona
        uma diretiva <Typography.Code>includeIf</Typography.Code> no arquivo de
        configuração global do Git (
        <Typography.Code>~/.gitconfig</Typography.Code>). A diretiva{' '}
        <Typography.Code>includeIf</Typography.Code> instrui o Git a incluir
        configurações adicionais com base no diretório de trabalho atual.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Por exemplo, se o arquivo{' '}
        <Typography.Code>.easy-git-config</Typography.Code> estiver localizado
        no diretório <Typography.Code>/home/user/project</Typography.Code>, o
        Easy Git adicionará a seguinte diretiva ao arquivo{' '}
        <Typography.Code>~/.gitconfig</Typography.Code>:
      </Typography.Paragraph>
      <Typography.CodeBlock>
        {`[includeIf "gitdir:/home/user/project/"]`} <br />
        {'       '}path = /home/user/project/.easy-git-config
      </Typography.CodeBlock>
      <Typography.Paragraph>
        Isso garante que, ao trabalhar no diretório{' '}
        <Typography.Code>/home/user/project</Typography.Code>, o Git incluirá as
        configurações do arquivo{' '}
        <Typography.Code>.easy-git-config</Typography.Code> no seu ambiente de
        configuração.
      </Typography.Paragraph>
    </>
  )
}
