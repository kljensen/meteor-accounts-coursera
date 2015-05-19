Package.describe({
  summary: "Login service for Coursera accounts",
  version: "1.0.4"
});

Package.onUse(function(api) {
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('coursera', ['client', 'server']);

  api.addFiles('coursera_login_button.css', 'client');

  api.addFiles("coursera.js");
});
