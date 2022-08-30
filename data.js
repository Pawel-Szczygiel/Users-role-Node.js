const ROLE = {
    ADMIN: 'admin',
    USER: 'user'
  }
  
  module.exports = {
    ROLE,
    users: [
      { id: 1, name: 'Paweł', role: ROLE.ADMIN },
      { id: 2, name: 'Szymon', role: ROLE.USER },
      { id: 3, name: 'Paulina', role: ROLE.USER }
    ],
    projects: [
      { id: 1, name: "Paweł's Project", userId: 1 },
      { id: 2, name: "Szymon's Project", userId: 2 },
      { id: 3, name: "Paulin's Project", userId: 3 }
    ]
  }