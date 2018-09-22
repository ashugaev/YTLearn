export default (state = skillsList, action) => {
  console.log('Тут')
  switch (action.type) {
    case "SKILL_ADD":
      console.log('Новый скил', action.newSkill)
      return [...state, action.newSkill];
    default:
      return state;
  }
};

const skillsList = [
  {
    name: "React",
    description:
      "React (иногда React.js или ReactJS) — JavaScript-библиотека[2] с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается, и поддерживается Facebook, Instagram, и сообществом отдельных разработчиков, и корпораций. React может использоваться для разработки одностраничных и мобильных приложений",
    icon:
      "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAxLjEzIiBoZWlnaHQ9Ijg5MC42NSIgdmlld0JveD0iMCAwIDEwMDEuMTMgODkwLjY1Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzAwZDhmZjt9LmNscy0ye2ZpbGw6bm9uZTtzdHJva2U6IzAwZDhmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MjRweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkFydGJvYXJkIDE8L3RpdGxlPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iNTA0LjU5IiBjeT0iNDQ0LjQ4IiByPSI4OS41NyIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTUwNC41OSwyNjIuMzdjMTIwLjI1LDAsMjMyLDE3LjI2LDMxNi4yLDQ2LjI2LDEwMS40OSwzNC45NCwxNjMuODgsODcuOSwxNjMuODgsMTM1Ljg1LDAsNTAtNjYuMTMsMTA2LjI0LTE3NS4xMSwxNDIuMzUtODIuNCwyNy4zLTE5MC44Miw0MS41NS0zMDUsNDEuNTUtMTE3LDAtMjI3Ljg3LTEzLjM4LTMxMS4xOC00MS44NS0xMDUuNDItMzYtMTY4LjkxLTkzLTE2OC45MS0xNDIsMC00Ny41Nyw1OS41Ny0xMDAuMTEsMTU5LjY0LTEzNUMyNjguNjgsMjgwLDM4My4xNiwyNjIuMzcsNTA0LjU5LDI2Mi4zN1oiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zNDYuMDYsMzU0YzYwLjA3LTEwNC4xNywxMzAuODMtMTkyLjMyLDE5OC0yNTAuODEsODEtNzAuNDYsMTU4LTk4LDE5OS41Ni03NC4xLDQzLjI5LDI1LDU5LDExMC4zNiwzNS44MywyMjIuODEtMTcuNTIsODUtNTkuMzQsMTg2LTExNi4zNywyODQuOTVDNjA0LjY0LDYzOC4xOCw1MzcuNjksNzI3LjUxLDQ3MS40LDc4NS40NWMtODMuODcsNzMuMzItMTY1LDk5Ljg1LTIwNy40Myw3NS4zNy00MS4yLTIzLjc3LTU3LTEwMS42My0zNy4yLTIwNS43NEMyNDMuNDgsNTY3LjExLDI4NS4zOSw0NTkuMTUsMzQ2LjA2LDM1NFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zNDYuMjEsNTM3LjA2QzI4Niw0MzMsMjQ0LjkyLDMyNy42NiwyMjcuODIsMjQwLjIzYy0yMC42MS0xMDUuMzMtNi0xODUuODcsMzUuNDYtMjA5LjksNDMuMjUtMjUsMTI1LjA4LDQsMjEwLjkzLDgwLjI0QzUzOS4xMiwxNjguMiw2MDUuNzcsMjU0Ljg5LDY2MywzNTMuNjksNzIxLjYsNDU1LDc2NS41NSw1NTcuNTksNzgyLjY1LDY0NGMyMS42MywxMDkuMjksNC4xMiwxOTIuNzktMzguMzEsMjE3LjM1LTQxLjE2LDIzLjgzLTExNi40OS0xLjQtMTk2LjgxLTcwLjUyQzQ3OS42Niw3MzIuMzksNDA3LjA1LDY0Mi4xNSwzNDYuMjEsNTM3LjA2WiIvPjwvc3ZnPg==",
    category: "JS frameworks",
    link: "react"
  },
  {
    name: "Vue.js",
    description:
      "Vue.js (также известен как Vue; /vjuː/) — JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов[4] в парадигме реактивного программирования. Легко интегрируется в проекты с использованием других JavaScript-библиотек, благодаря постепенно расширяемой экосистеме[5]. Может функционировать как веб-фреймворк, помогающий разрабатывать продвинутые одностраничные приложения.",
    icon:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNi41NDkgMzEuNTIzIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojNDFiODgzO30uYntmaWxsOiMzNTQ5NWU7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJhIiBkPSJNMjkuMjM5LDBoNy4zMUwxOC4yNzQsMzEuNTIzLDAsMEgxMy45OGw0LjI5NCw3LjMxTDIyLjQ3NywwWiIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMCwwLDE4LjI3NCwzMS41MjMsMzYuNTQ5LDBoLTcuMzFMMTguMjc0LDE4LjkxNCw3LjIxOCwwWiIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNNTAuNTYsMCw2MS42MTYsMTkuMDA1LDcyLjU4MSwwSDY1LjgxOWwtNC4yLDcuMzFMNTcuMzIxLDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDMuMzQyKSIvPjwvc3ZnPg==",
    category: "JS frameworks",
    link: "vue-js"
  },
  {
    name: "Angular",
    description:
      "Angular (версия 2 и выше) - это открытая и свободная платформа для разработки веб-приложений, написанная на языке TypeScript, разрабатываемая командой из компании Google, а также сообществом разработчиков из различных компании. Angular - это полностью переписанный фреймворк от той же команды, который назывался AngularJS",
    icon:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOCA0MC4zMDEiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiNlMjMyMzc7fS5ie2ZpbGw6I2I1MmUzMTt9LmN7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4xIC0wLjY5NykiPjxwYXRoIGNsYXNzPSJhIiBkPSJNLjEsNy4zNzcsMTguODQ4LjcsMzguMSw3LjI1OGwtMy4xMTcsMjQuOEwxOC44NDgsNDEsMi45NjUsMzIuMTgxWiIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNMTQ1LjE2LDcuMjU4LDEyNS45MDguN1Y0MWwxNi4xMzUtOC45MjFMMTQ1LjE2LDcuMjU4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwNy4wNikiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTU5LjQsMzIuMjc0LDQ3LjcxNCw1OC4yNjVsNC4zNjQtLjA3NCwyLjM0NS01Ljg2M0g2NC45bDIuNTY4LDUuOTM4LDQuMTcxLjA3NEw1OS40LDMyLjI3NFptLjAzLDguMzI3LDMuOTQ4LDguMjUzSDU1Ljk1MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MC41MTkgLTI2Ljg3MSkiLz48L2c+PC9zdmc+",
    category: "JS frameworks",
    link: "angular"
  }
];
