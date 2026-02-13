# Sabrina Fergo | Arquitetura

Portfólio profissional de arquitetura desenvolvido com React, TypeScript e Tailwind CSS.

![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

---

## Descrição

Site portfólio minimalista e elegante para a arquiteta Sabrina Fergo, especializada em projetos residenciais de alto padrão e comerciais na região de Goiânia.

### Seções

- **Hero** — Apresentação visual com projeto destaque
- **Sobre** — Biografia profissional e diferenciais
- **Serviços** — Áreas de atuação (Residencial, Comercial, Reforma)
- **Portfólio** — Galeria de projetos selecionados
- **Instagram Feed** — Integração visual com redes sociais
- **Contato** — Formulário e informações de contato
- **WhatsApp Button** — Botão flutuante para contato direto

---

## Tecnologias

| Tecnologia   | Versão | Propósito   |
| ------------ | ------ | ----------- |
| React        | 19.x   | UI Library  |
| TypeScript   | 5.8    | Type Safety |
| Vite         | 6.x    | Build Tool  |
| Tailwind CSS | 3.x    | Styling     |
| Lucide React | 0.562  | Icons       |

---

## Instalação Local

```bash
# Clone o repositório
git clone https://github.com/Gust4dev/FergoArq.git

# Entre no diretório
cd FergoArq

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

O servidor iniciará em `http://localhost:3000`

---

## Scripts Disponíveis

| Comando           | Descrição                          |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Inicia servidor de desenvolvimento |
| `npm run build`   | Gera build de produção em `/dist`  |
| `npm run preview` | Preview do build de produção       |

---

## Deploy

O projeto está configurado para deploy automático na **Vercel**.

### Configuração Vercel

O arquivo `vercel.json` inclui:

- Build command: `npm run build`
- Output directory: `dist`
- Headers de segurança (X-Frame-Options, X-Content-Type-Options)
- Cache otimizado para assets estáticos

---

## Estrutura do Projeto

```
FergoArq/
├── components/
│   ├── Header.tsx        # Navegação fixa com menu mobile
│   ├── Hero.tsx          # Seção principal
│   ├── About.tsx         # Sobre a arquiteta
│   ├── Services.tsx      # Serviços oferecidos
│   ├── Portfolio.tsx     # Galeria de projetos
│   ├── InstagramFeed.tsx # Feed do Instagram
│   ├── Contact.tsx       # Formulário de contato
│   ├── Footer.tsx        # Rodapé
│   └── WhatsAppButton.tsx# Botão flutuante WhatsApp
├── hooks/
│   └── useRevealAnimation.ts # Animações de scroll
├── App.tsx               # Componente raiz
├── constants.ts          # Constantes centralizadas (contato, WhatsApp)
├── types.ts              # Definições TypeScript
├── index.tsx             # Entry point React
├── index.html            # Template HTML
├── index.css             # Estilos base + Tailwind
├── tailwind.config.js    # Configuração Tailwind
├── postcss.config.js     # Configuração PostCSS
├── vite.config.ts        # Configuração Vite
├── vercel.json           # Configuração Vercel
└── package.json
```

---

## Próximos Passos

- [ ] Implementar envio do formulário de contato
- [ ] Registrar domínio sabrinafergo.com.br
- [ ] Criar imagem OG dedicada (1200×630px)

---

## Contato

**Sabrina Fergo**  
📧 sabrinaarqeurb@gmail.com  
📱 +55 62 9652-4616  
📍 London Eye Office — Anápolis-GO

---

## Licença

Este projeto é privado e de uso exclusivo de Sabrina Fergo Arquitetura.
