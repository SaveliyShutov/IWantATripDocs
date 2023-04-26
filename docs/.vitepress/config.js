import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Города и Веси',
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
            
            { text: 'Вопросы', link: '/about/questions.md' },
            { text: 'Поддержка', link: '/about/support.md' },
            { text: 'Контакты', link: '/about/contacts.md' }
          ]
        }
      ],
      '/education/': [
        {
          text: 'Обучение',
          items: [
            
            { text: 'Создать поездку', link: '/education/create-trip.md' },
            { text: 'Регистрация', link: '/education/reg.md' },
          ]
        }
      ],
    }
  }
})
