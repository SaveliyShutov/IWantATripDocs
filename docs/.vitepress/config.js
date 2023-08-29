import { defineConfig } from 'vitepress'

export default defineConfig({

  title: 'Города и веси',
  description: 'Информация проекта Гророда и веси',
  lang: 'ru-RU',

  themeConfig: {
    aside: false,
    logo: '/logo.png',
    nav: [
      { text: 'Документы', link: '/privacy/main' },
      { text: 'Обучение', link: '/education/main' },
      { text: 'О проекте', link: '/' },
    ],
    sidebar: {
      '/privacy/': [
        {
          text: 'Документы',
          link: '/privacy/main.md',
          items: [

            { text: 'Оферта', link: '/privacy/oferta.md' },
            { text: 'Агентский договор', link: '/privacy/agentDocs.md' },
            { text: 'Согласие на обработку персональных данных', link: '/privacy/agreement.md' }
          ]
        }
      ],
      '/': [
        {
          text: 'О проекте',
          link: '/',
          items: [

            { text: 'Вопросы', link: '/questions.md' },
            { text: 'Поддержка', link: '/support.md' },
            { text: 'Контакты', link: '/contacts.md' }
          ]
        }
      ],
      '/education/': [
        {
          text: 'Обучение',
          link:"/education/main.md",
          items: [

            { text: 'Создать поездку', link: '/education/create-trip.md' },
            { text: 'Регистрация', link: '/education/reg.md' },
          ]
        }
      ],
    }
  }
})
