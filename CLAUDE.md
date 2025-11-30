# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Режим автономной работы

**Claude Code работает автономно по умолчанию!**

**Основной принцип:** 95% операций выполняются БЕЗ подтверждения пользователя.

**Спрашивать подтверждение ТОЛЬКО для:**
- Удаления файлов
- Изменения dependencies в package.json
- Деплоя в production
- Деструктивных git операций (`git reset --hard`, `git push --force`)

**Всё остальное - делай автономно!**

---

## Project Overview

**Проект:** Landing page для MCT System - регенеративная медицина.

**Тип:** React SPA (статический сайт)

**Хостинг:** GitHub Pages → https://metacell.ru

**Tech Stack:**
- React 19 + TypeScript
- Vite 7 (сборка)
- Tailwind CSS 4 (стили)
- shadcn/ui (компоненты)
- Framer Motion (анимации)
- wouter (роутинг)

---

## Команды разработки

```bash
# Разработка
npm run dev:client      # Запуск dev сервера (порт 5000)

# Сборка
npm run build:static    # Статическая сборка для GitHub Pages
npm run check           # Проверка TypeScript

# Деплой
# Автоматический через GitHub Actions при push в main
```

---

## Структура проекта

```
client/
├── src/
│   ├── components/     # React компоненты
│   │   ├── ui/         # shadcn/ui компоненты
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   └── ...
│   ├── pages/
│   │   └── Home.tsx    # Главная страница
│   ├── App.tsx         # Роутинг
│   └── main.tsx        # Точка входа
├── public/
│   ├── CNAME           # Домен metacell.ru
│   └── 404.html        # SPA redirect
└── index.html          # HTML шаблон
```

---

## Деплой

**Автоматический деплой:** При push в `main` → GitHub Actions → GitHub Pages

**Домен:** metacell.ru

**DNS записи (в панели регистратора):**
```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
```

---

## Conventional Commits

Используй формат:
```
<type>(<scope>): <description>

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Типы:**
- `feat` - новая функциональность
- `fix` - исправление бага
- `docs` - документация
- `style` - стили (CSS)
- `refactor` - рефакторинг
- `chore` - обслуживание

**Примеры:**
```bash
feat(hero): add animated background
fix(nav): correct mobile menu alignment
style(ui): update button hover states
docs: update README
```
