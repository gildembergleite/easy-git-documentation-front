import { Typography } from '@/components/typography'
import Link from 'next/link'
import { GithubIcon } from '../icons/github'
import { RustIcon } from '../icons/rust'

export function IntroductionSection() {
  return (
    <>
      <Typography.H2>Introdução</Typography.H2>
      <Typography.Paragraph>
        Easy Git é uma aplicação de linha de comando projetada para simplificar
        a gestão de usuários e configurações do Git. Ele permite que os usuários
        configurem facilmente as configurações de usuário globais e locais do
        Git, criem e atualizem arquivos de configuração e gerenciem a instalação
        do Git. Esta aplicação é especialmente útil para desenvolvedores que
        precisam alternar entre vários perfis de usuário Git na mesma máquina.
      </Typography.Paragraph>
      <Typography.H3>Links oficiais</Typography.H3>
      <div className="flex items-center gap-2">
        <RustIcon />
        <Typography.Paragraph>
          Rust crate:{' '}
          <Link
            href={'https://crates.io/crates/easy-git'}
            className="underline hover:text-primary"
          >
            Easy Git
          </Link>
        </Typography.Paragraph>
      </div>
      <div className="flex items-center gap-2">
        <GithubIcon />
        <Typography.Paragraph>
          Repositório GitHub:{' '}
          <Link
            href={'https://github.com/gildembergleite/easy-git'}
            className="underline hover:text-primary"
          >
            Easy Git
          </Link>
        </Typography.Paragraph>
      </div>
    </>
  )
}
