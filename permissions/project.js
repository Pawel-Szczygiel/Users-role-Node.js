const { ROLE } = require('../data');

function canViewProject(user, project) {
    return user.role === ROLE.ADMIN || project.userId === user.id;
}

function scopedProjects(user, projects) {
    if (user.role === ROLE.ADMIN) return projects;
    return projects.filter(project => project.userId === user.id)
}

function canDeleteProject(user, project) {
    return user.id === project.userId;
}

function canEditProject(user, project) {
    return user.id === project.userId;
}

module.exports = { canViewProject, scopedProjects, canDeleteProject, canEditProject}