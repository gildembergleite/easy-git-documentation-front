import { Typography } from '@/components/typography'
import Link from 'next/link'

export function InstallationSection() {
  return (
    <>
      <Typography.H2>Instalação</Typography.H2>
      <Typography.H3>Pré-requisitos</Typography.H3>
      <Typography.Paragraph>
        Antes de instalar o Easy Git, certifique-se de que o Rust está instalado
        no seu sistema. Siga as instruções abaixo para instalar o Rust no seu
        sistema operacional.
      </Typography.Paragraph>

      <Typography.H4>Linux</Typography.H4>
      <ol>
        <li>Abra seu terminal.</li>
        <li>Instale o Rust usando o seguinte comando:</li>
      </ol>
      <Typography.CodeBlock>
        {`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`}
      </Typography.CodeBlock>
      <ol start={3}>
        <li>Siga as instruções na tela para completar a instalação.</li>
        <li>
          Certifique-se de que o Cargo (gerenciador de pacotes do Rust) está no
          seu PATH executando:
        </li>
      </ol>
      <Typography.CodeBlock>source $HOME/.cargo/env</Typography.CodeBlock>

      <Typography.H4>Windows</Typography.H4>
      <ol>
        <li>
          Baixe e execute o instalador do Rust a partir de{' '}
          <Link
            href="https://www.rust-lang.org/tools/install"
            target="_blank"
            className="underline"
          >
            rust-lang.org
          </Link>
          .
        </li>
        <li>Siga as instruções na tela para completar a instalação.</li>
        <li>
          Após a instalação, certifique-se de que o Cargo está no seu PATH
          reiniciando seu terminal ou prompt de comando.
        </li>
      </ol>

      <Typography.H4>macOS</Typography.H4>
      <ol>
        <li>Abra seu terminal.</li>
        <li>Instale o Rust usando o seguinte comando:</li>
      </ol>
      <Typography.CodeBlock>
        {`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`}
      </Typography.CodeBlock>
      <ol start={3}>
        <li>Siga as instruções na tela para completar a instalação.</li>
        <li>Certifique-se de que o Cargo está no seu PATH executando:</li>
      </ol>
      <pre>
        <Typography.Code>source $HOME/.cargo/env</Typography.Code>
      </pre>

      <Typography.H3>Instalando o Easy Git</Typography.H3>
      <Typography.Paragraph>
        Abra seu terminal ou prompt de comando e execute o comando abaixo:
      </Typography.Paragraph>
      <Typography.CodeBlock>{`cargo install easy-git`}</Typography.CodeBlock>

      <Typography.Paragraph>
        Este comando compilará a aplicação e a instalará no diretório bin do
        Cargo, tornando-a acessível a partir do seu terminal.
      </Typography.Paragraph>
    </>
  )
}
