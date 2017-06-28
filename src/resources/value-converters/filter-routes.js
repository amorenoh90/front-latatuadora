export class FilterRoutesValueConverter {
  toView(routes, level = 0, role = 0) {
    return routes.filter(route => {
      let navRoles = route.config.roles ? route.config.roles : [0];
      let navLevel = route.config.level ? route.config.level : 0;
      let roleMatches = navRoles.indexOf(role) != -1;

      return roleMatches && level == navLevel;
    });
  }
}