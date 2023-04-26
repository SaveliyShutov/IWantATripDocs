import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Хочу в Поездку',
  description: 'Крутой инструмент',
  lang: 'ru-RU',
  themeConfig: {
    nav: [
      { text: 'Документы', link: '/privacy/main' },
      { text: 'Обучение', link: '/education/main' },
      { text: 'О проекте', link: '/about/main' },
    ],
    sidebar: {
      '/privacy/': [
        {
          text: 'Документы',
          items: [
            
            { text: 'Оферта', link: '/privacy/oferta.md' },
            { text: 'Агентский договор', link: '/privacy/agentDocs.md' },
            { text: 'Согласие на обработку персональных данных', link: '/privacy/agreement.md' }
          ]
        }
      ],
      '/about/': [
        {
          text: 'О проекте',
          items: [
            
            { text: 'Вопросы', link: '/guide/' },
            { text: 'Поддержка', link: '/guide/one' },
            { text: 'Контакты', link: '/guide/two' }
          ]
        }
      ],
      '/education/': [
        {
          text: 'Обучение',
          items: [
            
            { text: 'Создать поездку', link: '/guide/' },
            { text: 'Регистрация', link: '/guide/one' },
          ]
        }
      ],
    }
  }
})
