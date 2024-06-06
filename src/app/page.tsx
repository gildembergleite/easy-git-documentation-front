import { GitIcon } from '@/components/icons/git'
import { GithubIcon } from '@/components/icons/github'
import { FeaturesDetailsSection } from '@/components/sections/features-details'
import { HowEasyGitWorksSection } from '@/components/sections/how-easy-git-works'
import { InstallationSection } from '@/components/sections/installation'
import { IntroductionSection } from '@/components/sections/introduction'
import { WhatIsThisSection } from '@/components/sections/what-is-this'
import { WhyEasyGitSection } from '@/components/sections/why-easy-git'
import { Typography } from '@/components/typography'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-6xl min-h-screen justify-start items-center bg-muted">
      <header className="py-12">
        <Typography.H1 className="flex items-center gap-2">
          <GitIcon className="w-9 h-9 lg:w-12 lg:h-12" />
          Easy Git{' '}
          <sub className="text-xl lg:text-2xl">
            <sub>by Rust</sub>
          </sub>
        </Typography.H1>
      </header>
      <main className="w-full px-6 space-y-4 py-4">
        <IntroductionSection />
        <WhatIsThisSection />
        <WhyEasyGitSection />
        <InstallationSection />
        <HowEasyGitWorksSection />
        <FeaturesDetailsSection />
      </main>
      <footer className="flex flex-col justify-center items-center w-full py-12 gap-2">
        <p>
          Feito com &hearts; por{' '}
          <Link href={'https://gildembergleite.com.br'} target="_blank">
            Gildemberg Leite
          </Link>
        </p>
        <p className="flex items-center gap-2">
          <GithubIcon />
          <Link
            href={'https://github.com/gildembergleite/easy-git'}
            target="_blank"
          >
            Repositório do Projeto
          </Link>
        </p>
      </footer>
    </div>
  )
}
