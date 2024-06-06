import { Typography } from '@/components/typography'

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
    </>
  )
}
